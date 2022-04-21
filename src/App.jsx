import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Header />
      <Home />
    </Router>
  );
};

export default App;
