import React from "react";
import axios from "axios";
import { ReactDOM } from "react-dom";

class UpdateLoanByIdManager extends React.Component{
    constructor(props){
        super(props);
        this.state={lid:this.props.match.params.loanId,linterest:"",musername:"",mpassword:"",msg:"",errmsg:""}
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
        let url="http://localhost:8080/getManagerOldPassword/"+this.state.musername;
        axios.get(url).then(
            result=>{
                this.setState({data:result.data});
                if(result.data!==this.state.mpassword){
                    console.log("Incorrect Password");
                    this.setState({
                        errmsg:"Incorrect Password",
                        msg:""
                    })
                    // this.props.callBack("Incorrect");
                    // this.props.callBack("Incorrect Password",0);
                }
                else{
                    console.log("Logged In");
                    // this.setState({nothing:<UpdateManagerPassword/>})
                    this.updateLoanInterest();
                    
                }
            }
        ).catch(
            error=>console.log(error)
        )
    }
    updateLoanInterest=()=>{
        // event.preventDefault();
        let loan=this.state;
        
        var url="http://localhost:8080/updateLoanInterest";
        axios.put(url,loan).then(
            result=>{ console.log(result);
                this.setState({
                    errmsg:"",
                    msg:result.data
                })
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
            
                <form onSubmit={this.checkPassword} className="container">
                    <fieldset>
                        <legend>Update Loan Interest</legend><br/><br/>
                        {/* <input type="text" name="lid" onChange={this.changeValue} placeholder="Loan ID"/>
                        <br/> */}
                        <input type="text" placeholder="Manager Username" className="text-center form-control" name="musername" onChange= {this.changeValue} />
                        <br/>
                        <input type="password" name="mpassword" className="text-center form-control" onChange={this.changeValue} placeholder="Password"/>
                        <br/>
                        <input type="text" name="linterest" className="text-center form-control" onChange={this.changeValue} placeholder="Interest Rate"/>
                        <br/>
                        <input className="btn btn-outline-success" type="submit"value="Update"/>
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
export default UpdateLoanByIdManager;