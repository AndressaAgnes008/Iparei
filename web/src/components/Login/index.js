import React, { useState } from 'react';
import api from '../../services/api';

//import camera from './assets/camera.svg' ;

import './Estilo.css';

//import EstaItem from './EstaItem/index'//'./components/CadastroEstabelecimento/EstaItem/index';
import LoginForm from './LoginEsta/index';



export default function App({history}) {
  const [esta, setEsta] = useState([]);

  

//   const preview = useMemo( () => {
//     return foto ? URL.createObjectURL(foto) : null
// }, [foto]);

  async function handleAddEstabelecimento(data){
   // e.preventDefault();
   console.log(data);
    const response = await api.get('/LoginEstabelecimento', data).catch(err => {
      console.log(err);
      throw new Error(err);
    });
    console.log(response.data);
    //history.push('/estabelecimentos');
  }


  return (
    <div >
      
     
        <LoginForm onSubmit={handleAddEstabelecimento} />
     

      
    </div>
  );
}



