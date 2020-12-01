import React from 'react';
import './assets/css/global.css'
import Routes from "./routes";
import { ToastProvider } from 'react-toast-notifications';
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css'
function App() {
  return (
    <div className="App">
      <ToastProvider>
        <Routes />
      </ToastProvider>
    </div>
  );
}

export default App;
