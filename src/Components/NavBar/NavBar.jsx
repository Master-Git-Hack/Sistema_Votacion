import React,{Component} from 'react';
import PopUp from 'reactjs-popup';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import Home from './../Home/Home';
import User from './User/User'; 
import fire from './../../Config/Config';

class NavBar extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <Navbar variant="dark"bg="dark" fixed="top" expand="lg">
                    <Navbar.Brand>Sistema de Votación</Navbar.Brand>
                    <Navbar.Toggle className="btn" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {this.props.children}
                        </Nav>
                        <Nav>
                            <NavDropdown title={this.props.Nombre}  id="basic-nav-dropdown"> 
                                <Container className="text-center">
                                    <PopUp
                                        trigger={<button type="submit" className="btn btn-info">Información</button>}
                                        modal
                                        children={Close => 
                                        <User>
                                            <button type="submit" onClick={Close} className="btn btn-danger">Cancelar</button>
                                        </User>}
                                    />
                                    <NavDropdown.Divider />
                                    <button 
                                        type="submit" 
                                        className="btn btn-danger"
                                        onClick={()=>fire.auth().signOut()}    
                                    >Cerrar Sesión</button>
                                </Container>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar><br/>
            </div>
        );
    }
}
export default NavBar;