import React, { Component, useState } from 'react';
import{Route,Link} from 'react-router-dom';
import UpdateClerkPassword from './UpdateClerkPassword';
import DeleteClerk from './DeleteClerk';
import GetAllClerk from './GetAllClerk';
import Logout from '../Manager/Logout';
import GetAllCustomer from '../Customer/GetAllCustomer';
import GetAllApplicationById from '../LoanApplication/GetAllApplicationById';
import GetAllLoan from '../Loan/GetAllLoan';
import StoreLoanApplicationByClerk from '../LoanApplication/StoreLoanApplicationByClerk';
import StoreCustomerInfo from '../Customer/StoreCustomerInfo';
import GetAllLoanApplication from '../LoanApplication/GetAllLoanApplication';
import GetPending from '../LoanApplication/GetPending';
import GetApproved from '../LoanApplication/GetApproved';
import GetNotApproved from '../LoanApplication/GetNotApproved';
import GetAllApplicationByIdClerk from '../LoanApplication/GetAllApplicationByIdClerk';
import GetAllLoanClerk from '../Loan/GetAllLoanClerk';
import ApplyLoanByIdClerk from '../Loan/ApplyLoanByIdClerk';
import GetLoanByIdCustomer from '../Loan/GetLoanByIdCustomer';
import { ButtonDropdown,  toggle } from 'reactstrap';
// import { ButtonDropdown } from 'reactstrap';
// import Select from 'react-select/dist/declarations/src/Select';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Navbar } from 'reactstrap';
// import { SelectContainer } from 'react-select/dist/declarations/src/components/containers';

class ClerkDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {   }
    }
    clerkLogout=()=>{
        this.props.loggingOut();
    }
    
    render() { 
       
        return ( 
            
            <div className="container-fluid text-center">
                {/* <Logout logout={this.clerkLogout}/> */}
                <h2>Clerk Dashboard</h2>
                {/* <Navbar className="list-unstyled"> */}
                <Navbar>
                    {/* <select>
                      <option>
                     <Link className="btn btn-primary" to="/allUnapprovedApplication">Unapproved LoanApplication</Link>
                          </option> 

                         </select> */}
                         {/* <DropdownItem as={Link} to="/me">text here</DropdownItem> */}
                         {/* <ButtonDropdown > */}
  {/* <DropdownToggle caret>Actions</DropdownToggle> */}
  {/* <DropdownMenu>
    <DropdownItem tag={Link} to={`/action`}>itne1</DropdownItem>
    <DropdownItem tag={Link} to={`/action`}>item2</DropdownItem>
    <DropdownItem tag={Link} to={`/action`}>Action</DropdownItem>
    <DropdownItem tag={Link} to={`/action`}>Action</DropdownItem>
  </DropdownMenu> */}
 
{/* </ButtonDropdown> */}
{/* <ButtonDropdown>
<DropdownToggle caret>Actions</DropdownToggle>
<DropdownMenu className="dropdown__menu">
     <Link to={`somewhere`}><DropdownItem>Edit</DropdownItem></Link>
     <Link to={`somewhere`}><DropdownItem>Edit</DropdownItem></Link>
     <Link to={`somewhere`}><DropdownItem>Edit</DropdownItem></Link>
  </DropdownMenu>
</ButtonDropdown> */}

        <Link className="btn btn-primary" to="/update">Update Password </Link>
        {/* <Link className="btn btn-primary" to="/delete">Delete  </Link> */}
        
        {/* <Link to="/getAll">Get All  </Link>&ensp; */}
        <Link className="btn btn-primary" to="/getCustomer">Get Customer  </Link>
        <Link className="btn btn-primary" to="/allLoan">Loan Details</Link>
        <Link className="btn btn-primary" to="/newLoan">New Loan Application</Link>
        <Link className="btn btn-primary" to="/newCustomer">New Customer</Link>
        </Navbar><Navbar>
        <Link className="btn btn-primary" to="/allApplication">Get All LoanApplication</Link>
        <Link className="btn btn-primary" to="/allPendingApplication">Pending LoanApplication</Link>
        <Link className="btn btn-primary" to="/allApprovedApplication">Approved LoanApplication</Link>
        <Link className="btn btn-primary" to="/allUnapprovedApplication">Unapproved LoanApplication</Link>
        <Logout logout={this.clerkLogout}/>
        </Navbar>

        <hr/>
        <Route path="/update" component={UpdateClerkPassword}></Route>
        <Route path="/delete" component={DeleteClerk}></Route>
        {/* <Route path="/getAll" component={GetAllClerk}></Route> */}
        <Route path="/getCustomer" component={GetAllCustomer}></Route>
        <Route path="/newLoan" component={StoreLoanApplicationByClerk}></Route>
        <Route path="/getApplication/:customerId" component={GetAllApplicationByIdClerk}></Route>
        {/* <Route path="/getApplication" component={GetAllApplicationById}></Route> */}
        <Route path="/allLoan" component={GetAllLoanClerk}></Route>
        <Route path="/newCustomer" component={StoreCustomerInfo}></Route>
        <Route path="/allApplication" component={GetAllLoanApplication}></Route>
        <Route path="/allPendingApplication" component={GetPending}></Route>
        <Route path="/allApprovedApplication" component={GetApproved}></Route>
        <Route path="/allUnapprovedApplication" component={GetNotApproved}></Route>
        <Route path="/applyLoan/:loanId" component={ApplyLoanByIdClerk}></Route>
        <Route path="/getLoanById/:loanId" component={GetLoanByIdCustomer}></Route>
        </div>
         );
    }
}
 
export default ClerkDashboard;