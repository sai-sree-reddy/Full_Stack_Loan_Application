package com.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.Customer;


@Repository
public class CustomerDao {
	@Autowired
	EntityManagerFactory emf; //DataSource
	
	
	public int storeCustomerInfo(Customer customer) {
		try {
			EntityManager manager=emf.createEntityManager();
			EntityTransaction tran=manager.getTransaction();
			
			tran.begin();
			manager.persist(customer);
			tran.commit();
			return 1;
			
		} catch (Exception e) {
			System.out.println(e);
			return 0;// TODO: handle exception
		}
	}
	
	public List<Customer> getAllCustomer(){
		try {
			EntityManager manager=emf.createEntityManager();
			Query query=manager.createQuery("select c from Customer c");
			List<Customer> listOfCustomer=query.getResultList();
			return listOfCustomer;
		} catch (Exception e) {
			System.out.println(e);
			return null;
			// TODO: handle exception
		}
	}
	
	public boolean hasCustomer(int customer) {
		try {
			EntityManager manager= emf.createEntityManager();
			Customer cust= manager.find(Customer.class, customer);
			if(cust==null)
				return false;
			return true;
		} catch (Exception e) {
			System.out.println(e);
			return false;// TODO: handle exception
		}
	}
	
	public boolean updateCustomerPasssword(Customer customer) {
		try {
			EntityManager manager =emf.createEntityManager();
			Customer pp =manager.find(Customer.class,customer.getCid());
			EntityTransaction tran= manager.getTransaction();
			pp.setPassword(customer.getPassword());
			tran.begin();
			manager.merge(pp);
			tran.commit();
			return true;
		
		} catch (Exception e) {
			System.out.println(e);
			return false;// TODO: handle exception
		}
	}
	
	public String getOldPassword(int cid) {
		try {
			EntityManager manager=emf.createEntityManager();
			Customer cust=manager.find(Customer.class, cid);
//			if(cust==null)
//				return "No Record Present";
//			else
			return cust.getPassword();
			
		} catch (Exception e) {
			System.out.println(e);
			return "false";
			// TODO: handle exception
		}
	}
	
	public boolean deleteCustomer(int cid) {
		try {
			EntityManager manager=emf.createEntityManager();
			Customer cust=manager.find(Customer.class,cid);
			
			EntityTransaction trans=manager.getTransaction();
			
			trans.begin();
			manager.remove(cust);
			trans.commit();
			return true;
			
		} catch (Exception e) {
			System.out.println(e);
			return false;
			// TODO: handle exception
		}
	}
	public Customer getCustomerById(int cid) {
		try {
			EntityManager manager= emf.createEntityManager();
			Customer customer=manager.find(Customer.class,cid);
			if(customer== null)
				return null;
			return customer;
		} catch (Exception e) {
			System.out.println(e);
			return null;
			// TODO: handle exception
		}
	}
	public boolean updateCustomerContactnum(Customer customer) {
		// TODO Auto-generated method stub
		try {
		EntityManager manager =emf.createEntityManager();
		Customer pp =manager.find(Customer.class,customer.getCid());
		EntityTransaction tran= manager.getTransaction();
		pp.setContact(customer.getContact());
		tran.begin();
		manager.merge(pp);
		tran.commit();
		return true;

		} catch (Exception e) {
		System.out.println(e);
		return false;// TODO: handle exception
		}
	}
	public List<Object> getMaxCid(){
		try {
			EntityManager manager=emf.createEntityManager();
			Query qry=manager.createQuery("select max(c.cid) from Customer c");
			List<Object> list=qry.getResultList();
			return list;
		} catch (Exception e) {
			System.out.println(e);
			return null;
			// TODO: handle exception
		}
	}
	
}
