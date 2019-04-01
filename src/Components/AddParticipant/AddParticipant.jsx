import React, {Component} from 'react';
import fire from './../../Config/Config';

class AddParticipant extends Component
{
    constructor()
    {
        super();
        this.state=
        {
            IdParticipante:'',
            Numero_Control:'15111007',
            Nombre:'Einar Jhordany'
        }
    }
    addNewParticipant()
    {
        fire.database().ref('Participante/'+this.IdParticipante).set(
            {
                IdParticipante:this.state.IdParticipante,

            }
        ).then((success)=>{
            window.alert("Nuevo participante agregado")
        }).catch((fail)=>{
            console.log(fail);
        })
    }
    render()
    {
        return(
            <div className="container text-center">
                <div className="center jumbotron">
                    <h2 className="text-primary">Registro de Participante(s)</h2>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="text-right">
                                    Participante
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        placeholder="Nombre del Paricpante o Elemento"
                                        name="" 
                                    />
                                </td>                        
                            </tr>
                            <tr>
                                <td className="text-right">
                                    Carrera
                                </td>
                                <td>
                                    <select className="form-control" name="" id="">
                                            <option value="">General</option>
                                            <option value="">Ing. Sistemas Computacionales</option>
                                            <option value="">Ing. Industrias Alimentarias</option>
                                            <option value="">Ing. Mecatronica</option>
                                            <option value="">Ing. Industrial</option>
                                    </select>               
                                </td>                        
                                </tr>
                            <tr>
                                <td className="text-right">
                                    Referencia de Votación
                                </td>
                                <td>
                                    <select className="form-control" name="" id="">
                                            <option value="">Id Votación</option>
                                    </select>               
                                </td>                        
                            </tr>
                            <tr>
                                <td className="text-right">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="ckb_alumno"/>
                                        <label className="custom-control-label" htmlFor="ckb_alumno">Alumno</label>
                                    </div>
                                </td>
                                <td>
                                    <select className="form-control">
                                        {<option key={this.state.Numero_Control}>{this.state.Numero_Control} - {this.state.Nombre}</option>}
                                    </select>                   
                                </td>                        
                            </tr>
                            <tr>
                                <td className="text-right">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="ckb_imagen"/>
                                        <label className="custom-control-label" htmlFor="ckb_imagen">Imagen</label>
                                    </div>
                                </td>
                                <td className="form-inline">
                                    <span>Archivo.jpg</span>
                                    <button type="submit" className="btn btn-light">Examinar</button>                    
                                </td>                        
                            </tr>
                            <tr>
                                <td className="text-left">
                                    <button type="submit" className="btn btn-danger">Cancelar</button>
                                </td>
                                <td className="text-right">
                                    <button type="submit" className="btn btn-success">Guardar</button>                        
                                </td>                        
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}
export default AddParticipant;