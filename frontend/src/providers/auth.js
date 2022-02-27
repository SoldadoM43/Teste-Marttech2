import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [newTarefa, setNewTarefa] = useState({
        nome: '',
        description: '',
    })
    const [user, setUser] = useState({
        nome: 'Diego',
    });

    useEffect(() => {
        const userStorege = localStorage.getItem("user");
        if (userStorege) {
            setUser(JSON.parse(userStorege));
        } else {
            setUser({
                name: "",
            })
        }
    }, []);

    return(
        <AuthContext.Provider value={{user, setUser, newTarefa, setNewTarefa}}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);