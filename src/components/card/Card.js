import React from 'react';
import './card.css';

export default function card(props) {
    return ( 
        <div className="card">
            <h1>{props.titulo}</h1>
            <h2>{props.conteudo}</h2> 
        </div>
    );
}