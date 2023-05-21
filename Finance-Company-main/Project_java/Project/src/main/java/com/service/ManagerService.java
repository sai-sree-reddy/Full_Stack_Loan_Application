package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Clerk;
import com.bean.Manager;
import com.dao.ManagerDao;

@Service
public class ManagerService {

	@Autowired
	ManagerDao managerDao;
	
	public boolean storeManagerInfo(Manager manager) {
		return managerDao.storeManagerInfo(manager);
	}

	public List<Manager> getAll(){
		return managerDao.getAll();
	}
	
	public String updateManagerPassword(Manager manager) {
		if(!managerDao.hasManager(manager.getMusername()))
			return "Manager Records not Present";
		if(managerDao.updateManagerPassword(manager))
			return "Password updated Successfully";
		else
			return "Password not updated";
		
	}
	
	public String getManagerOldPassword(String musername) {
		if(!managerDao.hasManager(musername))
			return "Manager Records not Present";
		return managerDao.getManagerOldPassword(musername);
	}
	
	public String deleteManager(String musername) {
		if(!managerDao.hasManager(musername))
			return "Manager Records not Present";
		if(managerDao.deleteManager(musername))
			return "Manager Record Deleted Successfully";
		return "Manager Record Not Deleted";
	}
	
	public String hasManager(String musername) {
		if(!managerDao.hasManager(musername))
			return "Manager Records not Present";
		return "Manager Records Present";
	}

}
