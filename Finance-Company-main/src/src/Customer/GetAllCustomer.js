import React from "react";
import axios from "axios";
import Nothing from "../Login/Nothing";
import GetAllApplicationById from "../LoanApplication/GetAllApplicationById";
import { Link , Route} from "react-router-dom";

class GetAllCustomer extends React.Component{

    constructor(props){
        super(props);
        this.state={ customer:[],flag:false,nothing:<Nothing/>}
    }
    componentDidMount(){
        this.getCustomer();
    }
    getCustomer=()=>{
        axios.get("http://localhost:8080/getAllCustomer").
        then(result=>{
            // console.log(result);
            this.setState( {customer:result.data})
        }).catch(error=>
                console.log(error))
    }
    // getApplication=(event)=>{
    //     event.preventDefault();
    //     // this.props.history.push("getApplication");
    //     this.props.history.push("getApplication/"+event.target.customerId);
        
    // }

    render(){

        let customerRec=this.state.customer.map(c=><tr>
            <td>{c.cid}</td>
            <td>{c.cname}</td>
            <td>{c.gender}</td>
            <td>{c.contact}</td>
            <td><input type="button"  className="btn btn-outline-primary" value="Get Applications"  onClick={(event)=>{
                this.props.history.push("getApplication/"+c.cid);
            }} /> </td>
            {/* <Route path="/get" component={GetAllApplicationById}></Route> */}
        </tr>)

        return(
            <div  className="container text-center">
                {/* <input type="button" value="Click here" onClick= {this.getCustomer}/>
                <table>
                    <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Contact</th>
                            <th>Buttons</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerRec}
                    </tbody>
                </table> */}
                
                 <table  className="table table-success table-striped">
                    <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Contact</th>
                            <th>Buttons</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerRec}
                    </tbody>
                    </table>

                    


            </div>
        )
    }
}
export default GetAllCustomer;