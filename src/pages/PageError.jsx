import React from 'react';

const PageError = () => {
    return (
        <div className="text-center  mx-16">
      <div id="error-page">
        
        <div>
            <img className="md:w-1/2 px-3 mx-auto " src="https://storyset.com/illustration/oops-404-error-with-a-broken-robot/pana" alt="" />
        </div>
        
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link className="btn btn-outline" to ="/">Go to Home</Link>
      </div>
    </div>
    );
};

export default PageError;