
import Calendar from '../../assets/calendar.png'
// import './App.css'

const TicketCard = ({ issue, handleClick }) => {
    // console.log(issue)
    return (
        <div onClick={()=> handleClick(issue)} className='ticket-card bg-white p-3 rounded-lg w-[70vw] md:w-[480px] space-y-3 border-2 border-gray-400 shadow-2xl max-sm:mx-auto'>
            <div className='flex justify-between items-center px-4 py-1'>
                <h1 className='font-bold max-sm:text-sm'>{issue.title}</h1>
                <div className='bg-green-200 rounded-3xl flex justify-center items-center  w-[110px] h-[35px] gap-4'>
                    <div className='bg-green-600 rounded-full w-[15px] h-[15px]'></div>
                    <p className='text-[10px] font-semibold'>{issue.status}</p>
                </div>
            </div>
            <p className='text-gray-400 max-sm:text-xs'>{issue.description}</p>
            <div className='flex flex-col md:flex-row max-sm:gap-2  justify-between'>
                <div className='flex gap-6  max-sm:justify-between'>
                    <p className='text-gray-500 max-sm:text-xs'>{issue.id}</p>
                    <p className='text-green-500 max-sm:text-xs'>{issue.priority}</p>
                </div>
                <div className='flex gap-6  max-sm:justify-between'>
                    <h1 className='text-gray-500 max-sm:text-xs'>{issue.assignee}</h1>
                    <p className='text-gray-500 max-sm:text-xs'><span><img className='inline' src={Calendar} alt="" /></span> {issue.date}</p>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;