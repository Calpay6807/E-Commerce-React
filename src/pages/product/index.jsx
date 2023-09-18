import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCart from "../product-cart";

const Product = ({ data, setData }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Veriler alınamadı: ", error);
        setLoading(false);
      });
  }, []);

  //   if (!Array.isArray(data) || data.length === 0) {
  //     return <p>Veriler bir dizi değil veya boş.</p>;
  //   }

  return (
    <div className="cont">
      <ProductCart data={data} loading={loading} />
    </div>
  );
};

export default Product;
