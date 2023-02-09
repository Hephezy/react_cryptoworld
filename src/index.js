import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import { Provider } from "react-redux";
import store  from './app/store';


ReactDOM.createRoot(document.getElementById('root')).render(
    <Router basename={"/cryptoworld"}>
      <Provider store={store}>
          <App/>
      </Provider>
    </Router>
);

