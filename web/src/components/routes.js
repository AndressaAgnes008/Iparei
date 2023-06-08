import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from  './Login/index';
import CadastroEstabelecimento from  './CadastroEstabelecimento/index';
import Cadastro from  './Cadastro/index';
import HomePage from  './HomePage/index';
import Sobre from './Sobre/index';
import Dashboard from './Dashboard/index'
//import Dashboard from  './pages/Dashboard';
//import CardapioCadastro from  './pages/CardapioCadastro';
//import NewCardapio from  './pages/NewCardapio';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/Login" component={Login}/>
                <Route path="/CadastroEstabelecimento" component={CadastroEstabelecimento}/>
                <Route path="/Cadastro" component={Cadastro}/>
                <Route path="/Sobre" component={Sobre}/>
                <Route path="/Dashboard" component={Dashboard}/>
                {/* <Route path="/cardapio" component={Dashboard}/>
                <Route path="/cadastroCardapio" component={CardapioCadastro}/>
                <Route path="/newCardapio" component={NewCardapio}/> */}
            </Switch>
        </BrowserRouter>
    );
}