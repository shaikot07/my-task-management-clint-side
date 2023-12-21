import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Home/Navbar/NavBar';
import SideNavbar from '../Home/Navbar/SideNavbar';

const LayOut = () => {
      return (
            <div className='overflow-hidden'>
            <NavBar></NavBar>
            <div className='flex bg-slate-900 text-white'>
                <div className='h-screen w-16 fixed left-0 top-[90px] z-30'>
                   <SideNavbar></SideNavbar>
                </div>
                <div className='w-full'>
                    
                        <Outlet></Outlet>
                    
                </div>
            </div>
        </div>
      );
};

export default LayOut;