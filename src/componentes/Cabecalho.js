import React from 'react'
import {Link} from 'react-router-dom'

const Cabecalho = props => {
    return (
        <div>
            <nav class='navbar navbar-default navbar-fixed-top'>
                <div class='container'>
                    <div class='navbar-header'>
                        <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                            <span class='icon-bar'></span>
                            <span class='icon-bar'></span>
                            <span class='icon-bar'></span>
                        </button>
                        <Link to='/' class='navbar-brand'>Logo</Link>
                    </div>
                    <div class='collapse navbar-collapse' id='myNavbar'>
                        <ul class='nav navbar-nav navbar-right'>
                            <li><Link to='/'>HOME</Link></li>
                            <li><Link to='/Servicos'>SERVICOS</Link></li>
                            <li><Link to='/Portifolio'>PORTFOLIO</Link></li>
                            <li><Link to='/Portifolio'>PORTFOLIO</Link></li>
                            <li><Link to='/Preco'>PREÇOS</Link></li>
                            <li><Link to='/Contato'>CONTATO</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='jumbotron text-center'>
                <h1>Company</h1>
                <p>We specialize in blablabla</p>
                <form>
                    <div className='input-group'>
                        <input type='email' className='form-control' size='50' placeholder='Email Address' required />
                        <div className='input-group-btn'>
                            <button type='button' className='btn btn-danger'>Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cabecalho