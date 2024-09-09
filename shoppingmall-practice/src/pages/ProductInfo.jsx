import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import "./ProductInfo.scss";
import { BeatLoader } from "react-spinners";

const fetchProductId = (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`).then((response) =>
    response.json()
  );
};

const ProductInfo = () => {
  const { productId } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProductId(productId),
  });

  if (isLoading) return <div className='spinner-container'><BeatLoader color="rgba(80, 146, 240, 0.932)" /></div>;
  if (error) return <div>{error.message}</div>;
  console.log(data);

  return (
    <div className="detail-item-container">
      <div className="detail-img-wrapper">
        <img className="detail-img" src={data.image} alt={data.title}></img>
      </div>
      <div className="detail-item">
        <p className="detail-title">{data.title}</p>
        <p className="detail-price">${data.price}</p>
        <p className="detail-description">{data.description}</p>
        <p className="detail-rate">★{data.rating.rate}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
