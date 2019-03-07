import React from 'react'

const ItemPortifolio = props =>{
    return (
        <div> 
            <div className='col-sm-4'>
        <div className='thumbnail'>
            <img src={props.imagem} alt='imagem' width='400' height='300' />
            vamos
            <p><strong>{props.titulo}</strong></p>
            <p>{props.descricao}</p>
        </div>
    </div>
</div>
    )
}

export default ItemPortifolio