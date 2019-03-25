import React,{Component} from 'react';
import LogoItesg from './../../Resources/escudo.png'
import fire from './../../Config/Config';

class AddStudent extends Component
{
    constructor()
    {
        super();
        this.state={
            Numero_Control:'',
            Nombre:'',
            Apellidos:'',
            Carrera:'Ing. Sistemas Computacionales',
            Contraseña:'',
            errores:[],
            status_errorSumary:'card d-none'
        }
        this.handleChange=this.handleChange.bind(this);
        this.checkNumero_Control=this.checkNumero_Control.bind(this);
        this.checkPasswords=this.checkPasswords.bind(this);
        this.checkErrors=this.checkErrors.bind(this);
    }
    checkNumero_Control()
    {   if(String(this.state.Numero_Control)!=='')
        {
            if(Number(this.state.Numero_Control))
            {
                var fecha = Number(new Date().getFullYear())-2000;
                if(this.state.Numero_Control>Number((fecha-5)+"111000") && this.state.Numero_Control<Number((fecha)+"111000"))
                    if(String(this.state.Numero_Control).substr(2,3) ==='111')
                        return true;
            }
        }
        else
            return false;

    }

    checkPasswords()
    {
        if(this.state.Contraseña!=='')
            {
                if(this.state.Contraseña === this.state.Confirmar_Contraseña)
                return true;
            }
        else    
            return false;
    }

    checkErrors()
    {
        if(window.confirm('¿Sus datos estan correctos?'))
        {
            var listErrors =[];
            if(this.checkNumero_Control() === false)
                listErrors.push('El numero de control no pertenece al sistema')

            if(String(this.state.Nombre) === '')
                listErrors.push('El nombre no puede estar vacio');

            if(String(this.state.Apellidos) === '')
                listErrors.push('Los apellidos no pueden estar vacios');

            if(this.checkPasswords() === false)
                listErrors.push('Las constraseñas deben coincidir');

            if(listErrors.length>0)
                {
                    this.setState({errores:listErrors});
                    this.setState({status_errorSumary:'card'});
                }
            else
               this.newStudent();              
        }
        
    }
    handleChange(e)
    {
        this.setState({[e.target.name]: e.target.value});
    }
    newStudent(e)
    {
        if(Array(this.state.errores).length>0)
        {  
            var usuario = null;
            fire.database().ref('Estudiante/'+this.state.Numero_Control).once('value').then(function(snapshot){
                usuario = (snapshot.val() && snapshot.val().Numero_Control);
                if(usuario != null)
                    window.alert("El usuario ya existe");
            })
            if(usuario === null)
            {
                fire.auth().createUserWithEmailAndPassword(this.state.Numero_Control+'@tecguanajuato.edu.mx',this.state.Contraseña).then((u)=>{
                    fire.database().ref('Estudiante/' + this.state.Numero_Control).set({
                        Numero_Control:this.state.Numero_Control,
                        Nombre:this.state.Nombre,
                        Apellidos:this.state.Apellidos,
                        Carrera:this.state.Carrera
                    }).then((success)=>{
                        window.alert('Registro Exitoso')
                    }).catch((fail)=>{
                    console.log(fail);
                    });;
                }).catch((error)=>{
                    console.log(error);
                });
            }
        }
    }
    render()
    {
        return(
            <div className="container loginSize">
                <div className="center jumbotron">
                    <div className="text-center">
                        <h2>Registro Alumno</h2>
                        <br/>
                        <img src={LogoItesg} width='200px'/>
                        <br/>
                        <table className="table">
                            <tbody>
                            <tr>
                                    <td className="text-right">
                                        <label className="text-primary">Numero de Control:</label>
                                    </td>    
                                    <td>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Numero de Control" 
                                            name="Numero_Control" 
                                            onChange={this.handleChange}
                                            maxLength="8"
                                            minLength="8"
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-right">
                                        <label className="text-primary">Nombre(s):</label>
                                    </td>
                                    <td>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Nombre(s)" 
                                            onChange={this.handleChange}
                                            name="Nombre" 
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-right">
                                        <label className="text-primary">Apellido(s):</label>
                                    </td>
                                    <td>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Apellido(s)" 
                                            onChange={this.handleChange}
                                            name="Apellidos" 
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-right">
                                        <label className="text-primary" >Carrera:</label>
                                    </td>
                                    <td>
                                        <select className="form-control" onChange={this.handleChange} name="Carrera">
                                            <option defaultValue>Ing. Sistemas Computacionales</option>
                                            <option>Ing. Industrias Alimentarias</option>
                                            <option>Ing. Mecatronica</option>
                                            <option>Ing. Industrial</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-right">
                                        <label className="text-primary">Contraseña:</label>
                                    </td>
                                    <td>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Contraseña" 
                                            name="Contraseña" 
                                            minLength="8"
                                            maxLength="16"
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-right">
                                        <label className="text-primary">Confirmar Contraseña:</label>
                                    </td>
                                    <td>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Confirmar Contraseña" 
                                            onChange={this.handleChange}
                                            name="Confirmar_Contraseña" 
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-left">
                                        <button type="submit"  id="btn_cancelar" className="btn btn-danger">Cancelar</button>
                                    </td>
                                    <td className="text-right">
                                        <button 
                                            type="submit" 
                                            id="btn_registrar" 
                                            className="btn btn-success"
                                            onClick={this.checkErrors}
                                            >Registrar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                            <div className={this.state.status_errorSumary}>
                                    <div className="card-header">
                                        <h4 className="text-primary">Errores</h4>
                                    </div>
                                    <div className="card-body bg-danger">
                                            <ol>  
                                            {
                                                this.state.errores.map((error,i)=>
                                                {
                                                    return(<li key={i}>{this.state.errores[i]}</li>) 
                                                })
                                            }     
                                            </ol>
                                        </div> 
                                </div>
                       </div>
                </div>
            </div>
        );
    }
}
export default AddStudent;