import React, { Component } from 'react';
import axios from 'axios';

class GetApplicationForCustLoanId extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listOf:[],
            cid:this.props.customerId,
            password:"",msg:"",errmsg:""
            
         }
    }
    changeValue=(event)=>{
        event.preventDefault();
        let name=event.target.name;
        let value=event.target.value;
        this.setState({
            [name]:value
        })
    }
    // componentDidMount(){
    //     this.getApplication();
    // }
    verifyPassword=(event)=>{
        event.preventDefault();
        let url="http://localhost:8080/getOldPassword/"+this.state.cid;
        axios.get(url).then(
            result=>{
                if(result.data!==(this.state.password)){
                    console.log("Incorrect Password");
                    // this.props.callBack("Incorrect");
                    // this.props.callBack("Incorrect Password",0);
                    this.setState({
                        errmsg:"Incorrect Password",
                        msg:""
                    })
                }
                else{
                    console.log("Logged In");
                    // this.setState({nothing:<UpdateManagerPassword/>})
                    this.setState({
                        errmsg:"",
                        msg:""
                    })
                    this.getApplication();
                    
                }
            }
        ).catch(
            error=>console.log(error)
        )
    }

    getApplication=()=>{
    //    event.preventDefault();
        console.log(this.state.cid);
        console.log(this.props.cid)
        let url="http://localhost:8080/getListOfApplication/"+this.state.cid;
        axios(url).then(
            result=>{
                console.log(result.data);
                this.setState(
                   { listOf:result.data}
                )
            }
        ).then(
            error=> console.log(error)
        )

    }
    reset=(event)=>{
        // event.preventDefault();
        this.setState({
            errmsg:"",
            msg:""
        })
    }
    render() { 
        let allLoanApplication=this.state.listOf.map(la=><tr>
            <td>{la.aid}</td>
            <td><input type="button"  className="btn btn-outline-primary"  value= {la.lsid} onClick={(event)=>{this.props.history.push("showLoan/"+la.lsid)}}/> </td>
            <td>{la.amount}</td>
            <td>{la.appliedBy}</td>
            <td>{la.approved}</td>
            
        </tr>)
        return ( 
            <div className="container text-center"><br/>
                <form onSubmit={this.verifyPassword} className="container">
                    <fieldset>
                        <legend>Loan Application</legend>
                        <input type="text" name="cid" onChange={this.changeValue}  className="btn btn-outline-parimary"
                         placeholder="Customer ID"/><br/><br/>
                         <input type="password" name="password"  className="btn btn-outline-parimary"
                        onChange={this.changeValue}
                         placeholder="Password"/> <br/><br/>
                        <input type="submit"  className="btn btn-outline-success" value="Get"/>
                        &ensp;&ensp;&ensp;&ensp;
                        <input type="reset" className="btn btn-outline-danger" onClick={this.reset} value="Reset"/>
                    </fieldset>

                </form><br/>
                <div className="text-success">
                    {this.state.msg}
                </div>
                <div className="text-danger">
                    {this.state.errmsg}
                </div><br/>
                <table  className="table table-success table-striped" border="1">
                    <thead>
                        <th>Application ID</th>
                        <th>Loan ID</th>
                        <th>Amount</th>
                        <th>Applied By</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        {allLoanApplication}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default GetApplicationForCustLoanId;