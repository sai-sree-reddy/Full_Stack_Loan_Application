import React from "react";
import axios from "axios";
import { ReactDOM } from "react-dom";

class UpdateApplicationAmount extends React.Component{
    constructor(props){
        super(props);
        this.state={aid:"",amount:""}
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

    updateApplicationAmount=(event)=>{
        event.preventDefault();
        let application=this.state;
        console.log(this.state.loan);
        var url="http://localhost:8080/updateApplicationAmount";
        axios.put(url,application).then(
            result=> console.log(result)
        ).catch(
            error=>console.log(error)
        )
    }
    // validatePassword=(event)=>{
    //     event.preventDefault();
        
    //     let old=this.state.oldPassword;
    //     var getOld="http://localhost:8080/getManagerOldPassword/"+this.state.musername;
    //     axios.get(getOld).then(
    //         result=>{
    //             if(result.data!==this.state.oldPassword ){

    //                 console.log("Incorrect Old Password");
    //                 console.log(result.data);
    //                 console.log(this.state.oldPassword)
    //             }
    //             else{
    //                 if(this.state.mpassword!==this.state.confirmPassword){
    //                     console.log("Passwords Does not Match");
    //                 }
    //                 else{
                       
    //                     this.updateManager();
    //                 }
    //             }
    //         }
    //     ).catch(
    //         error=>console.log(error)
    //     )
    // }

    render(){

        return(
            <div className="container text-center"><br/>
            <br/>
            <br/>
                <form onSubmit={this.updateApplicationAmount} className="container">
                    <fieldset>
                        <legend>Update Application Amount</legend><br/><br/>
                        <input type="text" name="aid" onChange={this.changeValue} className="text-center form-control" placeholder="Application ID"/>
                        <br/>
                        {/* <input type="password" name="oldPassword" onChange={this.changeValue} placeholder="Old Password"/>
                        <br/>
                        <input type="password" name="mpassword" onChange={this.changeValue} placeholder="New Password"/>
                        <br/> */}
                        <input type="text" name="amount" className="text-center form-control" onChange={this.changeValue} placeholder="Amount"/>
                        <br/>
                        <input className="btn btn-outline-danger" type="submit"value="Update"/>
                        
                    </fieldset>
                </form>
            </div>
        )
    }

}
export default UpdateApplicationAmount;