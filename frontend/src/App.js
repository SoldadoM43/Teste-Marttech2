import React from 'react';

import './App.css';
import { AuthContext } from './providers/auth';

import AppRoutes from "./routes";

function App() {
  const {user} = React.useContext(AuthContext);
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
