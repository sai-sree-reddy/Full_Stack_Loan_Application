package com.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Loan;
import com.service.LoanService;

@CrossOrigin
@RestController
public class LoanController {
	  
	@Autowired
	LoanService loanService;
	 // http://localhost:9090/storeLoanInfo
	@RequestMapping(value = "storeLoanInfo",
			consumes = MediaType.APPLICATION_JSON_VALUE,
			method = RequestMethod.POST)
	public String storeLoanDetails(@RequestBody Loan loan) {
		return loanService.storeLoanRecord(loan);
	}
	
	// http://localhost:9090/allLoans 
	
	@RequestMapping(value = "getAllLoan",
			produces = MediaType.APPLICATION_JSON_VALUE,
			method = RequestMethod.GET)
	public List<Loan> getAllLoans() {
		return loanService.getAllLoansInfo();
	}
	
	// http://localhost:9090/updateLoan 
	@RequestMapping(value = "updateLoanInterest",
			method = RequestMethod.PUT,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateLoan(@RequestBody Loan loan) {
		return loanService.updateLoanInterest(loan);
	}
	
	// http://localhost:9090/deleteLoanById/1
			@RequestMapping(value = "deleteLoanById/{lid}",method = RequestMethod.DELETE)
	public String deleteLoanInfo(@PathVariable("lid") int lid) {
		return loanService.deleteLoanInfo(lid);
	}
		

	// http://localhost:9090/LoanById/2
	
	@RequestMapping(value = "findLoanById/{lid}",method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
		public Loan findLoanInfo(@PathVariable("lid") int lid) {
			return loanService.findLoanInfo(lid);
	}


//				http://localhost:8080/hasLaon/{lid}
	@RequestMapping(value = "hasLoan/{lid}",
			method = RequestMethod.GET)
	public String hasCustomer(@PathVariable("lid") int lid) {
			return loanService.hasLoan(lid);
	}
	
	@RequestMapping(value = "getMaxLoanId",
			produces = MediaType.APPLICATION_JSON_VALUE,
			method = RequestMethod.GET)
	public List<Object> getMax(){
		return loanService.getMax();
	}

}

