import React from "react";

import "./app.css";
import { AuthContext } from "./providers/auth";
import AppRoutes from './routes';

function App() {
    const {user} = React.useContext(AuthContext);
    console.log({user});
    return (
        <AppRoutes />
    );
}
export default App;