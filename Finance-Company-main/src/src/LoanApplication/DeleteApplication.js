import React from "react";
import axios from "axios";

class DeleteApplication extends React.Component{

    constructor(props){
        super(props);
        this.state={aid:0}
    }
    deleteApplication=(event)=>{
        event.preventDefault();
        let id=this.state.aid;
        var url="http://localhost:8080/deleteApplicationById/";
        url=url+this.state.aid;
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
            <div className="container text-center"><br/>
            <br/>
            <br/>
                <form onSubmit={this.deleteApplication} className="container">
                    <fieldset>
                        <legend>Delete Application</legend><br/><br/>
                        <input name="aid" type="text" placeholder="Application ID"  className="text-center form-control" onChange={this.changeValue}/>
                        <input type="submit" className="btn btn-outline-danger" value="Delete" />
                    </fieldset>
                    
                </form>
            </div>
        )
    }
}
export default DeleteApplication;