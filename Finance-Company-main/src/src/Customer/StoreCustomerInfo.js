import React from "react";
import axios from "axios";
import GetAllCustomer from "./GetAllCustomer";
import GetAllDocument from "../Document/GetAllDocument";
class StoreCustomerInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={cid:"",cname:"",contact:"",gender:"",password:"",repassword:"",l:[],msg:"",errmsg:""
           
        }

    }
    changeValue=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});
    }
    validatePassword=(event)=>{
        event.preventDefault();
        if(this.state.password!== this.state.repassword){
            console.log("Password does not match");
            this.setState({
                errmsg:"Passwords Does not Match",
                msg:""
            })
        }
        else{
            this.getCid();
            console.log((this.state.l[0]+1))
        }
    }
    storeCustomer=()=>{
        
        
        // this.getCid();
        this.setState({cid:(this.state.l[0]+1)});
        let c={
                cid: this.state.cid,
                cname: this.state.cname,
                contact: this.state.contact,
                gender: this.state.gender,
                password: this.state.password
              
        }
        console.log(c.cid);
        
        console.log(this.state.cid);
        axios.post("http://localhost:8080/storeCustomerInfo",c).
        then(result=>{console.log(result);
            this.setState({
                errmsg:"",
                msg:result.data
            })
        }).
        catch(error=>console.log(error));
        
    }
    getCid=()=>{
        axios.get("http://localhost:8080/getMaxCid").then(
            result=>{
                console.log("result");
                console.log(result.data);
                this.setState({
                    l:result.data
                    

                })
                this.storeCustomer();
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
                {/* <h2>Cusotmer Information</h2> */}
                <form onSubmit={this.validatePassword}  className="container" >
                    <fieldset>
                        <legend>Store Cusotmer Information</legend>
                        
                        {/* <input type="text" name="cid" onChange={this.changeValue}/><br/> */}
                        
                        <input type="text" name="cname" className="text-center form-control" placeholder="Name" onChange={this.changeValue}/><br/>
                        Gender:<br/>
                        <input type="radio" name="gender" value="M" placeholder="Gender" onChange={this.changeValue}/> Male <br/>
                        <input type="radio" name="gender" value="F" placeholder="Gender" onChange={this.changeValue}/> Female<br/><br/>
                        <input type="text" name="contact" className="text-center form-control" placeholder="Contact Number" onChange={this.changeValue}/><br/>
                        
                        <input type="password" name="password" className="text-center form-control" placeholder="Password" onChange={this.changeValue}/><br/>
                       
                        <input type="password" name="repassword" className="text-center form-control" placeholder="Re-Enter Password" onChange={this.changeValue}/><br/> 
                        <input type="submit" className="btn btn-outline-success" value="Submit"/>
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
export default StoreCustomerInfo;