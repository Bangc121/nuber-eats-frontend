module.exports = {
  client: {
    includes: ["./src/**/*.tsx"],
    tagName: "gql",
    service: {
      name: "nuber-eats-backend",
      url: "http://localhost:4000/graphql",
    },
  },
};

// 너의 file을 보면서 너가 gql을 사요할때마다 typescript definiition을 줄거야
