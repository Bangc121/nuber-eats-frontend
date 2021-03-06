import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import { LOCALSTORAGE_TOKEN } from "./constants";

const token = localStorage.getItem(LOCALSTORAGE_TOKEN);
export const isLoggedInVar = makeVar(Boolean(token));
export const authToken = makeVar(token);

console.log("isLoggedInVar:", isLoggedInVar());
console.log("authToken:", authToken());

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar;
            },
          },
          token: {
            read() {
              return authToken();
            },
          },
        },
      },
    },
  }),
});

// read는 field의 값을 반환하는 함수
