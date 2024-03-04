import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Space } from "antd"; // Fix import statement
import { NavBar, HomePage, Exchanges, CryptoCurrencies, CryptoDetails, News } from "./components";
import './App.css'

const App = (props) => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main"></div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/exchanges" element={<Exchanges/>} />
          <Route path="/cryptocurrencies" element={<CryptoCurrencies/>} />
          <Route path="/crypto/:coinId" element={<CryptoDetails/>} />
          <Route path="/news/:coinId" element={<News/>} />
        </Routes>
      </Layout>
      <div className="footer"></div>
    </div>
  );
};

App.propTypes = {};

export default App;
