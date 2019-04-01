import React,{Component} from 'react';
import NavBar from './../NavBar';
class Navigation extends Component
{
    render()
    {
        return(
            <NavBar>
                <ul className='navbar-nav'>
                    <li className='nav-item active'>
                        <a className='nav-link' href='#'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>Home</a>
                    </li>
                </ul>
            </NavBar>
        );
    }
}
export default Navigation;