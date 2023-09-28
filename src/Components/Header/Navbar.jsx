import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
    return (
        <div>
            <div className="navbar py-4 flex justify-around bg-slate-200">
            
                <Logo></Logo>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal flex gap-5 text-xl px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                                }
                            >
                                Home
                            </NavLink></li>
                        <li>
                            <NavLink
                                to="/register"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                                }
                            >
                                Register
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                                }
                            >
                                Login
                            </NavLink>
                            
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;