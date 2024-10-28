import React from "react";
import bag from "../../assets/IMG/image.png";

const FP = () => {
    return (
        <div className='relative flex items-center justify-start bg-cover bg-center h-svh w-full' style={{ backgroundImage: `url(${bag})` }}>
            <div className='absolute top-0 right-0 bottom-0 left-0 bg-black opacity-50'></div> 
            <main className='relative px-10 lg:px-24 z-10 text-left text-white'>
                <h4 className='mt-1 sm:mt-5 sm:max-w-xl text-2xl'>
                    Dress up, shine bright, and carry the best.
                </h4>
                <button className='border rounded mt-6 border-white hover:bg-white hover:text-black text-white bg-black w-44 h-12'>
                    Shop Now
                </button>
            </main>
        </div>
    );
}

export default FP;
