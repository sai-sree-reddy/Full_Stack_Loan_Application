package com.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.Document;

@Repository
public class DocumentDao {

	@Autowired
	EntityManagerFactory emf;
	
	public boolean storeDocument(Document document) {
		try {
			EntityManager manager=emf.createEntityManager();
			EntityTransaction tran=manager.getTransaction();
			tran.begin();
			manager.persist(document);
			tran.commit();
			return true;
		} catch (Exception e) {
			System.out.println(e);
			return false;// TODO: handle exception
		}
	}
	
	public List<Document> getAllDocument(){
		try {
			EntityManager manager=emf.createEntityManager();
			Query qry=manager.createQuery("Select d from Document d");
			List<Document> listOfDocument = qry.getResultList();
			return listOfDocument;
		} catch (Exception e) {
			System.out.println(e);
			return null;
			// TODO: handle exception
		}
	}
	
	public boolean updateDocument(Document document) {
		try {
			EntityManager manager=emf.createEntityManager();
			Document doc=manager.find(Document.class,document.getDid());
			
			EntityTransaction tran=manager.getTransaction();
			doc.setImage(document.getImage());
			tran.begin();
			manager.merge(doc);
			tran.commit();
			return true;
			
		} catch (Exception e) {
			System.out.println(e);
			return false;
			// TODO: handle exception
		}
	}
	
	public boolean deleteDocument(int did) {
		try {
			EntityManager manager=emf.createEntityManager();
			Document doc=manager.find(Document.class,did);
			
			EntityTransaction tran=manager.getTransaction();
			tran.begin();
			manager.remove(doc);
			tran.commit();
			return true;
		} catch (Exception e) {
			System.out.println(e);
			return false;
			// TODO: handle exception
		}
	}
	
	public boolean hasDocument(int did) {
		try {
			EntityManager manager=emf.createEntityManager();
			Document document=manager.find(Document.class, did);
			if(document==null)
				return false;
			return true;
		} catch (Exception e) {
			System.out.println(e);
			return false;
			// TODO: handle exception
		}
	}
}
