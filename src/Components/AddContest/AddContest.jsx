import React,{Component} from 'react';
import fire from './../../Config/Config';
class AddContest extends Component
{
    constructor()
    {
        super();
        this.state={
            Nombre_Votacion:'',
            Carrera:'General',
            Fecha_Inicio:'',
            Hora_Inicio:'',
            Fecha_Termino:'',
            Hora_Termino:'',
            Contraseña:'',
            statusPassword:false,
            countEvents:0
        }
        this.handleChange=this.handleChange.bind(this);
        this.enablePassword=this.enablePassword.bind(this);
        this.addContest=this.addContest.bind(this);
    }
    enablePassword(e)
    {
        if(this.state.statusPassword === true)
            this.setState({statusPassword:false});
        else
            this.setState({statusPassword:true});
    }
    handleChange(e)
    { 
        this.setState({[e.target.name]:e.target.value});
    }
    addContest()
    {
        if(window.confirm('¿Los datos son correctos?'))
        {
            var contest = null;
            fire.database().ref('Evento').child().on('value',function(sanpshot)
            {
                this.setState({countEvents:sanpshot.numChildren()});
            })
            fire.database().ref('Evento/'+this.state.Nombre_Votacion).on('value',function(snapshot){
                /**
                 si el contest tiene un valor y un valor con el nombre de la votacion, va a cambiar la variable
                contest y cambiar el valor inicial de null, asi validaremos su existencia
                */
                contest = snapshot.exists();
                //en caso de que el contest existe mandara un alert para indicar que el contest existe
                if(contest !== null)
                    window.alert("El evento ya existe");
            })

            if(contest === null)
            {
                fire.database().ref('Evento/' + this.state.Nombre_Votacion).set({
                    //mandamos llamar todos los elementos del estado y los asignamos a variable para la tabla
                    Nombre_Votacion:this.state.Nombre_Votacion,
                    Carrera:this.state.Carrera,
                    Fecha_Inicio:this.state.Fecha_Inicio,
                    Hora_Inicio:this.state.Hora_Inicio,
                    Fecha_Termino:this.state.Fecha_Termino,
                    Hora_Termino:this.state.Hora_Termino,
                    Contraseña:this.state.Contraseña,
                }).then((success)=>{
                    //en caso de ser exitoso el registro va a mandar un aviso al usuario de que es correcto
                    window.alert('Registro Exitoso');
                }).catch((fail)=>{
                    console.log(fail);
                });
            }
        }
    }
    render()
    {
        return(
            <div className="container text-center">
                <div className="jumbotron">
                    <h2 className="text-primary">Registro de Evento de Votación</h2>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="text-right">
                                    Nombre de Votación
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        onChange={this.handleChange}
                                        name="Nombre_Votacion" 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-right">Duracion</td>
                                <td>
                                    <div className="form-inline" >
                                        <div>
                                            <input 
                                                type="date" 
                                                className="form-control" 
                                                onChange={this.handleChange}
                                                name="Fecha_Inicio"
                                            />
                                            <input 
                                                type="time" 
                                                className="form-control" 
                                                onChange={this.handleChange}
                                                name="Hora_Inicio"
                                            />
                                            <p className="form-text">Inicio del periodo de la votación</p>
                                        </div>
                                        
                                        <div>
                                            <input 
                                                type="date" 
                                                className="form-control" 
                                                onChange={this.handleChange}
                                                name="Fecha_Termino" 
                                            />
                                            <input 
                                                type="time" 
                                                className="form-control" 
                                                onChange={this.handleChange}
                                                name="Hora_Termino" 
                                            />
                                            <p className="form-text">Fin del periodo de la votación</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-right">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" value={this.state.statusPassword} onClick={this.enablePassword} name="enableContraseña" id="enableContraseña" />
                                        <label className="custom-control-label" htmlFor="enableContraseña">Contraseña</label>
                                    </div>
                                </td>
                                <td>
                                    {this.state.statusPassword ?
                                    <input 
                                        type="text" 
                                        name="Contraseña" 
                                        placeholder="Contraseña"
                                        onChange={this.handleChange}
                                        className="form-control"
                                    />:null
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td className="text-right">Carrera</td>
                                <td>
                                    <select className="form-control" name="Carrera" onChange={this.handleChange}>
                                        <option>General</option>
                                        <option>Ing. Sistemas Computacionales</option>
                                        <option>Ing. Industrias Alimentarias</option>
                                        <option>Ing. Mecatronica</option>
                                        <option>Ing. Industrial</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-left">
                                    <button type="submit" className="btn btn-danger">Cancelar</button>
                                </td>
                                <td className="text-right">
                                    <button type="submit" onClick={this.addContest} className="btn btn-success">Guardar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default AddContest;