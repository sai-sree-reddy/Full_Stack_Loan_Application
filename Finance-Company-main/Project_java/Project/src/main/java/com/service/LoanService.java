package com.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Loan;
import com.dao.LoanDao;


@Service
public class LoanService {
	@Autowired
	LoanDao loanDao;
	
	public String storeLoanRecord(Loan  loan) {
		if(loanDao.storeLoanInfo(loan)>0) {
			return "Record stored successfully";
		}else {
			return "Record didn't store ";
		}
	}
	
	public List<Loan> getAllLoansInfo() {
		return loanDao.getAllLoans();
	}
	
	public String updateLoanInterest(Loan loan) {
		if(loanDao.hasLoan(loan.getLid())) {	
			if(loanDao.updateLoanInterest(loan)) 
				return "Loan record updated successfully";
			return "Loan record not updated";
		}
		return "Loan record not present";
	}
	
	public String deleteLoanInfo(int lid) {
		if(loanDao.hasLoan(lid)) {
			if(loanDao.deleteLoan(lid)) 
				return "Loan record deleted successfully";
			return "Loan record not deleted";
		}	
		return "Loan record not present";
	}
	
	public Loan findLoanInfo(int lid) {
		return loanDao.findLoan(lid);
	}
	
	public String hasLoan(int lid) {
		if(loanDao.hasLoan(lid))
			return "Loan records Present";
		return "Loan Records not Present";
	}
	public List<Object> getMax(){
		return loanDao.getMaxLid();
	}
	
}

