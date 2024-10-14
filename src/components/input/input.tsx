import React, { InputHTMLAttributes } from 'react';
import './style.css';

// Não é mais necessário criar uma interface vazia
const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...rest }) => {
    return (
        <input className='input' {...rest} />
    );
};

export default Input;
