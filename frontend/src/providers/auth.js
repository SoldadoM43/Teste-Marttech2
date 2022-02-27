import React from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const user = {
        name: 'Diego',
    };
    return(
        <AuthContext.Provider value={{user}}>
            {props.children}
        </AuthContext.Provider>
    );
};