package com.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.bean.Loan;
@Repository
public class LoanDao {
	@Autowired
	EntityManagerFactory emf;				// Datasource like Connection reference. 
	public int storeLoanInfo(Loan loan) {
		try {
			EntityManager manager = emf.createEntityManager();			//like PreparedStatement or Statement 
			EntityTransaction tran = manager.getTransaction();
			tran.begin();
			manager.persist(loan);                                                      // save the record 
			tran.commit();
		}catch(Exception e) {
			System.out.println(e);
			return 0;
	}
	return 1;
	}
	public List<Loan> getAllLoans() {
			EntityManager manager = emf.createEntityManager();
			Query qry	= manager.createQuery("select p from Loan p");
			List<Loan> listOfLoan = qry.getResultList();
			return listOfLoan;
	}
		
		
		
	public boolean updateLoanInterest(Loan loan) {
		EntityManager manager = emf.createEntityManager();
		// find method take 1st parameter entity class name and 2nd parameter column with pk 
		Loan pp = manager.find(Loan.class, loan.getLid());
	
		EntityTransaction tran = manager.getTransaction();
		pp.setLinterest(loan.getLinterest());
		tran.begin();
		manager.merge(pp);						// merge method to update the records.
		tran.commit();
		return true;
		
	}
		

		public boolean deleteLoan(int lid) {
			EntityManager manager = emf.createEntityManager();
			// find method take 1st parameter entity class name and 2nd parameter column with pk 
			Loan pp = manager.find(Loan.class, lid);
			
			
				EntityTransaction tran = manager.getTransaction();
						tran.begin();
						manager.remove(pp);						// remove the records. 
						tran.commit();
				return true;
			
		}
		
		
		
		public Loan findLoan(int lid) {
			EntityManager manager = emf.createEntityManager();
			Loan pp = manager.find(Loan.class, lid);
			return pp;
		}
		
		public boolean hasLoan(int lid) {
			try {
				EntityManager manager =emf.createEntityManager();
				Loan loan =manager.find(Loan.class, lid);
				if(loan ==null)
					return false;
				return true;
				
			} catch (Exception e) {
				System.out.println(e);
				return false;// TODO: handle exception
			}
		}
		public List<Object> getMaxLid(){
			try {
				EntityManager manager=emf.createEntityManager();
				Query qry=manager.createQuery("select max(l.lid) from Loan l");
				List<Object> list=qry.getResultList();
				return list;
			} catch (Exception e) {
				System.out.println(e);
				return null;
				// TODO: handle exception
			}
		}
		
}

