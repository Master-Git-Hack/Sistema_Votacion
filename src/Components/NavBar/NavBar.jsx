import React,{Component} from 'react';
import UserPanel from './User/User';
import PopUp from 'reactjs-popup';

class NavBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            user:'Einar Jhordany'
        }
    }
    render()
    {
        return(
            <div className="navbar nabvar-dark bg-dark">
                <div className="navbar-brand">
                    <button type="submit" name="Home" onClick={this.componentStatus} className="btn nav-link text-light">Home</button>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar nav">
                    <li className="nav-item">
                        {this.props.children}
                    </li>
                    <li className="nav-item dropdown ">
                        <PopUp
                            trigger=
                            {
                                <button 
                                    className="btn nav-link dropdown-toggle text-light"
                                >{this.state.user}</button>
                            }
                            children={
                                <UserPanel/>
                            }
                        />
                    </li>
                </ul>
            </div>
        );
    }
}
export default NavBar;