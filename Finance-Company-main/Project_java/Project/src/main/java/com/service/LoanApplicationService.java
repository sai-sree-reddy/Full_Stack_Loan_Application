package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Customer;
import com.bean.LoanApplication;
import com.dao.CustomerDao;
import com.dao.LoanApplicationDao;
import com.dao.LoanDao;

@Service
public class LoanApplicationService {

	@Autowired
	LoanApplicationDao loanapplicationDao;
	
	@Autowired
	CustomerDao customerDao;
	
	@Autowired
	LoanDao loanDao;
	public String storeApplicationRecord(LoanApplication loanapplication) {
		String result="";
		int flag=0;
		if(!customerDao.hasCustomer(loanapplication.getCsid()) ) {
			flag++;
			result=result+"Customer ";
		}
		if(!loanDao.hasLoan(loanapplication.getLsid())) {
			flag++;
			result=result+"Loan ";
		}
		if(flag>0)
			return result=result+"Record not present";
			
		if(loanapplicationDao.storeApplicationInfo(loanapplication)>0) {
			return "Record stored successfully";
		}else {
			return "Record didn't store ";
		}
	}
	
	public List<LoanApplication> getAllApplicationsInfo() {
		return loanapplicationDao.getAllApplications();
	}
	public String updateApplicationAmount(LoanApplication loanapplication) {
		if(loanapplicationDao.updateApplicationAmount(loanapplication)) {
			return "Application  updated successfully";
		}else {
			return "Application is  not present";
		}
	}
	public String updateApplicationStatus(int aid,String status) {
		if(loanapplicationDao.updateApplicationStatus(aid,status)) {
			return "Application Status updated successfully";
		}else {
			return "Application is  not present";
		}
	}
	public List<LoanApplication> getAllPending(){
		return loanapplicationDao.getAllPending();
	}
	public List<LoanApplication> getAllUnapproved(){
		return loanapplicationDao.getAllUnapproved();
	}
	
	public List<LoanApplication> getAllApproved(){
		return loanapplicationDao.getAllApproved();
	}
	
	public String deleteApplicationInfo(int aid) {
		if(loanapplicationDao.deleteApplication(aid)) {
			return "Application deleted successfully";
		}else {
			return "Application  not present";
		}
	}
	public List<LoanApplication> getAllByDescAmount(){
		return loanapplicationDao.getAllByDescAmount();
	}
	
	public LoanApplication  findApplicationInfo(int aid) {
		return loanapplicationDao.findApplication(aid);
	}
	
	public List<LoanApplication> getApplicationByLoan(String ltype){
		return loanapplicationDao.getApplicationByLoan(ltype);
	}
	
	public String hasApplication(int aid) {
		if(loanapplicationDao.hasApplication(aid))
			return "Application records Present";
		return "Application Records not Present";
	}
	
	public String updateAppliedBy(LoanApplication application) {
		if(!loanapplicationDao.hasApplication(application.getAid()))
			return "Application Records not Present";
		if(loanapplicationDao.updateAppliedBy(application))
			return "Applied Updated Successfully";
		return "Applied not Updated Successfully";
	}
	
	public String updateApprovedBy(LoanApplication application) {
		if(!loanapplicationDao.hasApplication(application.getAid()))
			return "Application Records not Present";
		if(loanapplicationDao.updateApprovedBy(application))
			return "Approved Updated Successfully";
		return "Approved not Updated Successfully";
	}
	public List<Object> getMaxAid(){
		return loanapplicationDao.getMaxAid();
	}
	
}
