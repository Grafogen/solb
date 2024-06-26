import React, {useState} from 'react';
import {logo, sun} from '../assets/index'
import {Link, useNavigate} from "react-router-dom";


const Icon = ({styles, name, imgURL, isActive, disabled, handleClick}) => {
    return(
        <div
            className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`}>
            {!isActive ? (
                <img src={imgURL} alt='fund_logo' className='w-1/2 h-1/2'/>
            ) : (
                <img src={imgURL} alt='fund_logo' className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`}/>
            )}
        </div>
    )
}


const SideBar = () => {
    const navigate = useNavigate()

    const [isActive, setIsActive] = useState('dashboard')

    return (
        <div className='flex justify-between items-center flex-col sticky top-5 h-[93vh]'>
            <Link to="/">
                <Icon styles='w-[52px] h-[52px] bg-[#2c2f32]' imgURL={logo}/>
            </Link>
        </div>
    );
};

export default SideBar;