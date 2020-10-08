import React, { Component } from 'react'

import firebaseconfig from '../firebaseConfig'
import ItemPortifolio from './ItemPortifolio';

class Portifolio extends Component {
    constructor(props){
        super(props)
        this.state = {
            Portifolio:{
              titulo:'',
              descricao:'' 
            }
        }

        firebaseconfig.syncState(
            'Portifolio',
            {
                context: this,
                state: 'Portifolio',
                asArray: false
            }
            
            )
    }

    render() {
        return (
            <div id='portfolio' className='container-fluid text-center bg-grey'>
                <h2>Portfolio</h2><br />
             <div>Se colocar um novo elemento aqui pode colaborar com o projeto</div>
                <div className='row text-center '>
                   {
                       
                      Object.keys(this.state.Portifolio).map(
                          key => {
                            //return <p> {JSON.stringify(key)}</p>
                            return <ItemPortifolio titulo={this.state.Portifolio[key].titulo} descricao={this.state.Portifolio[key].descricao}></ItemPortifolio>
                          }
                      )
                      
                   }
                  
                </div><br />

            
               
            </div>

        )
    }
}
export default Portifolio
