import React from 'react';
import logo from "../../assets/icons/image.svg";
const Navbar = () => {
    return (
        <div className='bg-[#1c2a1d] flex items-center justify-between px-6 py-2 shadow-[0px_1px_2px_rgba(255,_255,_255,_0.1),_0_1px_1px_rgba(255,_255,_255,_0.06)]'>
            {/* <h2 className='text-xl font-medium to-black py-2'>AceCriollo</h2> */}
            <div className=''>
                <img className='w-[60%] py-2 drop-shadow' src={logo} alt="Ace-Criollo-logo" />

            </div>
        </div>
    );
};

export default Navbar;