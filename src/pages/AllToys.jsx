import React, { useEffect, useState } from "react";
import Table from "./Table";

const AllToys = () => {
  const [toy, setToy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/robot")
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, []);
  return (
    <div className="p-4">
      <div className="text-center mt-5">
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered input-accent w-full max-w-lg"
        />
      </div>
      <h1 className="text-black font-bold text-3xl text-center py-2">
        All Toys
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
            <Table key={robot._id} robot={robot}></Table>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default AllToys;
