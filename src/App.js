import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Site from './Site';
import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Servicos from './componentes/Servicos'
import Preco from './componentes/Preco'
import Portifolio from './componentes/Portifolio'
import Contato from './componentes/Contato'

//Area Administrativa
import Admin from './admin/Admin'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />

          <Route path="/" exact component={Inicio}/>
          <Route path="/Contato" component={Contato} />
          <Route path="/Servicos" component={Servicos} />
          <Route path="/Portifolio" component={Portifolio} />
          <Route path="/Preco" component={Preco} />
         
          <Route path="/admin" component={Admin} />
          <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
