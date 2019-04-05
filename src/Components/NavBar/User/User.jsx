import React,{Component} from 'react';
import fire from '../../../Config/Config';
import {Container,Jumbotron,Table,Row,Col} from 'react-bootstrap';
class User extends Component
{
    constructor(props)
    {
        super();
        
    }
    render()
    {
        return(
           <Container className="text-center">
               <Jumbotron className="center">
                   <h2>Información Personal</h2> c
                    <br/>
                    <Table>
                        <Row>
                            <Col>Nombre(s):</Col>
                            <Col>
                                <input 
                                    type="text" 
                                    name="Nombre" 
                                    placeholder="Nombre(s)"
                                    className="form-control"
                                />
                            </Col>
                        </Row>
                    </Table>
               </Jumbotron>
           </Container>
        );
    }
}
export default User;