import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black pt-[70px] mx-auto '>
            <div className='footer w-[90vw] md:w-[1350px] mx-auto bg-black text-white h-auto flex flex-col md:flex-row justify-between'>
                <div className='md:w-2/7 max-sm:mx-auto mb-4'>
                    <h1 className='font-bold text-2xl'>CS — Ticket System</h1>
                    <div className='mt-5 '>
                        <p className='text-gray-400'>This support ticket system is designed to make it easy for customers to reach our help desk quickly and efficiently. Whether you are facing technical issues, billing concerns, or general inquiries, our team is here to provide solutions. Submit a ticket at any time, and one of our specialists will respond as soon as possible. We value your time and aim to deliver reliable, friendly, and professional support every step of the way.</p>
                    </div>
                </div>
                <div className="">
                    <h1 className='text-xl font-semibold'>Company</h1>
                    <div className='mt-5 space-y-3'>
                        <p className='text-gray-400'>About Us</p>
                        <p className='text-gray-400'>Our Mission</p>
                        <p className='text-gray-400'>Contact Saled</p>
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-xl font-semibold'>Services</h1>
                    <div className='mt-5 space-y-3'>

                        <p className='text-gray-400'>Product & Services</p>
                        <p className='text-gray-400'>Customer Stories</p>
                        <p className='text-gray-400'>Download Apps</p>
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-xl font-semibold'>Information</h1>
                    <div className='mt-5 space-y-3'>

                        <p className='text-gray-400'>Privacy Policy</p>
                        <p className='text-gray-400'>Terms & Conditions</p>
                        <p className='text-gray-400'>Join US</p>
                    </div>
                </div>
                <div className='max-sm:mb-[30px]'>
                    <h1 className='text-xl font-semibold'>Social Links</h1>
                    <div className='mt-5 space-y-3 flex flex-col'>
                        <a className='text-gray-400' href="">@CS-Ticket System</a>
                        <a className='text-gray-400' href="">@CS-Ticket System</a>
                        <a className='text-gray-400' href="">@CS-Ticket System</a>
                        <a className='text-gray-400' href="">@CS-Ticket System</a>
                    </div>

                </div>
            </div>
            <div className='text-white w-[90vw] md:w-[1350px] mx-auto flex justify-center items-center py-[20px] border-t-1 border-gray-700'>
                <p className='text-gray-400 font-bold'>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;