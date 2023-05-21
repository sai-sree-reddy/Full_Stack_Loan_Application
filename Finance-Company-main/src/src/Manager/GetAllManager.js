import React from "react";
import axios from "axios";


class GetAllManager extends React.Component{
    constructor(props){
        super(props);
        this.state={ manager:[],flag:false}
    }

    getManager=(event)=>{
        axios.get("http://localhost:8080/getAllManager").then(
            result=>{
                console.log(result.data);
                this.setState(
                   { manager:result.data}
                )
            }
        ).then(
            error=> console.log(error)
        )
    }
    componentDidMount(){
        this.getManager();
    }

    render(){
        let allManager=this.state.manager.map(c=><tr>
            <td>{c.musername}</td>
            {/* <td>{c.mpassword}</td> */}
            <td><input  className="btn btn-outline-danger" type="button" value="Delete Clerk" onClick={(event)=>{
                this.props.history.push("deleteManagerById/"+c.musername)
            }} /> </td>
        </tr>)
        return(
            <div>
                {/* <input type="button" onClick={this.getManager} value="Click Here"/>
                <table border="1">
                    <thead>
                        <th>Manager Username</th>
                        <th>Manager Password</th>
                    </thead>
                    <tbody>
                        {allManager}
                    </tbody>
                </table> */}
                <table className="table table-success table-striped">
                    <thead>
                        <th> Manager Username</th>
                        {/* <th>Clerk Password</th> */}
                        <th>Delete Manager</th>
                    </thead>
                    <tbody>
                        {allManager}
                    </tbody>
                </table>
                
            </div>
        )
    }

}
export default GetAllManager;