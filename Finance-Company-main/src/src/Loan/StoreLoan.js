import React from "react";
import axios from "axios";

class StoreLoan extends React.Component{
    constructor(props){
        super(props);
        this.state={
            lid:0,
            ltype:"",
            linterest:0,
            mpassword:"",
            musername:"",
            l:[]

        }
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
    validatePassword=(event)=>{
        event.preventDefault();
        let url="http://localhost:8080/getManagerOldPassword/"+this.state.musername;
        axios.get(url).then(
            result=>{
                // this.setState({data:result.data});
                if(result.data!==this.state.mpassword){
                    console.log("Incorrect Password");
                    
                }
                else{
                    console.log("Logged In");
                    // this.setState({nothing:<UpdateManagerPassword/>})
                    this.getMaxLoanId();
                    
                }
            }
        ).catch(
            error=>console.log(error)
        )
    }
    getMaxLoanId=()=>{
        axios.get("http://localhost:8080/getMaxLoanId").then(
            result=>{
                console.log("result");
                console.log(result.data);
                this.setState({
                    l:result.data
                })
                this.storeLoan();
            }
        ).catch(
            error=>console.log(error)
        )
    }
    storeLoan=()=>{
        
        let url="http://localhost:8080/storeLoanInfo";
        this.setState({lid:(this.state.l[0]+1)});
        let loan={
                lid: this.state.lid,
                ltype: this.state.ltype,
                linterest: this.state.linterest,
                              
        }
        axios.post(url,loan).then(
            result=>console.log(result)
        ).catch(
            error=>console.log(error)
        )
    }
    render(){

        return(
            <div className="container text-center"><br/>
            <br/>
            <br/>
                <form onSubmit={this.validatePassword} className="container">
                    <fieldset>
                        <legend>Store Loan</legend><br/><br/>
                        {/* <input type="text" name="lid" placeholder="Loan ID" onChange={this.changeValue} />
                        <br/> */}
                        <input type="text" name="ltype"  className="text-center form-control" placeholder="Loan Type" onChange={this.changeValue}/>
                        <br/>
                        <input type="text" name="linterest"  className="text-center form-control" placeholder="Interest Rate" onChange={this.changeValue}/>
                        <br/>
                        <input type="text" placeholder="Manager Username"  className="text-center form-control" name="musername" onChange= {this.changeValue} />
                        <br/>
                        
                        <input type="password" placeholder="Password"  className="text-center form-control" name="mpassword" onChange={this.changeValue} />
                        <br/>
                        <input type="submit" className="btn btn-outline-success"  value="Store"/>
                    </fieldset>
                </form>
            </div>
        )
    }
}
export default StoreLoan;