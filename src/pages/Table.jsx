import React from "react";
import { Link } from "react-router-dom";

const Table = ({ robot }) => {
  const { _id,name, seller_name, seller_email, quantity, sub_category, price } =
    robot;
  return (
    <tr>
      <td>{name}</td>
      <td>{seller_name}</td>
      <td>{sub_category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <button><Link to={`/toy/${_id}`}>Details</Link></button>
      </td>
    </tr>
  );
};

export default Table;
