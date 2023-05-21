import React from "react";
import axios from "axios";


class GetPendingManager extends React.Component{
    constructor(props){
        super(props);
        this.state={loanapplication:[],flag:false}
    }

    getLoanApplication=(event)=>{
        axios.get("http://localhost:8080/getAllPending").then(
            result=>{
                console.log(result.data);
                this.setState(
                   { loanapplication:result.data}
                )
            }
        ).then(
            error=> console.log(error)
        )
    }
    componentDidMount(){
        this.getLoanApplication();
    }

    render(){
        let allLoanApplication=this.state.loanapplication.map(la=><tr>
            <td>{la.aid}</td>
            <td>{la.amount}</td>
            <td>{la.csid}</td>
            <td>{la.lsid}</td>
            <td>{la.approved}</td>
            <td><input type="button" value="Update"  className="btn btn-outline-success" onClick={(event)=>{
                this.props.history.push("updateStatusById/"+la.aid)
            }} /></td>
        </tr>)
        return(
            <div>
                {/* <input type="button" onClick={this.getLoanApplication} value="Click Here"/> */}
                <table  className="table table-success table-striped" border="1">
                    <thead>
                        <th>Application ID</th>
                        <th>Amount</th>
                        <th>Customer ID</th>
                        <th>Loan ID</th>
                        <th>Status</th>
                        <th>Update Status</th>
                    </thead>
                    <tbody>
                        {allLoanApplication}
                    </tbody>
                </table>
                
            </div>
        )
    }

}
export default GetPendingManager;