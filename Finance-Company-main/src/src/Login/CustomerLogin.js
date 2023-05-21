import react from "react";
import React from "react";
import axios from "axios";
import Nothing from "./Nothing";

class CustomerLogin extends React.Component{

    constructor(props){
        super(props);
        this.state={cid:"",password:"",nothing:<Nothing/>,msg:"",errmsg:""}
    }
    changeValue=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState(
            {
                [name]:value
            }
        )
    }
    checkPassword=(event)=>{
        event.preventDefault();
        let url="http://localhost:8080/getOldPassword/"+this.state.cid;
        axios.get(url).then(
            result=>{
                if(result.data!==(this.state.password)){
                    console.log("Incorrect Password");
                    this.setState({
                        errmsg:"Incorrect Password",
                        msg:""
                    })
                    // this.props.callBack("Incorrect");
                    this.props.callBack("Incorrect Password",0);
                }
                else{
                    console.log("Logged In");
                    // this.setState({nothing:<UpdateManagerPassword/>})
                    this.props.callBack(0,this.state.nothing);
                    
                }
            }
        ).catch(
            error=>console.log(error)
        )
    }
    reset=(event)=>{
        // event.preventDefault();
        this.setState({
            errmsg:"",
            msg:""
        })
    }
    render(){

        return (
            <div className="container text-center">
<br/>
<br/>
<br/>
                <form onSubmit={this.checkPassword} className="container">
                    <fieldset>
                    <legend>Customer Login</legend><br/><br/>
                    {/* <label for="cid">Customer ID: </label> */}
                    <input type="text" className="text-center form-control" placeholder="Customer ID" name="cid" onChange={this.changeValue} />
                    <br/>
                    {/* <label for="password">Password: </label> */}
                    <input type="password"  className="text-center form-control" placeholder="Password " name="password" onChange={this.changeValue} />
                    <br/>
                    <input type="submit" className="btn btn-outline-success" value="Login"/>
                    &ensp;&ensp;
                    <input type="reset" className="btn btn-outline-danger" onClick={this.reset} value="Reset"/>
                    </fieldset>
                </form><br/>
                <div>
                    {this.state.msg}
                </div>
                <div className="text-danger">
                    {this.state.errmsg}
                </div>
            </div>
        )
    }
}
export default CustomerLogin;