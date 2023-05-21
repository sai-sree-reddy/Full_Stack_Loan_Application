import React from "react";
import axios from "axios";

class StoreDocument extends React.Component{
    constructor(props){
        super(props);
        this.state={
            did:0,
            image:"",
            asid:0

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
    setStateImage=(event)=>{
        this.setState({image:event.target.value})
    }
    storeDocument=(event)=>{
        event.preventDefault();
        let url="http://localhost:8080/storeDocument";
        let document=this.state;
        axios.post(url,document).then(
            result=>console.log(result)
        ).catch(
            error=>console.log(error)
        )
    }
    render(){

        return(
            <div>
                <form onSubmit={this.storeDocument}>
                    <fieldset>
                        <legend>Store Document</legend>
                        <input type="text" name="did" placeholder="Document ID" onChange={this.changeValue} />
                        <br/>
                        <input type="text" name="asid" placeholder="Application ID" onChange={this.changeValue}/>
                        <br/>
                        {/* <input type="file" name="image" placeholder="Document" onChange={this.changeValue}/> */}
                        <br/>
                        <input type='hidden' name="image" value=""/>
                        <br/>
                        <input name='userfile'type='file' onchange={this.setStateImage} /> {/*'document.uploadForm.image.value=this.value'/>*/}
                        <input type="submit" value="Store"/>
                    </fieldset>
                </form>
            </div>
        )
    }
}
export default StoreDocument;