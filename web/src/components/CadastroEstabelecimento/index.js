import React, { useEffect, useState } from 'react';
import api from '../../services/api';

//import camera from './assets/camera.svg' ;

import '../../global.css';
import '../../App.css';
import '../../Sidebar.css';
import '../../Main.css';

import EstaItem from './EstaItem/index'//'./components/CadastroEstabelecimento/EstaItem/index';
import EstaForm from './EstaForm/index';



function App() {
  const [esta, setEsta] = useState([]);

  

//   const preview = useMemo( () => {
//     return foto ? URL.createObjectURL(foto) : null
// }, [foto]);

 

  useEffect(() => {
    async function loadEstabelecimentos(){
      const response = await api.get('/estabelecimentos');


      setEsta(response.data);
    }

    loadEstabelecimentos();
  }, []);

  async function handleAddEstabelecimento(data){
   // e.preventDefault();

    const response = await api.post('/estabelecimentos', data).catch(err => {
      console.log(err);
      throw new Error(err);
    });

    

    setEsta([...esta, response.data]);
  }


  return (
    <div id="app">
      
      <aside className="aside">
        <strong>Cadastrar</strong>
        <EstaForm onSubmit={handleAddEstabelecimento} />
      </aside>

      <main className="main">
          <ul>
            {esta.map( estabelecimento => (
              <EstaItem key={estabelecimento._id} estabelecimento={estabelecimento}/>
            ))}
            

            
          </ul>
      </main>
    </div>
  );
}

export default App;
