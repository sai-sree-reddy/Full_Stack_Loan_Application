import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import UpdateClerkPassword from '../Clerk/UpdateClerkPassword';
class GetAllApplicationByIdManager extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listOf:[],
            cid:this.props.customerId
            
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
    componentDidMount(){
        this.getApplication();
    }
    componentDidMount(){
        this.getApplication();
    }
    getApplication=()=>{
    //    event.preventDefault();
        console.log(this.state.cid);
        console.log(this.props.match.params.customerId);
        let url="http://localhost:8080/getListOfApplication/"+this.props.match.params.customerId;
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
            <td><input type="button"  className="btn btn-outline-primary" value={la.lsid} onClick={(event)=>{
                this.props.history.push("");
                this.props.history.push("getLoanById/"+la.lsid)}} /> </td>
            <td>{la.amount}</td>
            <td>{la.appliedBy}</td>
            <td>{la.approved}</td>
            
        </tr>)
        return ( 
            <div className="container text-center">
                <br/>
                <br/>
                {/* <form onSubmit={this.getApplication}  className="container">
                    <fieldset>
                        <legend>Loan Application</legend><br/><br/>
                        <input type="text" name="cid" onChange={this.changeValue}  className="text-center form-control" value={this.props.customerId} placeholder="Customer ID"/>
                        <input type="submit"  className="btn btn-outline-success" value="Get"/>
                    </fieldset>

                </form> */}
                <table  className="table table-success table-striped">
                    <thead>
                        <th>Application ID</th>
                        <th>Loan ID</th>
                        <th>Amount</th>
                        <th>Applied By</th>
                        <th>Checked By</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        {allLoanApplication}
                    </tbody>
                </table>
                <Route path="/update" component={UpdateClerkPassword}></Route>
            </div>
         );
    }
}
 
export default GetAllApplicationByIdManager;