import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

/* 'title' é propriedade que é definida poderia ser titulo */
/* '...rest'  serve para pegar todas as propriedades e colocar na variavel 'rest'*/
const  Input: React.FC<InputProps> = ({ label, name, ...rest}) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
}

export default Input;