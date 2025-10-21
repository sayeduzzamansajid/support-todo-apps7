import React from 'react';

const inProcess = ({inprocess}) => {
    return (
        <div className="w-[70vw] h-[80px] md:w-[700px] md:h-[250px] max-sm:mx-auto rounded-xl flex justify-center items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
             {/* bg-[url('/src/assets/vector1.png'),url('/src/assets/vector2.png')] bg-[position:left_center,right_center]
        bg-no-repeat  */}
            <div className=''>
                <p className='text-white text-2xl max-sm:text-sm'>In Process</p>
                <h1 className='text-4xl text-center text-white font-bold max-sm:text-lg'>{inprocess}</h1>
            </div>

        </div>
    );
};

export default inProcess;