import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Products from "./component/Products";
import Product from "./component/Product";
import Home from "./component/Home";
import Notfound from "./component/Notfound";

function App() {

  return (
    <div className="App">
       <Navbar/> 
      <Routes>
     
    
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*"  element={<Notfound/>} />
        <Route path={`/products/:id/:price/:name`} element={<Product />} />
        </Routes>
    </div>
  );
}

export default App;

// for routing 
// 1. npm install react-router-dom@6
// 2. wrap <App/> under <BrowserRouter>
// 3. inside the  App.js cover all componenet in routes and route
// 4. for navigation between page use <link to=""> for each page address 




