import React, { useState } from 'react';
import api from '../../services/api';

//import camera from './assets/camera.svg' ;

import './Estilo.css';

//import EstaItem from './EstaItem/index'//'./components/CadastroEstabelecimento/EstaItem/index';
import EstaForm from './EstaForm/index';



function App() {
  const [esta, setEsta] = useState([]);

  

//   const preview = useMemo( () => {
//     return foto ? URL.createObjectURL(foto) : null
// }, [foto]);

  async function handleAddEstabelecimento(data){
   // e.preventDefault();

    const response = await api.post('/cadastrarEstabelecimento', data).catch(err => {
      console.log(err);
      throw new Error(err);
    });

    
  }


  return (
    <div className="divCadastro">
      
      <aside className="asideCadastro">
        <strong>Cadastrar</strong>
        <EstaForm onSubmit={handleAddEstabelecimento} />
      </aside >

      
    </div>
  );
}

export default App;

