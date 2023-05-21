package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Clerk;
import com.dao.ClerkDao;

@Service
public class ClerkService {

	@Autowired
	ClerkDao clerkDao;
	
	public boolean storeClerkInfo(Clerk clerk) {
		return clerkDao.storeclerkInfo(clerk);
	}
	
	public List<Clerk> getAll(){
		return clerkDao.getAll();
	}
	
	public boolean updateClerkPassword(Clerk clerk) {
		return clerkDao.updateClerkPassword(clerk);
	}
	
	public String getClerkOldPassword(String cusername) {
		return clerkDao.getClerkOldPassword(cusername);
	}
	
	public boolean deleteClerk(String cusername) {
		return clerkDao.deleteClerk(cusername);
	}
}
