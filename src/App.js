// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import configs from "./config";
import IframeContent from "./components/IframeContent";
import Home from "./components/Home";

const getDomainConfig = () => {
  const hostname = window.location.hostname.toLowerCase();
  return configs[hostname] || {};
};

const App = () => {
  const [config, setConfig] = useState({});

  useEffect(() => {
    const domainConfig = getDomainConfig();
    setConfig(domainConfig);
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Welcome to {config.appName}</h1>
        <Routes>
          <Route path="/" element={<Home config={config} />} />
          <Route path="/iframe" element={<IframeContent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
