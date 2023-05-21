import React from "react";
import axios from "axios";


class GetAllLoan extends React.Component{
    constructor(props){
        super(props);
        this.state={loan:[],flag:false}
    }

    getLoan=(event)=>{
        axios.get("http://localhost:8080/getAllLoan").then(
            result=>{
                console.log(result.data);
                this.setState(
                   { loan:result.data}
                )
            }
        ).then(
            error=> console.log(error)
        )
    }

    render(){
        let allLoan=this.state.loan.map(l=><tr>
            <td>{l.lid}</td>
            <td>{l.ltype}</td>
            <td>{l.linterest}</td>
        </tr>)
        return(
            <div  className="container text-center">
                <input type="button" onClick={this.getLoan} value="Click Here"/>
                <table  className="table table-success table-striped" border="1">
                    <thead>
                        <th>Loan ID</th>
                        <th>Loan Type</th>
                        <th>Loan Interest</th>
                    </thead>
                    <tbody>
                        {allLoan}
                    </tbody>
                </table>
                
            </div>
        )
    }

}
export default GetAllLoan;