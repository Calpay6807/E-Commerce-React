import React from "react";
import { Link } from "react-router-dom";

const ProductCart = ({ data, loading }) => {
  if (loading) {
    return <p>Yükleniyor...</p>;
  }
  console.log(data);
  return (
    <>
      {data.map((product) => (
        <div className="content border shadow m-4" key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.images[0]} alt="" />
          <p>{product.description}</p>

          <Link
            to={`/product-detail/${product.id}`}
            className="btn btn-success"
          >
            Detay
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductCart;
