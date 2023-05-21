import React, { Component } from 'react';
class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    clickLogout=(event)=>{
        event.preventDefault();
        this.props.logout();
    }

    render() { 
        return ( 
            <div>
                <input type="button" className="btn-danger"value="Logout" onClick={this.clickLogout} />
            </div>
         );
    }
}
 
export default Logout;