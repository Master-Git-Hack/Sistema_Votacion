import React,{Component} from 'react';
import fire from '../../../Config/Config';

class User extends Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div className="text-center">
                <div className="btn-group-vertical">
                <button type="submit" name="Participant" className="btn btn-light text-info">Mi Información</button>
                <button type="submit" name="Participant" className="btn btn-light text-danger">Cerrar Sesión</button>
                </div>
            </div>
        );
    }
}
export default User;