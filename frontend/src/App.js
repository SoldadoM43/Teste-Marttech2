import React from 'react';

import './App.css';

import AppRoutes from "./routes";
import { useAuth } from './providers/auth';

function App() {
  const {user} = useAuth;
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
