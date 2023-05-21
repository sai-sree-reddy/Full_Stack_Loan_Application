	package com.dao;
	
	import java.util.List;
	
	import javax.persistence.EntityManager;
	import javax.persistence.EntityManagerFactory;
	import javax.persistence.EntityTransaction;
	import javax.persistence.Query;
	
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Repository;
	
	import com.bean.Loan;
	import com.bean.LoanApplication;
	
	@Repository
	public class LoanApplicationDao {
		@Autowired
		EntityManagerFactory emf;				// Datasource like Connection reference. 
			public int storeApplicationInfo(LoanApplication loanApplication) {
			try {
				EntityManager manager = emf.createEntityManager();			//like PreparedStatement or Statement 
				EntityTransaction tran = manager.getTransaction();
				tran.begin();
				manager.persist(loanApplication);                                                      // save the record 
				tran.commit();
			}catch(Exception e) {
				System.out.println(e);
				return 0;
			}
			return 1;
		}
			
			public List<LoanApplication> getAllApplications() {
				EntityManager manager = emf.createEntityManager();
				Query qry	= manager.createQuery("select p from LoanApplication p");
				List<LoanApplication> listOfApplication = qry.getResultList();
				return listOfApplication;
			}
			
			public boolean updateApplicationAmount(LoanApplication loanApplication) {
				EntityManager manager = emf.createEntityManager();
				// find method take 1st parameter entity class name and 2nd parameter column with pk 
				LoanApplication  pp = manager.find(LoanApplication.class, loanApplication.getAid());
				if(pp==null) {
					return false;
				}else {
					EntityTransaction tran = manager.getTransaction();
					pp.setAmount(loanApplication.getAmount());
					tran.begin();
					manager.merge(pp);						// merge method to update the records.
					tran.commit();
					return true;
				}
			}
			
			public boolean updateApplicationStatus(int aid, String status) {
				EntityManager manager = emf.createEntityManager();
				// find method take 1st parameter entity class name and 2nd parameter column with pk 
				LoanApplication  pp = manager.find(LoanApplication.class, aid);
				if(pp==null) {
					return false;
				}else {
				EntityTransaction tran = manager.getTransaction();
				pp.setApproved(status);
				tran.begin();
				manager.merge(pp);						// merge method to update the records.
				tran.commit();
				return true;
				}
			}
			
			public List<LoanApplication> getAllUnapproved(){
				try {
					EntityManager manager= emf.createEntityManager();
					Query qry = manager.createQuery("select p from LoanApplication p where p.approved='Not Approved' ");
					if(qry.getResultList()==null)
						return null;
					List<LoanApplication> listOfUnApproved=qry.getResultList();
					return listOfUnApproved;
				} catch (Exception e) {
					System.out.println(e);
					return null;// TODO: handle exception
				}
			}
			public List<LoanApplication> getAllPending(){
				try {
					EntityManager manager= emf.createEntityManager();
					Query qry = manager.createQuery("select p from LoanApplication p where p.approved='Pending' ");
					if(qry.getResultList()==null)
						return null;
					List<LoanApplication> listOfUnApproved=qry.getResultList();
					return listOfUnApproved;
				} catch (Exception e) {
					System.out.println(e);
					return null;// TODO: handle exception
				}
			}
			
			public List<LoanApplication> getAllApproved(){
				try {
					EntityManager manager= emf.createEntityManager();
					Query qry = manager.createQuery("select p from LoanApplication p where p.approved='Approved' ");
					if(qry.getResultList()==null)
						return null;
					List<LoanApplication> listOfUnApproved=qry.getResultList();
					return listOfUnApproved;
				} catch (Exception e) {
					System.out.println(e);
					return null;// TODO: handle exception
				}
			}
			
			public List<LoanApplication> getAllByDescAmount(){
				try {
					EntityManager manager= emf.createEntityManager();
					Query qry = manager.createNativeQuery("select p.* from loanapplication p order by amount desc ");
					if(qry.getResultList()==null)
						return null;
					List<LoanApplication> listOfUnApproved=qry.getResultList();
					return listOfUnApproved;
				} catch (Exception e) {
					System.out.println(e);
					return null;// TODO: handle exception
				}
			}
			
			
			public boolean deleteApplication(int aid) {
				EntityManager manager = emf.createEntityManager();
				// find method take 1st parameter entity class name and 2nd parameter column with pk 
				LoanApplication pp = manager.find(LoanApplication.class, aid);
				if(pp==null) {
					return false;
				}else {
					EntityTransaction tran = manager.getTransaction();
					tran.begin();
					manager.remove(pp);						// remove the records. 
					tran.commit();
					return true;
				}
			}
			
			public LoanApplication findApplication(int aid) {
				EntityManager manager = emf.createEntityManager();
				LoanApplication pp = manager.find(LoanApplication.class, aid);
				return pp;
			}
			
			public List<LoanApplication> getApplicationByLoan(String ltype){
				try {
					EntityManager manager = emf.createEntityManager();
					Query qry= manager.createNativeQuery("select la.* from loanapplication la, loan l where la.lsid =l.lid and l.lytpe= ?1");
			        qry.setParameter(1, ltype);
	//						createNativeQuery("select la.* from loanapplicaiton la, loan l where la.lsid = lid" );
					List<LoanApplication> listOfApplication= qry.getResultList();
					return listOfApplication;
					
				} catch (Exception e) {
					System.out.println(e);
					return null;
					// TODO: handle exception
				}
			}
			
			public boolean hasApplication(int aid) {
				try {
					EntityManager manager =emf.createEntityManager();
					LoanApplication application=manager.find(LoanApplication.class, aid);
					if(application==null)
						return false;
					return true;
				} catch (Exception e) {
					System.out.println(e);
					return false;
					// TODO: handle exception
				}
			}
			public boolean updateAppliedBy(LoanApplication application) {
				try {
					EntityManager manager=emf.createEntityManager();
					LoanApplication app=manager.find(LoanApplication.class,application.getAid());
					app.setAppliedBy(application.getAppliedBy());
					EntityTransaction tran=manager.getTransaction();
					tran.begin();
					manager.merge(app);
					tran.commit();
					return true;
				} catch (Exception e) {
					System.out.println(e);
					return false;
					// TODO: handle exception
				}
				
			}
			
			public boolean updateApprovedBy(LoanApplication application) {
				try {
					EntityManager manager=emf.createEntityManager();
					LoanApplication app=manager.find(LoanApplication.class,application.getAid());
					app.setApprovedBy(application.getApprovedBy());
					EntityTransaction tran=manager.getTransaction();
					tran.begin();
					manager.merge(app);
					tran.commit();
					return true;
					
				} catch (Exception e) {
					System.out.println(e);
					return false;
					// TODO: handle exception
				}
			}
			public List<Object> getMaxAid(){
				try {
					EntityManager manager=emf.createEntityManager();
					Query qry=manager.createQuery("select max(a.aid) from LoanApplication a");
					List<Object> list=qry.getResultList();
					return list;
				} catch (Exception e) {
					System.out.println(e);
					return null;
					// TODO: handle exception
				}
			}
			
			
	}
