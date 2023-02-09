import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar, Homepage, Cryptocurrencies, CryptoDetails, } from "./components";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes basename="/cryptoworld/">
              <Route exact path={"/"} element={<Homepage />} />
              <Route exact path={"/cryptocurrencies/"} element={<Cryptocurrencies />} />
              <Route exact path={"/crypto/:coinId/"} element={<CryptoDetails />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
            <Link to="/">
              CryptoWorld Inc.
            </Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/cryptocurrencies">Coins</Link>
          </Space>
      </div>
    </div>
  </div>
 );
};

export default App;
