import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Advert from "../advert";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Veriler alınamadı: ", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Ürün yükleniyor...</p>;
  }

  return (
    <>
      <div
        style={{ height: "50vh", width: "100%" }}
        className="detail container  d-flex justify-content-center align-items-center"
      >
        <div className="shadow border-4">
          <img src={product.images[1]} alt="" />
          <h1 className="head">{product.title}</h1>
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>
          <p className="discount">%{product.discountPercentage}</p>
          <Link className="btn btn-warning text-white" to={"/"}>
            Anasayfa
          </Link>
        </div>
      </div>
      {/* reklam alanı*/}

      <Advert product={product} />
    </>
  );
};

export default ProductDetail;
