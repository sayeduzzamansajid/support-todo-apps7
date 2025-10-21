import React from 'react';

const Resolved = ({resolved}) => {
    return (
        <div className='w-[70vw] h-[80px] md:w-[700px] md:h-[250px] max-sm:mx-auto rounded-xl flex justify-center items-center  bg-gradient-to-r from-[#54CF68] to-[#00827A]'>
            <div>
                <p className='text-white text-2xl max-sm:text-sm'>Resolved</p>
                <h1 className='text-4xl text-center text-white font-bold max-sm:text-lg'>{resolved}</h1>
            </div>
        </div>
    );
};

export default Resolved;