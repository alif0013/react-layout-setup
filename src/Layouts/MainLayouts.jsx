import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
           <div>
           <Navbar></Navbar>
           </div>
           <div>
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default MainLayouts;