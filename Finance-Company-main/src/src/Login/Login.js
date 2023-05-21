// import React from 'react';
import React, { Component } from 'react';
import axios from 'axios';
import CustomerLogin from './CustomerLogin';
import ClerkLogin from './ClerkLogin';
import ManagerLogin from './ManagerLogin';
import Nothing from './Nothing';
import { Route } from 'react-router';
import UpdateManagerPassword from '../Manager/UpdateManagerPassword';
import Login2 from './Login2';
import GetAllCustomer from '../Customer/GetAllCustomer';
import GetAllClerk from '../Clerk/GetAllClerk';
import CusotmerDashboard from '../Customer/CustomerDashboard';
import ManagerDashboard from '../Manager/ManagerDashboard';
import ClerkDashboard from '../Clerk/ClerkDashboard';
import { Button, ButtonGroup } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            message:"",
            loginForm:<Login2/>,
            log:<Nothing/>,
            customerLogin:<CustomerLogin callBack={this.callbackCustomer}/>,
            managerLogin:<ManagerLogin callBack={this.callbackManager}/>,
            clerkLogin:<ClerkLogin callBack={this.callbackClerk}/>
        }
    }
    callbackCustomer=(data,log)=>{
        if(log===0)
            this.setState({message:data})
        else {
            this.props.CallbackToMainLogin(<CusotmerDashboard loggingOut={this.logout}/>)
        }
    }
    callbackManager=(data,log)=>{
        if(log===0)
            this.setState({message:data})
        else {
            this.props.CallbackToMainLogin(<ManagerDashboard loggingOut={this.logout}/>)
        }
    }
    logout=()=>{
        this.props.CallbackToMain()
    }
    callbackClerk=(data,log)=>{
        if(log===0)
            this.setState({message:data})
        else {
            this.props.CallbackToMainLogin(<ClerkDashboard loggingOut={this.logout}/>)
        }
    }
    loggedIn=(login)=>{
        this.setState({log:login})
    }
    customerLogin=(event)=>{
        this.setState({log:this.state.customerLogin})
        
    }
    managerLogin=(event)=>this.setState({log:this.state.managerLogin})
    clerkLogin=(event)=>this.setState({log:this.state.clerkLogin})
    render() { 
        return ( 

            // <div className="container btn-group btn-group-toggle" data-toggle="buttons">
            //     <label className="btn btn-secondary active">
            //     <input type="radio" name="Login" id="Customer" value="Customer Login" autocomplete="off" onClick={this.customerLogin}/>Customer Login
                
            //     </label>
                
            //     <label className="btn btn-secondary active">
            //     <input type="radio" name="Login" id="Clerk" value="Clerk Login" onClick={this.clerkLogin} />Clerk Login
            //     </label>
                
            //     <label className="btn btn-secondary active">
            //     <input type="radio" name="Login" id="Manager" value="Manager Login" onClick={this.managerLogin}/>Manager Login
            //     </label>
            //     <br/>
            //     <hr/>
              <div className="text-center">  
                <div className="container btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-success"  name="Login" id="Customer" value="Customer Login" onClick={this.customerLogin}>Customer Login</button>
                    <button type="button" className="btn btn-outline-success"  name="Login" id="Clerk" value="Clerk Login" onClick={this.clerkLogin}>Clerk Login</button>
                    <button type="button" className="btn btn-outline-success" name="Login" id="Manager" value="Manager Login" onClick={this.managerLogin}>Manager Login</button>
                </div>
                

               {this.state.log}
               <br/>
                {/* <div className="text-danger">
               {this.state.message}
                </div> */}
            </div>
         );
    }
}
 
export default Login;