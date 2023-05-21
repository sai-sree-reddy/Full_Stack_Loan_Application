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

import com.bean.Clerk;
import com.service.ClerkService;
@CrossOrigin
@RestController
public class ClerkController {
	
	@Autowired
	ClerkService clerkService;
//	http://localhost:8080/storeClerkInfo
	@RequestMapping(value = "storeClerkInfo",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public String storeClerkInfo(@RequestBody Clerk clerk){
		if(clerkService.storeClerkInfo(clerk))
			return "Clerk Details stored successfully";
		else
			return "Clerk Details not Inserted";
	}
	
//	http://localhost:8080/getAllClerk
	@RequestMapping(value = "getAllClerk",
			produces = MediaType.APPLICATION_JSON_VALUE,
			method = RequestMethod.GET)	
	public List<Clerk> getAll(){
		return clerkService.getAll();
	}
	
//	http://localhost:8080/updateClerkPassword
	@RequestMapping(value = "updateClerkPassword",
			method = RequestMethod.PUT,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateClerkPassword(@RequestBody Clerk clerk) {
		if(clerkService.updateClerkPassword(clerk))
			return "Password updated Successfully";
		else
			return "Password not updated";
	}
	
//	http://localhost:8080/getClerkOldPassword/{cusername}
	@RequestMapping(value = "getClerkOldPassword/{cusername}",
			method=RequestMethod.GET)
	public String getClerkOldPassword(@PathVariable("cusername") String cusername) {
		return clerkService.getClerkOldPassword(cusername);
	}
	
//	http://localhost:8080/deleteClerk/{cusername}
	@RequestMapping(value = "deleteClerkInfo/{cusername}",
			method=RequestMethod.DELETE)
	public String deleteClerk(@PathVariable("cusername") String cusername) {
		if(clerkService.deleteClerk(cusername))
			return "Clerk Record Deleted Successfully";
		return "Clerk Record Not Deleted";
	}
}
