import React from 'react';
import useTitle from '../hooks/useTitle';

const AddToy = () => {
    useTitle("AddToy");
    return (
        <div>
            <h1 className='text-center font-bold text-3xl text-black py-5'>Add A Toy</h1>

        </div>
    );
};

export default AddToy;