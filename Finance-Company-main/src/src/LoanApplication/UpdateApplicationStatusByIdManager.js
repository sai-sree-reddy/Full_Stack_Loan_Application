import React from "react";
import axios from "axios";
import { ReactDOM } from "react-dom";

class UpdateApplicationStatusByIdManager extends React.Component{
    constructor(props){
        super(props);
        this.state={aid:"",approved:"",musername:"",mpassword:"",msg:"",errmsg:""}
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
    updateApprovedBy=()=>{
        var url="http://localhost:8080/updateApprovedBy";
        var c={aid:this.props.match.params.aid,approvedBy:this.state.musername};
        axios.put(url,c).then(
            result=>{
                console.log(result);
                this.setState({
                    errmsg:"",
                    msg:result.data
                })
            }
        ).catch(error=> console.log(error))

    }
    updateApplicationStatus=()=>{
        // event.preventDefault();
        let loan=this.state;
        // let loan ={aid:this.}
        // console.log(this.state);
        var url="http://localhost:8080/updateApplicationStatus/"+this.props.match.params.aid+"/"+this.state.approved;
        axios.get(url).then(
            result=>{ console.log(result);
        
                this.updateApprovedBy(); 
                
        }
        ).catch(
            error=>console.log(error)
        )
    }
    validatePassword=(event)=>{
        event.preventDefault();
        
        
        var getOld="http://localhost:8080/getManagerOldPassword/"+this.state.musername;
        axios.get(getOld).then(
            result=>{
                if(result.data!==this.state.mpassword ){
                    this.setState({
                        errmsg:"Incorrect Password",
                        msg:""
                    })
                    console.log("Incorrect Password");
                    console.log(result.data);
                    console.log(this.state.mpassword)
                }
                else{
                   this.updateApplicationStatus();
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
            <div  className="container text-center"><br/>
            
                <form onSubmit={this.validatePassword} className="container">
                    <fieldset>
                        <legend>Update Application Status</legend><br/><br/>
                        {/* <input type="text" name="aid" onChange={this.changeValue} placeholder="Application ID"/>
                        <br/> */}
                        Status:<br/>
                        <input type="radio" name="approved" onChange={this.changeValue} value="Approved"/>Approved
                        <br/>
                        <input type="radio" name="approved" onChange={this.changeValue} value="Not Approved"/>Not Approved
                        <br/><br/>
                        <input type="text" name="musername" className="text-center form-control"  onChange={this.changeValue} placeholder="Manager ID"/>
                        <br/>
                        <input type="password" name="mpassword" className="text-center form-control"  onChange={this.changeValue} placeholder="Password"/>
                        <br/>
                        <input type="submit"  className="btn btn-outline-success" value="Update"/>
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
export default UpdateApplicationStatusByIdManager;