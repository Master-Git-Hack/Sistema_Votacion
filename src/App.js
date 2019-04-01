import React, { Component } from 'react';
import './App.css';
import fire from './Config/Config';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';

class App extends Component {
  constructor()
  {
    super();
    this.state=
    {
      user:'',
    }
    this.logOut=this.logOut.bind(this);
  }
  componentDidMount()
  {
    this.authListener();
  }
  logOut()
  {
    fire.auth().signOut();
  }
  authListener()
  {
    fire.auth().onAuthStateChanged((user)=>
    {
      
      if(user)
        this.setState({user});
      else
        this.setState({user:null});
    });
  }

  render() {
    return (
      <div>
        <NavBar>
          <button type="submit" name="Participant" onClick={this.logOut} className="btn nav-link bg-danger text-light">Log Out</button>
        </NavBar>
        { this.state.user ? <Home Numero_Control={fire.auth().currentUser.email}/> : <Login/>}
      </div>
    );
  }
}

export default App;
