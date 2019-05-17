import React,{Component} from 'react';
import fire from '../../../Config/Config';
import {Container,Jumbotron,Table,Row,Col} from 'react-bootstrap';
class User extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            user:fire.auth().currentUser.email.substr(0,8),
            userName:'',
            userLast:'',
            userPass:''
        }
        this.userView=this.userView.bind(this);
        this.getInfo=this.getInfo.bind(this)
    }
    componentDidMount()
    {
        this.getInfo()
    }
    userView()
    {
        if(this.state.user !== 'superusr')
            return true
        else
            return false
    }
    getInfo()
    {
   //     var {userName,userLast,userPass}=this.state;
        if(this.userView)
            fire.database().ref('Estudiante/'+this.state.user).once('value',snapshot=>
            {
               this.setState({
                   userName:snapshot.val().Nombre,
                   userLast:snapshot.val().Apellidos,
               })
            })
            
    }

    render()
    {
        return(
           <Container className="text-center">
               <Jumbotron className="center">
                   <h2>Información Personal: {this.state.user} </h2>
                    <br/>
                    <Table>
                        {this.userView() ?<>
                        <Row>
                            <Col>Nombre(s):</Col>
                            <Col>
                                <input 
                                    type="text" 
                                    name="Nombre" 
                                    placeholder="Nombre(s)"
                                    value={this.state.userName}
                                    className="form-control"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>Apellido(s):</Col>
                            <Col>
                                <input 
                                    type="text" 
                                    name="Apellidos" 
                                    value={this.state.userLast}
                                    placeholder="Apellido(s)"
                                    className="form-control"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>Carrera:</Col>
                            <Col>
                                <select className="custom-select" name="Carrera"> 
                                    <option value="Ing. Sistemas Computacionales">Ing. Sistemas Computacionales</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </Col>
                        </Row>
                        </>:null}
                        <Row>
                            <Col>Contraseña:</Col>
                            <Col>
                                <input 
                                    type="password" 
                                    name="Pass" 
                                    placeholder="*******"
                                    className="form-control"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>Confirmar Contraseña:</Col>
                            <Col>
                                <input 
                                    type="password" 
                                    name="Pass_Confirm" 
                                    placeholder="*******"
                                    className="form-control"
                                />
                            </Col>
                        </Row>
                    </Table>
               </Jumbotron>
                <div className="text-right">
                    <button 
                        type="submit" 
                        className="btn btn-success"
                        onClick=""
                   >Guardar Cambios
                    </button>
                </div>
                
           </Container>
        );
    }
}
export default User;