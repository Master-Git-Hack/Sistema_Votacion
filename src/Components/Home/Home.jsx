import React,{Component} from 'react';
import NavBar from './../NavBar/NavBar';
import {Collapse} from 'react-bootstrap'
class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            user:this.props.Numero_Control.substr(0,8),
            passVisibility:false,
            EventoVotacion:'',
            EventoPass:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.viewPassElement=this.viewPassElement.bind(this);
    }
    handleChange(e)
    {
        this.setState({[e.target.name]:e.target.value});
    }
    viewPassElement()
    {
        if(this.state.passVisibility === true)
            this.setState({passVisibility:false});
        else
            this.setState({passVisibility:true});
    }

    render()
    {
        return(
            <>
                <div className="container text-center">
                    <div className="center jumbotron">
                        <h2 className="text-primary">Bienvenido:{this.state.user}</h2>
                        <br/>
                        <div className="form">
                            <input 
                                type="text" 
                                onChange={this.handleChange}
                                name="EventoVotacion" 
                                className="form-control"
                                placeholder="Nombre de Identifiacion de la Votación"
                            />
                            <br/>
                            <Collapse in={this.state.passVisibility}>
                                <input 
                                    type="text" 
                                    onChange={this.handleChange}
                                    name="EventoPass" 
                                    className="form-control"
                                    placeholder="Contraseña de acceso en caso de ser necesario para la Votación"
                                />
                            </Collapse>
                            <br/>
                            <div className="btn-group" role="group" aria-label="Button group">
                                <button 
                                    type="submit" 
                                    className="btn btn-success"
                                    name="btn_votar" 
                                    id="btn_votar"
                                >Realizar Votación </button>
                                <div className="custom-control custom-checkbox btn btn-primary">
                                    <input type="checkbox" className="custom-control-input" onClick={this.viewPassElement} id="defaultUnchecked"/>
                                    <label className="custom-control-label" htmlFor="defaultUnchecked">Contraseña</label>
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-info"
                                    name="btn_resultados" 
                                    id="btn_resultados"
                                >Ver Resultados</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Home;