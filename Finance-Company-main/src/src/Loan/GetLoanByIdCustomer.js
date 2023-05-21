import React, { Component } from 'react';
import axios from 'axios';

class GetLoanByIdCustomer extends Component {
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
    getLoan=()=>{
        // event.preventDefault();
        let url="http://localhost:8080/findLoanById/"+this.props.match.params.loanId;
        axios(url).then(
            result=> this.setState({
                loan:result.data
            })
        ).catch(
            error=>console.log(error)
        )
        
    }
    componentDidMount(){
        this.getLoan();
    }
    render() { 
        
        return ( 
            <div  className="container text-center">
            <br/>
    
                {/* <form onSubmit={this.getLoan} className="container">
                <fieldset>
                        <legend>Loan Details</legend><br/><br/>
                        <input type="text" name="lid" className="text-center form-control" placeholder="Loan ID" onChange={this.changeValue} />
                        <br/>
                        
                        <input type="submit" className="btn btn-outline-success" value="Get"/>
                    </fieldset> */}
                    <table  className="table table-success table-striped" border="1">
                    <thead>
                        <th>Loan ID</th>
                        <th>Loan Type</th>
                        <th>Loan Interest(in %)</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.props.match.params.loanId}</td>
                        <td>{this.state.loan.ltype}</td>
                        <td>{this.state.loan.linterest}</td>
                    </tr>
                    </tbody>
                </table>
                {/* </form> */}
                
            </div>
        )
    }
}
 
export default GetLoanByIdCustomer;