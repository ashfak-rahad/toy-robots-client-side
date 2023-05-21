import React from "react";
import useTitle from "../hooks/useTitle";
import { useLoaderData } from "react-router-dom";

const VeiwDetails = () => {
  useTitle("Details");
  const viewAll= useLoaderData();
  console.log(viewAll);
  const{name,image,seller_name,seller_email,sub_category,price,rating,quantity,description}=viewAll;
  return (
    <div>
      <div className="card card-side bg-base-100 p-7 m-4">
        <figure>
          <img
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p><span className="font-bold">Seller:</span>{seller_name}</p>
          <p><span className="font-bold">Email:</span>{seller_email}</p>
          <p><span className="font-bold">Category:</span>{sub_category}</p>
          <p><span className="font-bold">Price:</span>{price}</p>
          <p><span className="font-bold">Rating:</span>{rating}</p>
          <p><span className="font-bold">Quantity:</span>{quantity}</p>
          <p><span className="font-bold">Description:</span>{description}</p>
         
        </div>
      </div>
    </div>
  );
};

export default VeiwDetails;
