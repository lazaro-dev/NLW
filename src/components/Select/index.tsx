import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

/* 'title' é propriedade que é definida poderia ser titulo */
/* '...rest'  serve para pegar todas as propriedades e colocar na variavel 'rest'*/
const  Select: React.FC<SelectProps> = ({ label, name, options, ...rest}) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select defaultValue="" id={name} {...rest} >
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(option => {
                    return <option key={option.value} value={option.value} >{option.label}</option>
                })}
            </select>
        </div>
    );
}

export default Select;