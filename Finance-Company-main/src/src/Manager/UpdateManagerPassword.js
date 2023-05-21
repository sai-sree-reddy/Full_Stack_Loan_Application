import React from "react";
import axios from "axios";
import { ReactDOM } from "react-dom";

class UpdateManagerPassword extends React.Component{
    constructor(props){
        super(props);
        this.state={musername:"",cpassword:"",oldPassword:"",confirmPassword:"",msg:"",errmsg:""}
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

    updateManager=()=>{
        
        let manager=this.state;
        console.log(this.state.musername);
        var url="http://localhost:8080/updateManagerPassword";
        axios.put(url,manager).then(
            result=>{
                 console.log(result);
                 this.setState({
                    errmsg:"",
                    msg:result.data
                })
                }
        ).catch(
            error=>console.log(error)
        )
    }
    validatePassword=(event)=>{
        event.preventDefault();
        
        let old=this.state.oldPassword;
        var getOld="http://localhost:8080/getManagerOldPassword/"+this.state.musername;
        axios.get(getOld).then(
            result=>{
                if(result.data!==this.state.oldPassword ){

                    console.log("Incorrect Old Password");
                    console.log(result.data);
                    console.log(this.state.oldPassword);
                    this.setState({
                        errmsg:"Incorrect Password",
                        msg:""
                    })
                }
                else{
                    if(this.state.mpassword!==this.state.confirmPassword){
                        console.log("Passwords Does not Match");
                        this.setState({
                            errmsg:"Passwords Does not Match",
                            msg:""
                        })
                    }
                    else{
                       
                        this.updateManager();
                    }
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

        return(
            <div className="container text-center">
                <br/>
                <form onSubmit={this.validatePassword}  className="container">
                    <fieldset>
                        <legend>Update Manager Password</legend><br/><br/>
                        <input className="text-center form-control" type="text" name="musername" onChange={this.changeValue} placeholder="Manager Username"/>
                        <br/>
                        <input className="text-center form-control" type="password" name="oldPassword" onChange={this.changeValue} placeholder="Old Password"/>
                        <br/>
                        <input className="text-center form-control" type="password" name="mpassword" onChange={this.changeValue} placeholder="New Password"/>
                        <br/>
                        <input className="text-center form-control" type="password" name="confirmPassword" onChange={this.changeValue} placeholder="Confirm Password"/>
                        <br/>
                        <input className="btn btn-outline-success" type="submit"value="Change Password"/>
                        &ensp;&ensp;&ensp;&ensp;
                        <input type="reset" className="btn btn-outline-danger" onClick={this.reset} value="Reset"/>
                        
                    </fieldset>
                </form><br/>
                <div className="text-success">
                    {this.state.msg}
                </div>
                <div className="text-danger">
                    {this.state.errmsg}
                </div>
            </div>
        )
    }

}
export default UpdateManagerPassword;