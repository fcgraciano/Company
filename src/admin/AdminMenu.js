import React from 'react'
import {Link} from 'react-router-dom'

const AdminMenu = props => {
    return (
        <div class='list-group'>
            <Link to='./admin/' className='list-group-item active'>Pagina Admin inicial</Link>
            <Link to='./Admin/Portifolio' className='list-group-item'>Cadastrar Portifolio</Link>
          
        </div>
    )
}

export default AdminMenu