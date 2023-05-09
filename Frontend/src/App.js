import React from "react";
import Header from "./components/Header";
import { Route,Routes } from "react-router-dom";
import Additem from "./components/Additem";
import Home from "./components/Home";
import About from "./components/About";
import Items from "./components/Product/Items";
import Itemdetail from "./components/Product/Itemdetail";
// import Report from "./components/Report";
// import Chart from "./components/Chart";




function App() {
  return (
  <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/add" element={<Additem/>} exact />
        <Route path="/products" element={<Items/>} exact />
        <Route path="/about" element={<About/>} exact />
        {/* <Route path="/chart" element={<Items/>} exact /> */}
        <Route path="/Products/:id" element={<Itemdetail/>} exact />
        

      </Routes>

      </main>
  </React.Fragment>
  )

}

export default App;
