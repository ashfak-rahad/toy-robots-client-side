import React from 'react';

const Gallery = () => {
    return (
        <div>
            <h1 className='text-5xl text-center font-bold p-5'>Robot Galley</h1>
            <div className='flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 '>
            <div>
                <img className='rounded-2xl' src="https://images.pexels.com/photos/8294682/pexels-photo-8294682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div>
                <img className='rounded-2xl' src="https://images.pexels.com/photos/8294558/pexels-photo-8294558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div>
                <img className='rounded-2xl' src="https://images.pexels.com/photos/8294557/pexels-photo-8294557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div>
                <img className='rounded-2xl' src="https://images.pexels.com/photos/8294553/pexels-photo-8294553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div>
                <img className='rounded-2xl' src="https://images.pexels.com/photos/8294847/pexels-photo-8294847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div>
                <img className='rounded-2xl' src="https://images.pexels.com/photos/8295036/pexels-photo-8295036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>

            </div>
            
        </div>
    );
};

export default Gallery;