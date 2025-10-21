
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './Components/Nav bar/Navbar'
import Resolved from './Components/Statistic/Resolved'
import InProcess from './Components/Statistic/inProcess'
import TicketCard from './Components/Ticket Card/TicketCard'
import CustomerTicket from './Components/Customer Ticket/CustomerTicket'
// import { Suspense, useState } from 'react';
import { useEffect, useState, Suspense } from 'react';
import PendingTask from './Components/Pending Task/PendingTask'
import ResolvedTask from './Components/ResolvedTask/ResolvedTask'
import Footer from './Components/Footer/Footer'


// const fetchIssues = async () => {
//   const res = await fetch("/problemData.json")
//   return res.json()
// }


// const issues = fetchIssues();
function App() {
  const [inprocess, setInprocess] = useState(0);
  const [resolved, setresolved] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);
  const [allTickets, setAllTickets] = useState([]);


  //  Fetch data and store it in state
  useEffect(() => {
    const fetchIssues = async () => {
      const res = await fetch("/problemData.json");
      const data = await res.json();
      setAllTickets(data);
    };
    fetchIssues();
  }, []); 

  const handleClick = (issue) => {
    if (tasks.find(task => task.id === issue.id) || resolvedTask.find(task => task.id === issue.id)) {
      toast.warn("This Task is already in process!");
      return;
    }
    else {
      toast.success("Task added to In Process!");
      setInprocess(inprocess + 1);
      const newTask = [...tasks, issue];
      setTasks(newTask);
    }
  }

  // const handleClick = (issue) => {
  //   if (tasks.includes(issue)) {
  //     toast("This Task Already Exist!")
  //     return
  //   }
  //   else {
  //     toast("Task addeded")
  //     setInprocess(inprocess + 1)
  //     const newTask = [...tasks, issue]
  //     setTasks(newTask);

  //   }
  // }

  const handleRemove = (task) => {
    setInprocess(inprocess - 1);
    setresolved(resolved + 1);

    setResolvedTask([...resolvedTask, task]);

    const newTask = tasks.filter(tsk => tsk.id !== task.id);
    setTasks(newTask);
    //updationgg the Task while completed and removing from display 
    const updatedAllTickets = allTickets.filter(ticket => ticket.id !== task.id);
    setAllTickets(updatedAllTickets);
    toast("Task marked as Resolved!");
  }

  return (
    <>
      <Navbar></Navbar>
      <div className='bg-[#E9E9E9] h-auto md:pb-[90px] max-sm:w-[90vw] mx-auto'>

        <div className='w-[90vw] md:w-[1350px] mx-auto flex flex-col md:flex-row gap-[10px] md:gap-[24px] pt-[50px] md:pt-[60px] bg-[#E9E9E9]'>

          <InProcess inprocess={inprocess}></InProcess>
          <Resolved resolved={resolved}></Resolved>

        </div>

        <div className='w-[90vw] md:w-[1350px] mx-auto flex flex-col-reverse md:flex-row justify-between md:gap-[12px] md:pt-[60px] bg-[#E9E9E9] '>

          <Suspense fallback={<h1>Loading Data ...</h1>}>
            <CustomerTicket issues={allTickets} handleClick={handleClick}></CustomerTicket>
          </Suspense>


          <div className='mt-9 max-sm:mx-auto'>
            <PendingTask tasks={tasks} handleRemove={handleRemove}></PendingTask>
            <ResolvedTask resolvedTask={resolvedTask}></ResolvedTask>
          </div>


        </div>

      </div>


      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
