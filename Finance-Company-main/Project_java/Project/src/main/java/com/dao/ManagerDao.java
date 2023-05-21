package com.dao;
import com.bean.*;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ManagerDao {

	@Autowired
	EntityManagerFactory emf;
	
	public boolean storeManagerInfo(Manager manager ) {
		try {
			EntityManager manage=emf.createEntityManager();
			EntityTransaction tran=manage.getTransaction();
			tran.begin();
			manage.persist(manager);
			tran.commit();
//			return true;
		} catch (Exception e) {
			System.out.println(e);
			return false;// TODO: handle exception
		}
		return true;
	}
	

	public List<Manager> getAll(){
		try {
			EntityManager manager= emf.createEntityManager();
			Query qry = manager.createQuery("select m from Manager m");
			List<Manager> listOfManager=qry.getResultList();
			return listOfManager;
		} catch (Exception e) {
			System.out.println(e);
			return null;// TODO: handle exception
		}
	}
	
	public boolean updateManagerPassword(Manager manager) {
		try {
			EntityManager manage= emf.createEntityManager();
			Manager clk=manage.find(Manager.class, manager.getMusername());
			
			clk.setMpassword(manager.getMpassword());
			EntityTransaction tran=manage.getTransaction();
			
			tran.begin();
			manage.merge(clk);
			tran.commit();
			return true;
		} catch (Exception e) {
			System.out.println(e);
			return false;// TODO: handle exception
		}
	}
	
	public String getManagerOldPassword(String musername) {
		try {
			EntityManager manage=emf.createEntityManager();
			
			Manager manager=manage.find(Manager.class,musername);
			return manager.getMpassword();
		} catch (Exception e) {
			System.out.println(e);
			return"Cannot Retreive Password";
			// TODO: handle exception
		}
	}
	
	public boolean deleteManager(String musername) {
		try {
			EntityManager manage= emf.createEntityManager();
			Manager manager=manage.find(Manager.class,musername);
			
			EntityTransaction tran=manage.getTransaction();
			tran.begin();
			manage.remove(manager);
			tran.commit();
			return true;
		} catch (Exception e) {
			System.out.println(e);
			return false;
			// TODO: handle exception
		}
	}
	
	public boolean hasManager(String musername) {
		try {
			EntityManager manager=emf.createEntityManager();
			Manager m=manager.find(Manager.class,musername);
			if(m==null)
				return false;
			return true;
		} catch (Exception e) {
			System.out.println(e);
			return false;
			// TODO: handle exception
		}
	}
}
