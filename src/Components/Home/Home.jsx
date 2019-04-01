import React,{Component} from 'react';
class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            user:this.props.Numero_Control.substr(0,8),
            EventoVotacion:'',
            EventoPass:''
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e)
    {
        this.setState({[e.target.name]:e.target.value});
    }

    render()
    {
        return(
            <div className="container text-center">
                <div className="center jumbotron">
                    <h2 className="text-primary">Bienvenido:{this.state.user}</h2>
                    <br/>
                    <div class="form">
                        <input 
                            type="text" 
                            onChange={this.handleChange}
                            name="EventoVotacion" 
                            className="form-control"
                            placeholder="Nombre de Identifiacion de la Votación"
                        />
                        <br/>
                        <input 
                            type="text" 
                            onChange={this.handleChange}
                            name="EventoPass" 
                            className="form-control"
                            placeholder="Contraseña de acceso en caso de ser necesario para la Votación"
                        />
                        <br/>
                        <div class="btn-group" role="group" aria-label="Button group">
                            <button 
                                type="submit" 
                                class="btn btn-success"
                                name="btn_votar" 
                                id="btn_votar"
                            >Realizar Votación </button>
                            <div class="custom-control custom-checkbox btn btn-primary">
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
                                <label class="custom-control-label" htmlFor="defaultUnchecked">Contraseña</label>
                            </div>
                            <button 
                                type="submit" 
                                class="btn btn-info"
                                name="btn_resultados" 
                                id="btn_resultados"
                            >Ver Resultados</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;