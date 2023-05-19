import React from 'react';
import { Link } from 'react-router-dom';

const PageError = () => {
    return (
        <div className="text-center  mx-16">
      <div id="error-page">
        
        <div>
            <img className="md:w-1/2 px-3 mx-auto " src="https://img.freepik.com/premium-vector/cartoon-robot-with-broken-toy-with-number-404-it_9206-9070.jpg?w=360" alt="" />
        </div>
        
        
        <Link className="btn btn-outline" to ="/">Go to Home</Link>
      </div>
    </div>
    );
};

export default PageError;