import React, { useEffect, useState } from "react";

import useTitle from "../hooks/useTitle";
import MyTable from "../components/MyTable";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyToys = () => {
  useTitle("MyToys");
  const [toy, setToy] = useState([]);
  const { user } = useContext(AuthContext);
  console.log("mytoys", user?.email);

  useEffect(() => {
    fetch(`https://toy-robots.vercel.app/seller?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [user]);

  const deleteRobot = (id) => {
    const isConfirmDelete = confirm("Are you suru you went to Delete");

    if (isConfirmDelete) {
      fetch(`https://toy-robots.vercel.app/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            
            Swal.fire({
              title: "",
              text: "delete Successfully!",
              icon: "success",
              confirmButtonColor: "#00abe4",
              confirmButtonText: "ok",
            });
          }
        });
    }
  };
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
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {toy.map((robot) => (
              <MyTable key={robot._id} robot={robot} deleteRobot={deleteRobot}></MyTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
