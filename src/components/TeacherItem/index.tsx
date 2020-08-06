import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="data:image/jpeg;base64,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" alt=""/>
                <div>
                    <strong>Lázaro Marques</strong>
                    <span>Programação 5</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br/><br/>
                Error soluta laudantium quae nulla non impedit nemo ullam ducimus fuga temporibus consectetur quas dolor, eos placeat in dolorum iure, sed nobis.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;