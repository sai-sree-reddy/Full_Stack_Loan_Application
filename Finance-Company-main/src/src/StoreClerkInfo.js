import React from "react";
import axios from "axios";

class StoreClerkInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "cusername": "",
            "cpassword": ""
          }

    }
    changeValue=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});
    }
    storeClerk=(event)=>{
        event.preventDefault();
        let clerk=this.state;
        // if(customer.password!=customer.cpass){
        //     console.log("Passwords does not match");
        // }
        axios.post("http://localhost:8080/storeClerkInfo",clerk).
        then(result=>console.log(result)).
        catch(error=>console.log(error));
    }
    render(){

        return(
            <div>
                <h2>Store Clerk Information</h2>
                <form onSubmit={this.storeCLerk}>
                    <fieldset>
                        <legend><h2>Store Cusotmer Information</h2></legend>
                        <label >Clerk Username</label>
                        <input type="text" name="cusername" onChange={this.changeValue}/><br/>
                        <label>Password</label>
                        <input type="password" name="cpassword" onChange={this.changeValue}/><br/>
                       
                        {/* <label>Password</label>
                        <input type="password" name="password" onChange={this.changeValue}/><br/> */}
                        <input type="submit" value="Submit"/>
                    </fieldset>
                </form>
            </div>
        )
    }
}
export default StoreClerkInfo;