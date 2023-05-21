import React from "react";
import ClerkLogin from "./ClerkLogin";
import CustomerLogin from "./CustomerLogin";
import ManagerLogin from "./ManagerLogin";

class MainLogin extends React.Component{
   
    render(){

        return(
            <div>
                Main Login Page
                
                <CustomerLogin></CustomerLogin>
                <ClerkLogin></ClerkLogin>
                <ManagerLogin></ManagerLogin>
            </div>
        )
    }
}
export default MainLogin;