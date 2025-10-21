import React from 'react';

const TaskCard = ({ task,handleRemove }) => {
    return (
        <div className='px-3 py-3 bg-white rounded-xl shadow-xl mt-2 w-full space-y-3 border-1 border-gray-500'>
            <h1 className='text-[18px] font-bold'>{task.title}</h1>
            <button onClick={()=> handleRemove(task)} className='bg-green-500 w-full rounded-lg text-white font-semibold text-center py-1'>Completed</button>
        </div>
    );
};

export default TaskCard;