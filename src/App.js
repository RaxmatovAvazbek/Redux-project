import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Login , Header, Registr, Navbar } from "./components";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Header" element={<Header/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Registr" element={<Registr/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
