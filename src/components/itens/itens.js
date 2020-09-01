import React from 'react';
import './itens.css'

export default function list(props){
    return (
        <div className="list">
            <h2>{props.nome}</h2>
            <h2>{props.valor}</h2>
        </div>
    )
}