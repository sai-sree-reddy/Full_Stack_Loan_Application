package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Customer;
import com.bean.LoanApplication;
import com.dao.CustomerDao;

@Service
public class CustomerService {
	@Autowired
	CustomerDao customerDao;
	
	public String storeCustomerInfo(Customer customer) {
		if(customerDao.storeCustomerInfo(customer)>0)
			return"Record Inserted Sucessfully";
		else
			return "Record Didn't Inserted";
	}
	
	public List<LoanApplication> getAllApplication(int cid){
		return customerDao.getCustomerById(cid).getListOfloanAppliction();
	}
	
	public List<Customer> getAllCustomer(){
		return customerDao.getAllCustomer();
	}
	
	public String updateCustomerPassword(Customer customer) {
		if(customerDao.hasCustomer(customer.getCid())) {
			if(customerDao.updateCustomerPasssword(customer))
				return"Password updates successfully";
			return "Password not updated";
		}
		return "Customer Record not Present";
	}
	
	public String getOldPassword(int customer) {
		if(customerDao.hasCustomer(customer))
			return customerDao.getOldPassword(customer);
		return "Customer record not Present";
	}
	
	public String hasCustomer(int cid) {
		if(customerDao.hasCustomer(cid))
			return "Customer Record Present";
		return "Customer Records not Present";
	}
	
	public String deleteCusotmer(int id) {
		if(customerDao.hasCustomer(id)) {
			if(customerDao.deleteCustomer(id))
				return "Customer Record Deleted Successfully";
			return "Customer Record not Deleted";
		}
		return "Customer record not Present";
	}
	
	public Customer getCustomerById(int cid) {
		return customerDao.getCustomerById(cid);
	}
	public String updateCustomerContactnum(Customer customer) {
		// TODO Auto-generated method stub
		if(!customerDao.hasCustomer(customer.getCid())) 
			return "Customer Records not Present";
		if(customerDao.updateCustomerContactnum(customer))
			return"Contact Info updated successfully";
		return "Contact Info not updated";
	}
	
	public List<Object> getMaxCid(){
		return customerDao.getMaxCid();
	}
}
