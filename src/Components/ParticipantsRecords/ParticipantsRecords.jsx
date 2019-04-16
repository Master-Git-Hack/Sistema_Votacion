import React,{Component} from 'react';

class ParticipantsRecords extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(<>
            <div className="row">
                <div className="col-4">
                    {this.props.Participante}
                </div> 
                <div className="col-4">
                    {this.props.Evento}
                </div> 
                <div className="col-4">
                    <div className="btn-group mr-2">
                        <button type="submit" className="btn btn-warning">Editar</button>
                    </div>
                    <div className="btn-group mr-2">
                        <button type="submit" className="btn btn-danger">Eliminar</button>
                    </div>
                    
                </div> 
            </div>
            <br/>
            </>
        )
    }
}
export default ParticipantsRecords;