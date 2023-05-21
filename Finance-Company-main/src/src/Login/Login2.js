// import React from 'react';
import React, { Component } from 'react';
import axios from 'axios';
import CustomerLogin from './CustomerLogin';
import ClerkLogin from './ClerkLogin';
import ManagerLogin from './ManagerLogin';
import Nothing from './Nothing';
import { Route } from 'react-router';
import UpdateManagerPassword from '../Manager/UpdateManagerPassword';
// import Login2 from './Login2';

class Login2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            message:"",
            // loginForm:<Login2/>,
            log:<Nothing/>,
            customerLogin:<CustomerLogin/>,
            managerLogin:<ManagerLogin callBack={this.callback1}/>,
            clerkLogin:<ClerkLogin/>
        }
    }
    callback1=(data,log)=>{
        if(log===0)
            this.setState({message:data})
        else {
            this.setState({message:""})
            this.setState({log:log})
        }
    }
    loggedIn=(login)=>{
        this.setState({log:login})
    }
    customerLogin=(event)=>{
        this.setState({log:<CustomerLogin callBack={this.callback1}/>})
        
    }
    managerLogin=(event)=>this.setState({log:this.state.managerLogin})
    clerkLogin=(event)=>this.setState({log:this.state.clerkLogin})
    render() { 
        return ( 
            <div>
                
                <input type="radio" name="Login" id="Customer" value="Customer Login" onClick={this.customerLogin}/>Customer Login
                <br/>
                <input type="radio" name="Login" id="Clerk" value="Clerk Login" onClick={this.clerkLogin} />Clerk Login
                <br/>
                <input type="radio" name="Login" id="Manager" value="Manager Login" onClick={this.managerLogin}/>Manager Login
                <br/>
                <hr/>
                

                {/* <Route path="/home" component={UpdateManagerPassword}></Route> */}
                {this.state.loginForm}

               {/* {this.state.log} */}
               <br/>
               {this.state.message}
                
            </div>
         );
    }
}
 
export default Login2;