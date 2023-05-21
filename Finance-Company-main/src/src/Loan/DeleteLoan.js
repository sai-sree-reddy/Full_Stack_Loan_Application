import React from "react";
import axios from "axios";

class DeleteLoan extends React.Component{

    constructor(props){
        super(props);
        this.state={lid:0}
    }
    deleteLoan=(event)=>{
        event.preventDefault();
        let id=this.state.lid;
        var url="http://localhost:8080/deleteLoanById/";
        url=url+this.state.lid;
        // console.log(url);
        axios.delete(url).then(
            result =>{console.log(result)}
        ).catch(error=>{console.log(error)})
    }
    changeValue=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState( { [name]:value } )
    }
    render(){

        return(
            <div className="container text-center">
                <br/>
<br/>
<br/>
                <form onSubmit={this.deleteLoan}  className="container">
                    <fieldset>
                        <legend>Delete Loan</legend><br/><br/>
                        <input name="lid" type="text" className="text-center form-control"  placeholder="Loan ID" onChange={this.changeValue}/>
                        <input type="submit"  className="btn btn-outline-danger" value="Delete" />
                    </fieldset>
                    
                </form>
            </div>
        )
    }
}
export default DeleteLoan;