package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Document;
import com.dao.DocumentDao;
import com.dao.LoanApplicationDao;

@Service
public class DocumentService {

		@Autowired
		DocumentDao documentDao;
		
		@Autowired
		LoanApplicationDao applicationDao;
		
		public String storeDocument(Document document ) {
			if(!applicationDao.hasApplication(document.getAsid()))
				return "Application Records not present";
			if(documentDao.storeDocument(document))
				return "Stored successfully";
			return "Didn't stored";
		}
		
		public List<Document> getAllDocument(){
			return documentDao.getAllDocument();
		}
		
		public String updateDocument(Document document) {
			if(!documentDao.hasDocument(document.getDid()))
				return "Document Records not Present";
			if(documentDao.updateDocument(document))
				return "Updated Successfully";
			return "Not Updated";
		}
		
		public String deleteDocument(int did) {
			if(!documentDao.hasDocument(did))
				return "Document Records not Present";
			if(documentDao.deleteDocument(did))
				return "Deleted Successfully";
			return "Not Deleted";
		}
		
		public String hasDocument(int did) {
			if(!documentDao.hasDocument(did)) 
				return "Document Records not Present";
			return "Document Records Present";
			
		}
}
