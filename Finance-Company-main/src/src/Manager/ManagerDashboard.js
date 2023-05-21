import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UpdateManagerPassword from './UpdateManagerPassword';
import DeleteManager from './DeleteManager';
import GetAllManager from'./GetAllManager';
import {Route} from 'react-router-dom';
import Logout from './Logout';
import GetAllClerk from '../Clerk/GetAllClerk';
import DeleteClerk from '../Clerk/DeleteClerk';
import GetAllLoanApplication from '../LoanApplication/GetAllLoanApplication';
import GetPending from '../LoanApplication/GetPending';
import GetApproved from '../LoanApplication/GetApproved';
import GetNotApproved from '../LoanApplication/GetNotApproved';
import GetAllCustomer from '../Customer/GetAllCustomer';
import GetAllLoan from '../Loan/GetAllLoan';
import UpdateLoanInterest from '../Loan/UpdateLoanInterest';
import GetAllApplicationById from '../LoanApplication/GetAllApplicationById';
import StoreClerk from '../Clerk/StoreClerk';
import GetAllCustomerManager from '../Customer/GetAllCustomerManager';
import GetAllApplicationByIdManager from '../LoanApplication/GetAllApplicationByIdManager';
import GetLoanByIdManager from '../Loan/GetLoanByIdManager';
import GetAllLoanManager from '../Loan/GetAllLoanManager';
import UpdateLoanByIdManager from '../Loan/UpdateLoanByIdManager';
import UpdateApplicationStatus from '../LoanApplication/UpdateApplicationStatus';
import GetApprovedManager from '../LoanApplication/GetApprovedManager';
import UpdateApplicationStatusByIdManager from '../LoanApplication/UpdateApplicationStatusByIdManager';
import GetNotApprovedManager from '../LoanApplication/getNotApprovedManager';
import GetPendingManager from '../LoanApplication/GetPendngManager';
import GetAllLoanApplicationManager from '../LoanApplication/GetAllLoanApplicationManager';
import DeleteClerkByIdManager from '../Clerk/DeleteClerkByIdManager';
import { Navbar } from 'reactstrap';
import DeleteManagerById from './DeleteManagerById';
import StoreManager from './StoreManager';
class ManagerDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    managerLogout=()=>{
        this.props.loggingOut();
    }
    render() { 
        return ( 
            <div className="container-fluid text-center">
                {/* <Logout logout={this.managerLogout}/> */}
                <h2>Manager Dashboard</h2>
                <Navbar>
        <Link className="btn btn-primary" to="/update">Update Password</Link>
        <Link className="btn btn-primary" to="/addClerk">Add Clerk</Link>
        <Link className="btn btn-primary" to="/delete">Delete Clerk</Link>
        <Link className="btn btn-primary" to="/getAll">Clerk Details</Link>
        <Link className="btn btn-primary" to="/allApplication">Get All LoanApplication</Link>
        <Link className="btn btn-primary" to="/allPendingApplication">Pending LoanApplication</Link>
        </Navbar><Navbar>
        
        <Link className="btn btn-primary" to="/allApprovedApplication">Approved LoanApplication</Link>
        <Link className="btn btn-primary" to="/allUnapprovedApplication">Unapproved LoanApplication</Link>
        <Link className="btn btn-primary" to="/allCustomer">Customer Details</Link>
        <Link className="btn btn-primary" to="/allLoan">Loan Details</Link>
        <Link className="btn btn-primary" to="/updateLoan">Update Loan</Link>
        <Link className="btn btn-primary" to="/updateApplicationStatus">Update Application Status</Link>
        <Link className="btn btn-primary" to="/newManager">Add Manager</Link>
        <Link className="btn btn-primary" to="/deleteManager">Delete Manager</Link>
        <Link className="btn btn-primary" to="/getAllManager">All Manager</Link>
        <Logout logout={this.managerLogout}/>
        </Navbar>
        
        <hr/>
        <Route path="/update" component={UpdateManagerPassword}></Route>
        <Route path="/delete" component={DeleteClerk}></Route>
        <Route path="/getAll" component={GetAllClerk}></Route>
        <Route path="/allApplication" component={GetAllLoanApplicationManager}></Route>
        <Route path="/allPendingApplication" component={GetPendingManager}></Route>
        <Route path="/allApprovedApplication" component={GetApprovedManager}></Route>
        <Route path="/allUnapprovedApplication" component={GetNotApprovedManager}></Route>
        <Route path="/allCustomer" component={GetAllCustomerManager}></Route>
        <Route path="/allLoan" component={GetAllLoanManager}></Route>
        <Route path="/getApplication/:customerId" component={GetAllApplicationByIdManager}></Route>
        <Route path="/updateLoan" component={UpdateLoanInterest}></Route>
        <Route path="/addClerk" component={StoreClerk}></Route>
        <Route path="/getLoanById/:loanId" component={GetLoanByIdManager}></Route>
        <Route path="/updateLoanById/:loanId" component={UpdateLoanByIdManager}></Route>
        <Route path="/updateApplicationStatus" component={UpdateApplicationStatus}></Route>
        <Route path="/updateStatusById/:aid" component={UpdateApplicationStatusByIdManager}></Route>
        <Route path="/deleteClerkById/:cusername" component={DeleteClerkByIdManager}></Route>
        <Route path="/getAllManager" component={GetAllManager}></Route>
        <Route path="/newManager" component={StoreManager}></Route>
        <Route path="/deleteManager" component={DeleteManager}></Route>
        <Route path="/deleteManagerById/:musername" component={DeleteManagerById}></Route>
            </div>
         );
    }
}
 
export default ManagerDashboard;