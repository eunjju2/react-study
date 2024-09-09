import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import "./Product.scss";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const fetchProduct = () => {
  return fetch("https://fakestoreapi.com/products").then((response) =>
    response.json()
  );
};

const Product = () => {
  const [productId, setProductId] = useState("");
  const navigate = useNavigate();

  function clickHandler(e) {
    const id = e.currentTarget.getAttribute('data-id');
    setProductId(id);
    console.log(id)
    navigate(`/product/${productId}`);
  }

  useEffect(() => {
    navigate(`/product/${productId}`);
  }, [productId]);

  const { data, error, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: fetchProduct,
  });

  if (isLoading) return <div className='spinner-container'><BeatLoader color="rgba(80, 146, 240, 0.932)" /></div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="product-container">
      {data.map((item) => (
        <div
          className="product-wrapper"
          key={item.id}
          data-id={item.id}
          onClick={clickHandler}
        >
          <div className="img-wrapper">
            <img className="productImg" src={item.image} alt={item.title} />
          </div>
          <p className="product-name">{item.title}</p>
          <p className="product-price">${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
