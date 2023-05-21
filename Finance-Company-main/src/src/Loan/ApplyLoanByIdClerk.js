import React from "react";
import axios from "axios";

class ApplyLoanByIdClerk extends React.Component{
    constructor(props){
        super(props);
        this.state={
            aid:0,
            amount:0,
            csid:0,
            lsid:0,
            approved:"Pending",
            cpassword:"",
            appliedBy:"",
            message:"",
            l:[],msg:"",errmsg:""
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
    storeLoanApplication=()=>{
        // event.preventDefault();
        let url="http://localhost:8080/storeApplicationInfo";
        console.log(this.props.match.params.loanId);
        let loanapplication={
            aid:(this.state.l[0]+1),
            appliedBy:this.state.appliedBy,
            approved:"Pending",
            amount:this.state.amount,
            csid:this.state.csid,
            lsid:this.props.match.params.loanId
        }
        axios.post(url,loanapplication).then(
            result=>{
                console.log(result);
               //this.updateAppliedBy();
               this.setState({
                errmsg:"",
                msg:result.data
            });
            }
        ).catch(
            error=>console.log(error)
        )
    }
// updateAppliedBy=()=>{
//     let url="http://localhost:8080/updateAppliedBy";
//     let application=this.state;//,amount,appliedBy,approved,csid,lsid};
//     axios.put(url,application).then(
//         result=>console.log(result)
//     ).catch(
//         error=>console.log(error)
//     )


getMaxAid=()=>{
    axios.get("http://localhost:8080/getMaxAid").then(
            result=>{
                console.log("result");
                console.log(result.data);
                this.setState({
                    l:result.data
                    

                })
                this.storeLoanApplication();
            }
        ).catch(
            error=>console.log(error)
        )
}
validatePassword=(event)=>{
    event.preventDefault();
    let url="http://localhost:8080/getClerkOldPassword/";
    url=url+this.state.appliedBy;
    axios.get(url).then(
        result=>{
            console.log(result);
            if(result.data!==this.state.cpassword){
                console.log("Incorrect Password");
                this.setState({
                    errmsg:"Incorrect Password",
                    msg:""
                });
            }
            else
                this.getMaxAid();
        }
    ).catch(
        error=>{
        console.log(this.state.appliedBy)
        console.log(error+" "+this.state.appliedBy)
        }
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
                        <legend>Store Loan Application</legend><br/><br/>
                        {/* <input type="text" name="aid" placeholder="Application ID" onChange={this.changeValue} />
                        <br/> */}
                        <input type="text" name="amount" className="text-center form-control" placeholder="Amount" onChange={this.changeValue}/>
                        <br/>
                        <input type="text" name="csid" placeholder="Customer ID" className="text-center form-control" onChange={this.changeValue}/>
                        <br/>
                        {/* <input type="text" name="lsid" placeholder="Loan ID" onChange={this.changeValue}/>
                        <br/> */}
                        {/* <input type="text" name="approved" placeholder="Status" onChange={this.changeValue}/>
                        <br/> */}
                        <input type="text" name="appliedBy" className="text-center form-control" placeholder="Clerk Username" onChange={this.changeValue}/>
                        <br/>
                        <input type="password" name="cpassword" className="text-center form-control" placeholder="Clerk Password" onChange={this.changeValue}/>
                        <br/>
                        <input type="submit" className="btn btn-outline-success" value="Store"/>
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
export default ApplyLoanByIdClerk;