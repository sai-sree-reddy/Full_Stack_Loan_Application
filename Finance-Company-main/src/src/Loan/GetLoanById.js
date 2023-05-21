import React, { Component } from 'react';
import axios from 'axios';

class GetLoanById extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loan:{lid:0,linterest:0,ltype:""},
            lid:0
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
    getLoan=(event)=>{
        event.preventDefault();
        let url="http://localhost:8080/findLoanById/"+this.state.lid;
        axios(url).then(
            result=> this.setState({
                loan:result.data
            })
        ).catch(
            error=>console.log(error)
        )
        
    }
    render() { 
        
        return ( 
            <div  className="container text-center" > <br/>
            <br/>
            <br/>
                <form onSubmit={this.getLoan}  className="container">
                <fieldset>
                        <legend>Loan Details</legend><br/><br/>
                        <input type="text" name="lid" placeholder="Loan ID" className="text-center form-control" onChange={this.changeValue} />
                        <br/>
                        
                        <input type="submit" className="btn btn-outline-success" value="Get"/>
                    </fieldset>
                    <table  className="table table-success table-striped" border="1">
                    <thead>
                        <th>Loan ID</th>
                        <th>Loan Type</th>
                        <th>Loan Interest</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.state.loan.lid}</td>
                        <td>{this.state.loan.ltype}</td>
                        <td>{this.state.loan.linterest}</td>
                    </tr>
                    </tbody>
                </table>
                </form>
                
            </div>
         );
    }
}
 
export default GetLoanById;