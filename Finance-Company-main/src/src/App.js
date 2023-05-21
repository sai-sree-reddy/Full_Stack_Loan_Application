
import './App.css';
import MainLogin from './Login/MainLogin';
import UpdateLoanInterest from './Loan/UpdateLoanInterest';
import {BrowserRouter as Router,HashRouter,Route,Switch} from "react-router-dom";
import StoreDocument from './Document/StoreDocument';
import GetLoanById from './Loan/GetLoanById';
import UpdateCustomerContacts from './Customer/UpdateCustomerContacts';
import GetAllApplicationById from './LoanApplication/GetAllApplicationById';
import Get from './Get';
import StoreCustomerInfo from './Customer/StoreCustomerInfo';
import GetAllCustomer from './Customer/GetAllCustomer';
import ClerkDashboard from './Clerk/ClerkDashboard';
import StoreLoan from './Loan/StoreLoan';
import StoreClerk from './Clerk/StoreClerk';
import DeleteClerk from './Clerk/DeleteClerk';
import StoreLoanApplicationByClerk from './LoanApplication/StoreLoanApplicationByClerk';
import StoreLoanApplicationByCustomer from './LoanApplication/StoreLoanApplicationByCustomer';
import UpdateApplicationStatus from './LoanApplication/UpdateApplicationStatus';
import GetPending from './LoanApplication/GetPending';
import GetApproved from './LoanApplication/GetApproved';
import GetNotApproved from './LoanApplication/GetNotApproved';
import CusotmerDashboard from './Customer/CustomerDashboard';
import ManagerDashboard from './Manager/ManagerDashboard';
import GetApplicationForCustLoanId from './LoanApplication/GetApplicationForCustLoanId';
import { Button, ButtonGroup } from 'reactstrap';
import UpdateClerkPassword from './Clerk/UpdateClerkPassword';
import UpdateApplicationStatusByIdManager from './LoanApplication/UpdateApplicationStatusByIdManager';
import GetAllClerk from './Clerk/GetAllClerk';
import GetAllCustomerManager from './Customer/GetAllCustomerManager';
import GetAllLoan from './Loan/GetAllLoan';
import GetAllLoanClerk from './Loan/GetAllLoanClerk';
import UpdateCustomerPassword from './Customer/UpdateCustomerPassword';
import StoreManager from './Manager/StoreManager';
import DeleteManager from './Manager/DeleteManager';



function App() {
  return (
    <div >
      <h1 className="container text-center p-3 mb-2 bg-info text-white" >Ganesh Finance Company Limited</h1>
      <Router>
        <Switch>
      
          <MainLogin/>
          {/* <UpdateCustomerContacts/> */}
          {/* <GetApplicationForCustLoanId/> */}
          {/* <GetAllClerk/> */}
          {/* <GetAllCustomerManager/> */}
          {/* <GetAllLoanClerk/> */}
          {/* <UpdateApplicationStatusByIdManager/> */}
          {/* <StoreCustomerInfo/> */}
          {/* <CusotmerDashboard/> */}
          {/* <ClerkDashboard/> */}
          {/* <ManagerDashboard/> */}
          {/* <StoreManager/> */}
          {/* <DeleteManager/> */}
         
          
          
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
