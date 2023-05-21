import React from "react";
import axios from "axios";

class StoreManager extends React.Component{
    constructor(props){
        super(props);
        this.state={
            musername:"",
            mpassword:"",
            n_musername:"",
            n_mpassword:"",msg:"",errmsg:""
        }
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
    storeManager=()=>{
        // event.preventDefault();
        let url="http://localhost:8080/storeManagerInfo";
        let manager={
            musername:this.state.n_musername,
            mpassword:this.state.n_mpassword
        };
        axios.post(url,manager).then(
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
                    this.storeManager();
                    
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
            <div className="container text-center"><br/>
            
                <form onSubmit={this.validatePassword}  className="container">
                    <fieldset>
                        <legend>Store Manager</legend>
                        <input type="text" className="text-center form-control" name="n_musername" placeholder="New Manager Username" onChange={this.changeValue} />
                        <br/>
                        <input type="password" className="text-center form-control" name="n_mpassword" placeholder="New Manager Password" onChange={this.changeValue}/>
                        <br/>
                        <input type="text" className="text-center form-control" placeholder="Manager Username" name="musername" onChange= {this.changeValue} />
                        <br/>
                        <input type="password" className="text-center form-control" placeholder="Manager Password" name="mpassword" onChange={this.changeValue} />
                        <br/>
                        <input type="submit"  className="btn btn-outline-success"  value="Store"/>
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
export default StoreManager;