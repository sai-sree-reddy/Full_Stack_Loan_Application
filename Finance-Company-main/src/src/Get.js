import React, { Component } from 'react';
import axios from 'axios';
class Get extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            l:[]
         }
    }
    get=(event)=>{
        event.preventDefault();
        axios.get("http://localhost:8080/getMaxLoanId").then(
            result=>{
                console.log(result.data);
                this.setState({
                    l:result.data
                })
            }
        ).catch(
            error=>console.log(error)
        )
    }
    render() { 
        return ( 
            <div>
                <input onClick={this.get} type="button" value="Max Loan ID"/>
                {this.state.l[0]}
            </div>
         );
    }
}
 
export default Get;