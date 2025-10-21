// import React, { Suspense, use } from 'react';
import TicketCard from '../Ticket Card/TicketCard';

const CustomerTicket = ({ issues, handleClick }) => {
    // const allIssues = use(issues)
    // console.log(allIssues)
    return (
        <>
            <div className='max-sm:mt-[50px] '>
                <h1 className='text-xl text-gray-700 font-bold mb-4 max-sm:w-[70vw] max-sm:pl-6 '>Customer Tickets</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 shadow-lg max-sm:mx-auto md:rounded-2xl pb-[30px] md:py-[10px] md:px-[10px]'>
                    {
                        issues.map(issue => <TicketCard key={issue.id} issue={issue} handleClick={handleClick} issues={issues}></TicketCard>)
                        //  issues.map(issue => <TicketCard key={issue.id} issue={issue} handleClick={handleClick}></TicketCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default CustomerTicket;