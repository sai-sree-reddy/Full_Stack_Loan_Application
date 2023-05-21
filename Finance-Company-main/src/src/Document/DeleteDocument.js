import React from 'react';
import axios from 'axios';
import DeleteLoan from '../Loan/DeleteLoan';

class DeleteDocument extends React.Component {
    constructor(props) {
        super(props);
        this.state = { did:0 }
    }
    deleteLoan=(event)=>{
        event.preventDefault();
        var url="http://localhost:8080/deleteDocument/";
        url+=this.state.did;
        axios.delete(url).then(
            result =>console.log(result)
        ).catch(
            error=>console.log(error)
        )
    }
    changeValue=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState(
            { [name]:value}
        )
    }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.deleteLoan}>
                    <fieldset>
                        <legend>Delete Document</legend>
                        <input type="text" name="did" onChange={this.changeValue} placeholder="Document ID"/>
                        <input type="submit" value="Delete"/>
                    </fieldset>
                </form>
            </div>
         );
    }
}
 
export default DeleteDocument;