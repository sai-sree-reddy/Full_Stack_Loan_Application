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

import com.bean.Manager;
import com.service.ManagerService;
@CrossOrigin
@RestController
public class ManagerController {
	
	@Autowired
	ManagerService managerService;
//	http://localhost:8080/storeManagerInfo
	@RequestMapping(value = "storeManagerInfo",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public String storeManagerInfo(@RequestBody Manager manager){
		if(managerService.storeManagerInfo(manager))
			return "Manager Details stored successfully";
		else
			return "Manager Details not Inserted";
	}
	
//	http://localhost:8080/getAllManager
	@RequestMapping(value = "getAllManager",
			produces = MediaType.APPLICATION_JSON_VALUE,
			method = RequestMethod.GET)	
	public List<Manager> getAll(){
		return managerService.getAll();
	}
	
//	http://localhost:8080/updateManagerPassword
	@RequestMapping(value = "updateManagerPassword",
			method = RequestMethod.PUT,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateManagerPassword(@RequestBody Manager manager) {
		return (managerService.updateManagerPassword(manager));
			
	}
	
//	http://localhost:8080/getManagerOldPassword/{musername}
	@RequestMapping(value = "getManagerOldPassword/{musername}",
			method=RequestMethod.GET)
	public String getManagerOldPassword(@PathVariable("musername") String musername) {
		return managerService.getManagerOldPassword(musername);
	}
	
//	http://localhost:8080/deleteManager/{musername}
	@RequestMapping(value = "deleteManagerInfo/{musername}",
			method=RequestMethod.DELETE)
	public String deleteManager(@PathVariable("musername") String musername) {
		return managerService.deleteManager(musername);
	}
}
