import React from "react";
import axios from "axios";

class DeleteClerk extends React.Component{

    constructor(props){
        super(props);
        this.state={
            cusername:0,
            musername:"",
            mpassword:"",msg:"",errmsg:""
        }
    }
    deleteClerk=()=>{
        
        let id=this.state.cusername;
        var url="http://localhost:8080/deleteClerkInfo/";
        url=url+this.state.cusername;
        // console.log(url);
        axios.delete(url).then(
            result =>{
                console.log(result);
                this.setState({
                    errmsg:"",
                    msg:result.data
                })
            }
        ).catch(error=>{console.log(error)})
    }
    changeValue=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState( { [name]:value } )
    }
    validatePassword=(event)=>{
        event.preventDefault();
        let url="http://localhost:8080/getManagerOldPassword/"+this.state.musername;
        axios.get(url).then(
            result=>{
                // this.setState({data:result.data});
                if(result.data!==this.state.mpassword){
                    console.log("Incorrect Password");
                    this.setState({
                        errmsg:"Incorrect Password",
                        msg:""
                    })
                }
                else{
                    console.log("Logged In");
                    // this.setState({nothing:<UpdateManagerPassword/>})
                    this.deleteClerk();
                    
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
            <div  className="container text-center">
                <br/>
                <form onSubmit={this.validatePassword} className="container">
                    <fieldset>
                        <legend>Delete Clerk</legend><br/><br/>
                        <input name="cusername" type="text" placeholder="Clerk Username" className="text-center form-control" onChange={this.changeValue}/>
                        <br/>
                        <input type="text" placeholder="Manager Username" name="musername" className="text-center form-control" onChange= {this.changeValue} />
                        <br/>
                        <input type="password" placeholder="Manager Password" name="mpassword" className="text-center form-control" onChange={this.changeValue} />
                        <br/>
                        <input type="submit"  className="btn btn-outline-danger"  value="Delete" />
                        &ensp;&ensp;&ensp;&ensp;
                        <input type="reset" className="btn btn-outline-success" onClick={this.reset} value="Reset"/>
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
export default DeleteClerk;