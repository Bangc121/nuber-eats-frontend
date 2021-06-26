import React from 'react';
import { isLoggedInVar } from '../apollo';

export const LoggedInRouter = () => {
    const onClick = () => {
        isLoggedInVar(false);
    }
    return (
        <div>
            <h1>Logged out</h1>
            <button onClick={onClick}>Click to out</button>
        </div>
    )
}