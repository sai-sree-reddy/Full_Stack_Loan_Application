import React, { Component } from 'react';
import UpdateCustomerPassword from './UpdateCustomerPassword';
import {Route,Link} from 'react-router-dom';
import DeleteCustomer from './DeleteCusotmer';
import GetAllCustomer from './GetAllCustomer';
import GetAllLoan from '../Loan/GetAllLoan'
import Logout from '../Manager/Logout';
import UpdateCustomerContacts from './UpdateCustomerContacts';
import GetAllApplicationById from '../LoanApplication/GetAllApplicationById';
import StoreLoanApplicationByCustomer from '../LoanApplication/StoreLoanApplicationByCustomer';
import GetApplicationForCustomer from '../LoanApplication/GetApplicationForCustomer';
import GetAllLoanCustomer from '../Loan/GetAllLoanCustomer';
import ApplyLoanByIdCustomer from '../Loan/ApplyLoanByIdCustomer';
import GetLoanByIdCustomer from '../Loan/GetLoanByIdCustomer';
import GetApplicationForCustLoanId from '../LoanApplication/GetApplicationForCustLoanId';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Navbar } from 'reactstrap';

class CusotmerDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    customerLogout=()=>{
        this.props.loggingOut();
    }
    render() { 
        // const [dropdownOpen, setDropdownOpen] = useState(false);

        // const toggle = () => setDropdownOpen(!dropdownOpen);
        return ( 
            <div className="container text-center">
                 {/* <Logout logout={this.customerLogout}/> */}
        <h2>Customer Dashboard</h2>

        {/* <Nav tabs> */}
        <Navbar color="light secondary">
        
        <Link to="/updatePassword" className="btn btn-primary">Change Password</Link>
        
        <Link to="/changeContact" className="btn btn-primary">Change Contact</Link>
         
        <Link to="/allLoan" className="btn btn-primary">All Loan Types</Link> 
       
        <Link to="/newLoan" className="btn btn-primary">New Loan Application</Link>
        
        <Link to="/getAllApp" className="btn btn-primary">Get All Loan Application</Link> 
        
        <Logout logout={this.customerLogout}/></Navbar>
        {/* </Nav> */}
        
        <Route exact path="/updatePassword" component={UpdateCustomerPassword}></Route>
        <Route path="/changeContact" component={UpdateCustomerContacts}></Route>
        {/* <Route path="/getAll" component={GetApplicationForCustomer}></Route> */}
        <Route path="/getAllApp" component={GetApplicationForCustLoanId}></Route>
        <Route path="/newLoan" component={ApplyLoanByIdCustomer}></Route>
        <Route path="/allLoan" component={GetAllLoanCustomer}></Route>
        <Route path="/applyLoan/:loanId" component={StoreLoanApplicationByCustomer}></Route>
        <Route path="/showLoan/:loanId" component={GetLoanByIdCustomer}></Route>

        {/* <Route path="/home" component={Home}></Route> */}
      </div>
         );
    }
}
 
export default CusotmerDashboard;