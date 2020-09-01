import React from 'react';
import Card from './components/card/Card';
import Lista from './components/lista/lista';
import Item from './components/itens/itens';
import Input from './components/input/input';
import './App.css';

function App() {
  const aluno = 'dante';
  return ( 
    <div className="div">
      <h1>Lista</h1>  
      <Lista nome="cardápio"></Lista>
      <Item nome="massa" valor="25.00"></Item>
      <Item nome="massa com molho" valor="55.00"></Item>
      <Item nome="strogonoff" valor="60.00"></Item>
      <Item nome="pizza" valor="50.00"></Item>

      <Input></Input>
    </div>
  );
}

export default App;