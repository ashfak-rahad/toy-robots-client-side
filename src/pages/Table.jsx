import React from 'react';

const Table = ({robot}) => {
    const {name,seller_name,seller_email,quantity,sub_category,price}=robot;
    return (
        <div>
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
              
            <tr>
                
                <td>{name}</td>
                <td>{seller_name}</td>
                <td>{sub_category}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td><button>View Details</button></td>
              </tr>
            </tbody>
            
          </table>
        </div>
        </div>
    );
};

export default Table;