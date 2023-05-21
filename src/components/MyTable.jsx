import React from "react";
import { Link } from "react-router-dom";

const MyTable = ({ robot,deleteRobot }) => {
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
        <button><Link to={`/update/${_id}`}>edit</Link></button>
      </td>
      <td>
        <button onClick={()=>deleteRobot(_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default MyTable;