package com.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.Clerk;

@Repository
public class ClerkDao {
	@Autowired
	EntityManagerFactory emf;
	
	public boolean storeclerkInfo(Clerk clerk) {
		try {
			EntityManager manager=emf.createEntityManager();
			EntityTransaction tran=manager.getTransaction();
			tran.begin();
			manager.persist(clerk);
			tran.commit();
			return true;
		} catch (Exception e) {
			System.out.println(e);
			return false;
			// TODO: handle exception
		}
	}
	
	public List<Clerk> getAll(){
		try {
			EntityManager manager= emf.createEntityManager();
			Query qry = manager.createQuery("select c from Clerk c");
			List<Clerk> listOfClerk=qry.getResultList();
			return listOfClerk;
		} catch (Exception e) {
			System.out.println(e);
			return null;// TODO: handle exception
		}
	}
	
	public boolean updateClerkPassword(Clerk clerk) {
		try {
			EntityManager manager= emf.createEntityManager();
			Clerk clk=manager.find(Clerk.class, clerk.getCusername());
			if(clk==null)
				return false;
			clk.setCpassword(clerk.getCpassword());
			EntityTransaction tran=manager.getTransaction();
			
			tran.begin();
			manager.merge(clk);
			tran.commit();
			return true;
		} catch (Exception e) {
			System.out.println(e);
			return false;// TODO: handle exception
		}
	}
	
	public String getClerkOldPassword(String cusername) {
		try {
			EntityManager manager=emf.createEntityManager();
			
			Clerk clerk=manager.find(Clerk.class,cusername);
			return clerk.getCpassword();
		} catch (Exception e) {
			System.out.println(e);
			return"Cannot Retreive Password";
			// TODO: handle exception
		}
	}
	
	public boolean deleteClerk(String cusername) {
		try {
			EntityManager manager= emf.createEntityManager();
			Clerk clerk=manager.find(Clerk.class,cusername);
			
			EntityTransaction tran=manager.getTransaction();
			tran.begin();
			manager.remove(clerk);
			tran.commit();
			return true;
		} catch (Exception e) {
			System.out.println(e);
			return false;
			// TODO: handle exception
		}
	}
}
