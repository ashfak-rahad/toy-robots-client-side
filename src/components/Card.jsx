import React from "react";
import { Link } from "react-router-dom";

const Card = ({ subCategory }) => {
  const {_id, name, image, price, rating } = subCategory;
  return (
    <div data-aos="zoom-in-right" className="border shadow-lg rounded-lg hover:scale-105 duration-300">
      <img
        className="w-full h-[200px] object-cover rounded-t-lg "
        src={image}
        alt=""
      />
      <div className="p-4">
      <p><span className="font-bold">Name:</span> {name}</p>
      <p><span className="font-bold">Price:</span>{price}</p>
      <p><span className="font-bold">Rating:</span>{rating}</p>
      </div>
      <div className="px-2 py-4">
        <div>
          <Link to={`/toy/${_id}`}>
            <button className="btn btn-primary">Views Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
