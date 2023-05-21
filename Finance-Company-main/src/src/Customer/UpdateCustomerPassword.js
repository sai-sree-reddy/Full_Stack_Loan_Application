import React from "react";
import axios from "axios";
import { ReactDOM } from "react-dom";

class UpdateCustomerPassword extends React.Component{
    constructor(props){
        super(props);
        this.state={cid:0,password:"",oldPassword:"",confirmPassword:"",msg:"",errmsg:""}
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

    updateCustomer=()=>{
        
        let customer=this.state;
        console.log(this.state.cid);
        var url="http://localhost:8080/updateCustomerPassword";
        axios.put(url,customer).then(
            result=>{ console.log(result);
            this.setState({
                errmsg:"",
                msg:result.data
            })
        }
        ).catch(
            error=>{
                console.log(error);
            }
        )
    }
    validatePassword=(event)=>{
        event.preventDefault();
        
        
        var getOld="http://localhost:8080/getOldPassword/"+this.state.cid;
        axios.get(getOld).then(
            result=>{
                if(result.data!==this.state.oldPassword ){

                    console.log("Incorrect Old Password");
                    this.setState({
                        errmsg:"Incorrect Password",
                        msg:""
                    })
                }
                else{
                    if(this.state.password!==this.state.confirmPassword){
                        console.log("Passwords Does not Match");
                        this.setState({
                            errmsg:"Passwords Does not Match",
                            msg:""
                        })
                    }
                    else{
                       
                        this.updateCustomer();
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
                <form onSubmit={this.validatePassword} className="container">
                    <fieldset>
                        <legend>Update Customer Password</legend><br/><br/>
                        <input type="text" name="cid" className="text-center form-control" onChange={this.changeValue} placeholder="Customer ID"/>
                        <br/>
                        <input type="password" name="oldPassword" className="text-center form-control" onChange={this.changeValue} placeholder="Old Password"/>
                        <br/>
                        <input type="password" name="password" className="text-center form-control" onChange={this.changeValue} placeholder="New Password"/>
                        <br/>
                        <input type="password" name="confirmPassword" className="text-center form-control" onChange={this.changeValue} placeholder="Confirm Password"/>
                        <br/>
                        <input type="submit" className="btn btn-outline-success" value="Change Password"/>
                        &ensp;&ensp;&ensp;&ensp;
                        <input type="reset" className="btn btn-outline-danger" onClick={this.reset} value="Reset"/>
                    </fieldset>
                </form>
                <br/>
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
export default UpdateCustomerPassword;