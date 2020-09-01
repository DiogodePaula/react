import React, {useState} from 'react';

export default () => {
    const [numero, setValor] = useState(0);
    const [nome, setName] = useState('')

function mudouValor(){
    alert('chamou');
    setValor(numero+1)
}

function mudouNome(e){
    console.log(e.target.value);
    setName(e.targe.value);
}

    return(
        <>
        <div>
            <h1>INSIRA O NOME</h1>
            <input value={numero}></input>
            <button  onClick={mudouValor}>Esmaga o botão</button>
        </div>
        <div>
            <input value={nome} onChange={mudouNome}></input>  
        </div>
        </>
)
}

