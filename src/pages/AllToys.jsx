import React, { useEffect, useState } from "react";
import Table from "./Table";

const AllToys = () => {
  const [toy, setToy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/robot")
      .then((res) => res.json())
      .then((data) =>setToy(data));
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
      <div>
        {
            toy.map(robot =><Table
            key={robot._id}
                robot={robot}
            ></Table>)
        }
      </div>
    </div>
  );
};

export default AllToys;
