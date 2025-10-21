import React from 'react';
import TaskCard from './TaskCard';

const PendingTask = ({ tasks, handleRemove }) => {
    // console.log(typeof tasks)
    return (
        <div className='w-[330px]'>
            <h1 className='font-bold text-2xl'>Tasks Status</h1>
            {
                tasks.map(task => <TaskCard task={task} handleRemove={handleRemove}></TaskCard>)
            }
        </div>
    );
};

export default PendingTask;