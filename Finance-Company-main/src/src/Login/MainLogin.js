import React, { Component } from 'react';
import Login from './Login';
import Nothing from './Nothing';
class MainLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { login:<Nothing/>,
            log:<Login CallbackToMain={this.loggedOut} CallbackToMainLogin={this.callBackFromLogin}/>
        }
    }
    loggedOut=()=>{
        this.setState({
            login:<Nothing/>,
            log:<Login CallbackToMain={this.loggedOut} CallbackToMainLogin={this.callBackFromLogin}/>
        })
    }
    callBackFromLogin=(data)=>{
        this.setState({log:<Nothing/>})
        this.setState({login:data})
    }
    render() { 
        return ( <div>
            
            {this.state.log}
            {this.state.login}
        </div> );
    }
}
 
export default MainLogin;