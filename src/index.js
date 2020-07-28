import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import CadastroVideo from './pages/cadastro/video'
import CadastroCategoria from './pages/cadastro/categoria';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

function Erro(){
    return (
        <div>
            <h1>Erro 404</h1>
            <p>Página não encontrada</p>
            <p>Clique <a href="/">aqui</a> para voltar à página inicial.</p>
        </div>
    )
}

ReactDOM.render( 
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cadastro/video" component={CadastroVideo} />
            <Route path="/cadastro/categoria" component={CadastroCategoria} />
            <Route component={Erro} />
        </Switch>
        
    </BrowserRouter>,
    document.getElementById('root')
);
