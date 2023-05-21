
import axios from "axios";
import React from "react";
import {useHistory} from "react-router-dom"
import UpdateManagerPassword from "../Manager/UpdateManagerPassword";
import Nothing from "./Nothing";


class ManagerLogin extends React.Component{

    constructor(props){
        super(props);
        this.state={musername:".",mpassword:"", data:"lol",nothing:<Nothing/>,msg:"",errmsg:""};
        // this.props.callBack(this.state.data)
        
    }
    reset=(event)=>{
        // event.preventDefault();
        this.setState({
            errmsg:"",
            msg:""
        })
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
    // callback=(bdata)=>{
    //     this.setState({data:bdata})
    // }
    checkPassword=(event)=>{
        
        event.preventDefault();
        let url="http://localhost:8080/getManagerOldPassword/"+this.state.musername;
        axios.get(url).then(
            result=>{
                this.setState({data:result.data});
                if(result.data!==this.state.mpassword){
                    this.setState({
                        errmsg:"Incorrect Password",
                        msg:""
                    })
                    console.log("Incorrect Password");
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
    render(){

        return (
            <div className="container text-center">
<br/>
<br/>
<br/>
                <form onSubmit={this.checkPassword} className="container">
                    <fieldset>
                    <legend>Manager Login</legend><br/><br/>
                    {/* <label for="musername">Manager Username: </label> */}
                    <input type="text" placeholder="Manager Username" className="text-center form-control" name="musername" onChange= {this.changeValue} />
                    <br/>
                    {/* <label for="mpassword">Password: </label> */}
                    <input type="password" placeholder="Password" className="text-center form-control" name="mpassword" onChange={this.changeValue} />
                    <br/>
                    <input type="submit" className="btn btn-outline-success" value="Login"/>&ensp;&ensp;
                    <input type="reset" className="btn btn-outline-danger" onClick={this.reset} value="Reset"/>
                    </fieldset>
                </form>
                <br/>
                <div>
                    {this.state.msg}
                </div>
                <div className="text-danger">
                    {this.state.errmsg}
                </div>
                {/* {this.state.nothing} */}

            </div>
        )
    }
}

export default ManagerLogin;