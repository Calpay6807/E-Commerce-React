import "./style.scss";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/product";
import { useState } from "react";
import Header from "./components/header";
import ProductDetail from "./pages/product-detail";
import Footer from "./components/footer";

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <Header data={data} setData={setData} />
      <Routes>
        <Route path={"/"} element={<Product data={data} setData={setData} />} />
        <Route path={"/product-detail/:id"} element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
