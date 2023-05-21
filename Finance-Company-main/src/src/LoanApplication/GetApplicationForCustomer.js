import React, { Component } from 'react';
import axios from 'axios';

class GetApplicationForCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listOf:[],
            cid:this.props.customerId,
            password:""
            
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
                    this.props.callBack("Incorrect Password",0);
                }
                else{
                    console.log("Logged In");
                    // this.setState({nothing:<UpdateManagerPassword/>})
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
    render() { 
        let allLoanApplication=this.state.listOf.map(la=><tr>
            <td>{la.aid}</td>
            <td>{la.lsid}</td>
            <td>{la.amount}</td>
            <td>{la.appliedBy}</td>
            <td>{la.approved}</td>
            
        </tr>)
        return ( 
            <div  className="container text-center">
                <form onSubmit={this.verifyPassword} className="container" >
                    <fieldset>
                        <legend>Loan Application</legend>
                        <input type="text" name="cid"  className="container text-center"
                        onChange={this.changeValue}
                         placeholder="Customer ID"/>
                         <input type="password" name="password"  className="container text-center"
                        onChange={this.changeValue}
                         placeholder="Password"/>
                        <input type="submit" className="btn btn-outline-success" value="Get"/>
                    </fieldset>

                </form>
                <table className="table table-success table-striped" border="1">
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
 
export default GetApplicationForCustomer;