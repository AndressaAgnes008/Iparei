import React from 'react';

import './global.css';
import './App.css';

import logo from './logo-iparei.png';

function App() {
  return (
    

<>

<div className="contentCadastro">
<h2>Iparei</h2>
<img src={logo} alt="Iparei" width="200" height="180" />
  <form   >
    <label htmlFor="nome">Nome*</label>
    <input type="text" id="nome" placeholder="Nome do Estabelecimento"  />
   
    <label htmlFor="Endereco">Endereco*</label>
    <input type="text" id="endereco" placeholder="Endereco"   />
    
    <label htmlFor="cnpj">CNPJ*</label>
    <input type="text" id="cnpj" placeholder="CNPJ"    />
    
    <label htmlFor="email">E-mail *</label>
    <input type="email" id="email" placeholder="Seu e-mail de login"   />
    
    <label htmlFor="observacao">Observação*</label>
    <input type="text" id="observacao" placeholder="Observação"   />
    
    <label htmlFor="telefone">Tel*</label>
    <input type="text" id="telefone" placeholder="Telefone para contato"    />
   
    {/* <IntlTelInput className="tel"
    preferredCountries={['BR']}
    containerClassName="intl-tel-input"
    inputClassName="form-control"
    
    /> */}

    <button className="btn" type="submit">Entrar</button>
    <button className="btn" type="submit"><a href="/">Cancelar</a></button>
    
  </form>
  
</div>
{/* 
      <aside>

      </aside>
      <main>

      </main>
      */}

</>

      
    
  );
}

export default App;
