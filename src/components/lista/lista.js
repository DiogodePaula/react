import React from 'react';
import './lista.css'

export default function list(props){
    return (
        <div className="list">
            <h1>{props.nome}</h1>
        </div>
    )
}