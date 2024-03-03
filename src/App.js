import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import {AllRoutes} from "./routes/AllRoutes.js";

function App() {
  return (
    <div className="app">
      <Header />
      <AllRoutes/>
    </div>
  );
}

export default App;
