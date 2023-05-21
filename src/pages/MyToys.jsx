import React, { useEffect, useState } from "react";


import useTitle from "../hooks/useTitle";
import MyTable from "../components/MyTable";
import { useContext } from "react";
import  { AuthContext } from "../provider/AuthProvider";

const MyToys = () => {
  useTitle("MyToys");
  const [toy, setToy] = useState([]);
  const {user}=useContext(AuthContext)
  console.log("mytoys",user?.email
  );

  useEffect(() => {
    fetch(`https://toy-robots.vercel.app/seller?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [user]);
  return (
    <div className="p-4">

      <h1 className="text-black font-bold text-3xl text-center py-2">
        My Toys
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Seller</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toy.map((robot) => (
              <MyTable key={robot._id} robot={robot}></MyTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
