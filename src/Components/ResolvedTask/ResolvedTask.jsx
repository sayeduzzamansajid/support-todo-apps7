import React from 'react';
import ResolvedCard from './ResolvedCard';

const ResolvedTask = ({resolvedTask}) => {
    return (
        <div className='w-[330px] mt-8'>
            <h1 className='font-bold text-2xl'>Resolved Tasks</h1>
            
            {
                resolvedTask.map(resTsk=> <ResolvedCard resTsk={resTsk}></ResolvedCard>)
            }
        </div>
    );
};

export default ResolvedTask;