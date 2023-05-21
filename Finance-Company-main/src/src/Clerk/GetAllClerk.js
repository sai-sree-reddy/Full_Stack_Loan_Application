import React from "react";
import axios from "axios";


class GetAllClerk extends React.Component{
    constructor(props){
        super(props);
        this.state={ clerk:[],flag:false}
    }
    componentDidMount(){
        this.getClerk();
    }
    getClerk=(event)=>{
        axios.get("http://localhost:8080/getAllClerk").then(
            result=>{
                console.log(result.data);
                this.setState(
                   { clerk:result.data}
                )
            }
        ).then(
            error=> console.log(error)
        )
    }

    render(){
        let allClerk=this.state.clerk.map(c=><tr>
            <td>{c.cusername}</td>
            {/* <td>{c.cpassword}</td> */}
            <td><input  className="btn btn-outline-danger" type="button" value="Delete Clerk" onClick={(event)=>{
                this.props.history.push("deleteClerkById/"+c.cusername)
            }} /> </td>
        </tr>)
        return(
            <div className="container text-center">
                {/* <input type="button" onClick={this.getClerk} value="Click Here"/>
                <table border="1">
                    <thead>
                        <th> Clerk Username</th>
                        <th>Clerk Password</th>
                    </thead>
                    <tbody>
                        {allClerk}
                    </tbody>
                </table> */}
                <table className="table table-success table-striped">
                    <thead>
                        <th> Clerk Username</th>
                        {/* <th>Clerk Password</th> */}
                        <th>Delete Clerk</th>
                    </thead>
                    <tbody>
                        {allClerk}
                    </tbody>
                </table>
                
            </div>
        )
    }

}
export default GetAllClerk;