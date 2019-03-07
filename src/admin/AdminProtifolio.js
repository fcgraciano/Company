import React, { Component } from 'react'

import config, { storeage } from './../firebaseConfig'

class AdminPortifolio extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h2> Portifolio - Area administrativa</h2>
                    <div className="panel panel-success">
                        <div className="panel panel-heading">Titulo</div>
                        <div className="panel panel-body">
                            <form>
                                <div className="form-group">
                                    <label for="formGroupExampleInput">Nome da Cidade</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Nome da Cidade" />
                                </div>
                                <div className="form-group">
                                    <label for="formGroupExampleInput2">Descrição</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Descrição" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlFile1">Imagem</label>
                                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                </div>
                                <button type="submit" class="btn btn-primary">Salvar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminPortifolio