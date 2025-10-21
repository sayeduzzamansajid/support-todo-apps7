import React from 'react';
// import './App.css'

const Navbar = () => {
    return (
        <div className="navbar flex justify-between w-[90vw] md:w-[1350px] mx-auto ">
            <h1 className='font-bold text-2xl'>CS — Ticket System</h1>
            <div>
                <ul className='flex gap-8 items-center font-semibold max-sm:hidden'>
                    <li className='menu rounded-xl'>Home</li>
                    <li className='menu rounded-xl'>FAQ</li>
                    <li className='menu rounded-xl'>Changlog</li>
                    <li className='menu rounded-xl'>Blog</li>
                    <li className='menu rounded-xl'>Download</li>
                    <li className='menu rounded-xl'>Contact</li>
                    <button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'> +  New Ticket</button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;