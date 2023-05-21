import React from "react";
import axios from "axios";

class DeleteCustomer extends React.Component{

    constructor(props){
        super(props);
        this.state={cid:0}
    }
    deleteCustomer=(event)=>{
        event.preventDefault();
        let id=this.state.cid;
        var url="http://localhost:8080/deleteCustomerInfo/";
        url=url+this.state.cid;
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
            <div>
                <form onSubmit={this.deleteCustomer}>
                    <fieldset>
                        <legend>Delete Customer</legend>
                        <input name="cid" type="text" placeholder="Customer ID" onChange={this.changeValue}/>
                        <input type="submit" value="Delete" />
                    </fieldset>
                    
                </form>
            </div>
        )
    }
}
export default DeleteCustomer;