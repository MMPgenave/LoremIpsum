import React from "react";
import { useState } from "react";
import DataProvider from "./Provider";
import "./style.css";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
function App() {
  return (
    <DataProvider>
      <Home />
      <Modal />
      <Sidebar />
    </DataProvider>
  );
}

export default App;
