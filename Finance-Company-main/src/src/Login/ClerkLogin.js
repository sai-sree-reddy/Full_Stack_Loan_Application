
import React from "react";
import axios from "axios";
import Nothing from "./Nothing";

class ClerkLogin extends React.Component{
    constructor(props){
        super(props);
        this.state={cusername:"", cpassword:"",nothing:<Nothing/>,msg:"",errmsg:""}
    }

    changeValue=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState(
            {
                [name]:value
            })
    }
    reset=(event)=>{
        // event.preventDefault();
        this.setState({
            errmsg:"",
            msg:""
        })
    }
    checkPassword=(event)=>{
        event.preventDefault();
        let url="http://localhost:8080/getClerkOldPassword/";
        let x=url+this.state.cusername;
        console.log(x);
        axios.get(x).then(
            result=>{
                if(result.data!==this.state.cpassword){
                    this.setState({
                        errmsg:"Incorrect Password",
                        msg:""
                    })
                    console.log("Incorrect Password");
                    this.props.callBack("Incorrect Password",0)
                }
                else{
                    this.props.callBack(0,this.state.nothing)
                    console.log("Logged in")
                }
                // console.log(result.data)
            }
             ).catch(
            error=>console.log(error)
        )
    }

    render(){

        return (
            <div className="container text-center">
<br/>
<br/>
<br/>
                <form onSubmit={this.checkPassword} className="container">
                    <fieldset>
                    <legend>Clerk Login</legend><br/><br/>
                    {/* <label for="cusername">Clerk Username: </label> */}
                    <input type="text" placeholder="Clerk Username" className="text-center form-control" name="cusername" onChange={this.changeValue}/>
                    <br/>
                    {/* <label for="cpassword">Password: </label> */}
                    <input type="password" placeholder="Password" className="text-center form-control" name="cpassword" onChange={this.changeValue}/>
                    <br/>
                    <input type="submit" className="btn btn-outline-success" value="Login"/>&ensp;&ensp;
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
export default ClerkLogin;