import React from 'react';

const ResolvedCard = ({resTsk}) => {
    return (
        <div className='bg-sky-200 p-4 rounded-lg mt-2 shadow-lg border-1 border-gray-400'>
            <h1 className='text-[18px] font-bold text-gray-500'>{resTsk.title}</h1>
        </div>
    );
};

export default ResolvedCard;