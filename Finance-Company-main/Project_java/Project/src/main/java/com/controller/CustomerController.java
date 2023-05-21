package com.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;
import com.bean.Customer;
import com.bean.LoanApplication;
import com.service.CustomerService;
@CrossOrigin
@RestController
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
//	http://localhost:8080/storeCustomerInfo
	@RequestMapping(value = "storeCustomerInfo",
			consumes = MediaType.APPLICATION_JSON_VALUE,
			
			method = RequestMethod.POST
			)
	public String storeCustomerInfo(@RequestBody Customer customer) {
		return customerService.storeCustomerInfo(customer);
	}
	
//	http://localhost:8080/getAllCustomer
	@RequestMapping(value = "getAllCustomer",
			produces = MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.GET)
	public List<Customer> getAllCustomer(){
		return customerService.getAllCustomer();
	}
	
//	http://localhost:8080/updateCusotmerPassword
	@RequestMapping(value = "updateCustomerPassword",
			consumes = MediaType.APPLICATION_JSON_VALUE,
			method = RequestMethod.PUT)
	public String updatCustomerPassword(@RequestBody Customer customer) {
		return customerService.updateCustomerPassword(customer);
	}
	
//	http://localhost:8080/getOldPassword/{cid}
	@RequestMapping(value = "getOldPassword/{cid}",
			method=RequestMethod.GET
			)
	public String getOldPassword(@PathVariable("cid") int customer) {
		return customerService.getOldPassword(customer);
	}
	
//	http://localhost:8080/hasCustomer/{cid}
	@RequestMapping(value = "hasCustomer/{cid}",
			method = RequestMethod.GET)
	public String hasCustomer(@PathVariable("cid") int cid) {
		return customerService.hasCustomer(cid);
	}
	
//	http://localhost:8080/deleteCustomerInfo/{cid}
	@RequestMapping(value = "deleteCustomerInfo/{cid}",
			method = RequestMethod.DELETE)
	public String deleteCustomerInfo(@PathVariable("cid") int cid) {
		return customerService.deleteCusotmer(cid);
	}
	
	@RequestMapping(value = "getCustomerById/{cid}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public Customer getCustomerById(@PathVariable("cid") int cid) {
		return customerService.getCustomerById(cid);
	}
	//http://localhost:8080/updateCusotmerContactnum
	@RequestMapping(value = "updateCustomerContactnum",
	consumes = MediaType.APPLICATION_JSON_VALUE,
	method = RequestMethod.PUT)
	public String updatCustomerContactnum(@RequestBody Customer customer) {
		return customerService.updateCustomerContactnum(customer);
	}
	
	//http://localhost:8080/getListOfApplication/{cid}
	@RequestMapping(value = "getListOfApplication/{cid}",
			produces =  MediaType.APPLICATION_JSON_VALUE,
			method = RequestMethod.GET)
	public List<LoanApplication> updatCustomerContactnum(@PathVariable("cid") int cid) {
		return customerService.getAllApplication(cid);
	}
	
	@RequestMapping(value = "getMaxCid",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Object> getMaxCid(){
		return customerService.getMaxCid();
	}

}
