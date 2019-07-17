import React from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Auxi from "./hoc/Auxi/Auxi";

function App() {
  return (
    <Auxi>
      <Layout />
    </Auxi>
  );
}

export default App;
