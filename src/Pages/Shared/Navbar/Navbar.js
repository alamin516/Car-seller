import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = {}

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
    </>

    const navRight = <>
        {
            user?.uid ?
                <>
                    { user?.displayName && <li><Link>Md Alamin</Link></li>}
                    { user?.photoURL ? <li>
                        <div className="avatar">
                            <div className="lg:w-10 w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" alt='' />
                            </div>
                        </div>

                    </li> :
                    <li>
                    <div className="avatar">
                        <div className="lg:w-10 w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" alt='' />
                        </div>
                    </div>

                </li>
                    
                    }
                    <li><Link to='/login'>SignOut</Link></li>
                </>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>SignUp</Link></li>
                </>
        }
    </>

    return (
        <div className='bg-[#005DA8]'>
            <div className="navbar max-w-[1280px] mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-72">
                            {menuItems}
                            {navRight}
                        </ul>
                    </div>
                    <Link to={'/'} className="text-white text-3xl">CarSeller</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-white text-xl">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-white text-xl disabled:hover:bg-primary">
                        {navRight}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;