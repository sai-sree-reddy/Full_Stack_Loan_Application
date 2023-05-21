import React from "react";
import axios from "axios";

class StoreClerk extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cusername:"",
            cpassword:"",
            musername:"",
            mpassword:"",msg:"",errmsg:""
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
    storeClerk=()=>{
        
        let url="http://localhost:8080/storeClerkInfo";
        let clerk=this.state;
        axios.post(url,clerk).then(
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
                    this.storeClerk();
                    
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
                        <legend>Store Clerk</legend><br/><br/>
                        <input type="text" className="text-center form-control" name="cusername" placeholder="Clerk Username" onChange={this.changeValue} />
                        <br/>
                        <input type="password" className="text-center form-control" name="cpassword" placeholder="Clerk Password" onChange={this.changeValue}/>
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
export default StoreClerk;