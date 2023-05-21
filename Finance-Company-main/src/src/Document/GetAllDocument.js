import React from 'react';
import axios from 'axios';

class GetAllDocument extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            document:[],
            flag:false
         }
    }

    getLoan=(event)=>{
        axios.get("http://localhost:8080/getAllDocument").then(
            result=>{
                console.log(result.data);
                this.setState(
                   { document:result.data}
                )
            }
        ).then(
            error=> console.log(error)
        )
    }
    render() { 
        
            let allDocument=this.state.document.map(d=><tr>
            <td>{d.did}</td>
            <td>{d.asid}</td>
            <td>{d.image}</td>
        </tr>)
        return(
            <div>
                <input type="button" onClick={this.getLoan} value="Click Here"/>
                <table border="1">
                    <thead>
                        <th>Document ID</th>
                        <th>Application ID</th>
                        <th>Image</th>
                    </thead>
                    <tbody>
                        {allDocument}
                    </tbody>
                </table>
                
            </div>
         );
    }
}
 
export default GetAllDocument;