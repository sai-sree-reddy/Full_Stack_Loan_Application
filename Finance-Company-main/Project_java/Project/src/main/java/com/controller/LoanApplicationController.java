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

import com.bean.LoanApplication;


import com.service.LoanApplicationService;

@CrossOrigin
@RestController
public class LoanApplicationController {
	@Autowired
	LoanApplicationService loanApplicationService;
	 // http://localhost:9090/storeApplicationInfo
	@RequestMapping(value = "storeApplicationInfo",
			consumes = MediaType.APPLICATION_JSON_VALUE,
			method = RequestMethod.POST)
	public String storeApplicationDetails(@RequestBody LoanApplication  loanapplication) {
		return loanApplicationService.storeApplicationRecord(loanapplication);
	}
	
	// http://localhost:9090/allApplications 
	
	@RequestMapping(value = "allApplications",
				produces = MediaType.APPLICATION_JSON_VALUE,
				method = RequestMethod.GET)
		public List<LoanApplication> getAllApplications() {
			return loanApplicationService.getAllApplicationsInfo();
		}
   
		// http://localhost:9090/updateApplicationAmount 
	@RequestMapping(value = "updateApplicationAmount",
			method = RequestMethod.PUT,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateApplicationAmount(@RequestBody LoanApplication loanapplication) {
		return loanApplicationService.updateApplicationAmount(loanapplication);
	}
	
	// http://localhost:9090/updateApplicationAmount/{aid}/{status}
	@RequestMapping(value = "updateApplicationStatus/{aid}/{status}",
			method = RequestMethod.GET)
	public String updateApplicationAmount(@PathVariable("aid") int aid,
					@PathVariable("status") String status) {
		return loanApplicationService.updateApplicationStatus( aid, status);
	}
	
	// http://localhost:9090/deleteApplicationById/1
	@RequestMapping(value = "deleteApplicationById/{aid}",
			method = RequestMethod.DELETE)
	public String deleteApplicationInfo(@PathVariable("aid") int aid) {
		return loanApplicationService.deleteApplicationInfo(aid);
	}
		// http://localhost:9090/findApplicationById/2
		
	@RequestMapping(value = "findApplicationById/{aid}",
			produces = MediaType.APPLICATION_JSON_VALUE,
			method = RequestMethod.GET)
	public LoanApplication findApplicationInfo(@PathVariable("aid") int aid) {
		return loanApplicationService.findApplicationInfo(aid);
	}
	
	@RequestMapping(value = "getAllUnapproved",
			produces = MediaType.APPLICATION_JSON_VALUE,
			method = RequestMethod.GET)
	public List<LoanApplication> getAllUnapproved(){
		return loanApplicationService.getAllUnapproved();
	}
	
	@RequestMapping(value = "getAllByDescAmount",
			produces = MediaType.APPLICATION_JSON_VALUE,
			method = RequestMethod.GET)
	public List<LoanApplication> getAllByDescAmount(){
		return loanApplicationService.getAllByDescAmount();
	}
	
	@RequestMapping(value = "getAllPending",
			produces = MediaType.APPLICATION_JSON_VALUE,
			method = RequestMethod.GET)
	public List<LoanApplication> getAllPending(){
		return loanApplicationService.getAllPending();
	}
	
	@RequestMapping(value = "getAllApproved",
			produces = MediaType.APPLICATION_JSON_VALUE,
			method = RequestMethod.GET)
	public List<LoanApplication> getAllApproved(){
		return loanApplicationService.getAllApproved();
	}
	
	@RequestMapping(value = "getApplicationByLoan/{ltype}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public List<LoanApplication> getApplicationByLoan(@PathVariable("ltype")String ltype){
		return loanApplicationService.getApplicationByLoan(ltype);
	}
	
	@RequestMapping(value = "updateAppliedBy",
			consumes = MediaType.APPLICATION_JSON_VALUE,
			method = RequestMethod.PUT)
	public String updateAppliedBy(@RequestBody LoanApplication application) {
		return loanApplicationService.updateAppliedBy(application);
	}
	
	@RequestMapping(value = "updateApprovedBy",
			consumes = MediaType.APPLICATION_JSON_VALUE,
			method = RequestMethod.PUT)
	public String updateApprovedBy(@RequestBody LoanApplication application) {
		return loanApplicationService.updateApprovedBy(application);
	}
	
	@RequestMapping(value ="getMaxAid",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Object> getMaxAid(){
		return loanApplicationService.getMaxAid();
	}
	
}
