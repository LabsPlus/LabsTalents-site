import React from 'react';
import './style.css'
interface InputProps {
    type: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
    return (
        <input className='input' type={type} placeholder={placeholder} />
    );
};

export default Input;
