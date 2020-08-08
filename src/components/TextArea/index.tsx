import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

/* 'title' é propriedade que é definida poderia ser titulo */
/* '...rest'  serve para pegar todas as propriedades e colocar na variavel 'rest'*/
const  Textarea: React.FC<TextareaProps> = ({ label, name, ...rest}) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    );
}

export default Textarea;