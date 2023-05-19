import React from 'react';
import { Link } from 'react-router-dom';

const PageError = () => {
    return (
        <div className="text-center  mx-16">
      <div id="error-page">
        
        <div>
            <h1 className='text-3xl text-center font-bold'>404</h1>
            <img className="md:w-1/2 px-3 mx-auto " src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        
        
        <Link className="btn btn-outline" to ="/">Go to Home</Link>
      </div>
    </div>
    );
};

export default PageError;