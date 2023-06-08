import React, { useState, useEffect } from 'react';

import '../Estilo.css';
import logo from '../../../images/logo2.png';

function EstaForm({ onSubmit }){
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [foto, setFoto] = useState('');
    const [obs, setObservacao] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [password, setPassword] = useState('');
  

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        //console.log(position.coords);
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
        nome,
        endereco,
        email,
        cnpj,
        foto,
        obs,
        telefone,
        password,
        latitude,
        longitude,
      });

    setCnpj('');
    setEmail('');
    setEndereco('');
    setFoto('');
    setNome('');
    setObservacao('');
    setTelefone('');
    setPassword('');
  }
    
  return (
    <>

        <div className="contentCadastro">
        {/* <h2>Iparei</h2> */}
      <img className="imagelogo" src={logo} alt="Iparei"/>
      <form onSubmit={handleSubmit}>

            <div className="input-block">
                <label htmlFor="nome">Nome*</label>
                <input type="text" id="nome" placeholder="Nome do Estabelecimento"  
                value={nome} onChange={e => setNome(e.target.value)}  />
            </div>

            <div className="input-block">
                <label htmlFor="endereco">Endereco*</label>
                <input type="text" id="endereco" placeholder="endereco" 
                value={endereco} onChange={e => setEndereco(e.target.value)}  />
            </div>

            <div className="input-block">
                <label htmlFor="cnpj">CNPJ*</label>
                <input type="text" id="cnpj" placeholder="CNPJ"  
                value={cnpj} onChange={e => setCnpj(e.target.value)}  />
            </div>

            <div className="input-block">
                <label htmlFor="email">E-mail *</label>
                <input type="email" id="email" placeholder="Seu e-mail de login" 
                value={email} onChange={e => setEmail(e.target.value)}  />
            </div>

            <div className="input-block">
                <label htmlFor="password">Senha *</label>
                <input type="password" id="password" placeholder="Senha*" 
                value={password} onChange={e => setPassword(e.target.value)}  />
            </div>

            <div className="input-block">
                <label htmlFor="telefone">Telefone *</label>
                <input type="telefone" id="email" placeholder="Seu telefone" 
                value={telefone} onChange={e => setTelefone(e.target.value)}  />
            </div>

            <div className="input-block">
                <label htmlFor="obs">Observação*</label>
                <input type="text" id="obs" placeholder="Observação"
                value={obs} onChange={e => setObservacao(e.target.value)}   />
            </div>

            <div className="input-block">  
            {/* <label htmlFor="foto">Foto*</label>
            <br/>
            <label id="foto" className={foto ? 'has-imagem': ''} style={{ backgroundImage: `url(${preview})` }} >
                    <input type="file"  onChange={event => setFoto(event.target.files[0])}  />
                    <img src={camera} alt="Selecione a Imagem"/>
                </label> */}
                <label htmlFor="foto">Foto*</label>
                <input type="text" id="foto" placeholder="Foto" 
                value={foto} onChange={e => setFoto(e.target.value)}  />
            </div>

            <div className="input-group">
            <div className="input-block">
                <label htmlFor="latitude">Latitude*</label>
                <input type="number" id="latitude" placeholder="latitude" value={latitude} 
                onChange={e => setLatitude(e.target.value)} />
            </div>

            <div className="input-block">
                <label htmlFor="longitude">Longitude*</label>
                <input type="number" id="longitude" placeholder="longitude"  value={longitude}
                onChange={e => setLongitude(e.target.value)} />
                
            </div>
            </div>
            {/* <label htmlFor="foto">Tel*</label>
            <input type="text" id="telefone" placeholder="Telefone para contato"    /> */}

            <button className="btn" type="submit">Salvar</button>
            
            <button className="btn" type="submit"><a className="btnA" href="/">Cancelar</a></button>
        </form>
            
          
        </div>
    
    
    </>);
}

export default EstaForm;