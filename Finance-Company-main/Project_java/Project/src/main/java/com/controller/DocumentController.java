package com.controller;

import java.util.List;

import org.apache.tomcat.util.net.openssl.ciphers.MessageDigest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Document;
import com.service.DocumentService;
@CrossOrigin
@RestController
public class DocumentController {

	@Autowired
	DocumentService documentService;
	
	@RequestMapping(value = "storeDocument",
			consumes = MediaType.APPLICATION_JSON_VALUE,
			method = RequestMethod.POST)
	public String storeDocument(@RequestBody Document document) {
		return documentService.storeDocument(document);
	}
	
	@RequestMapping(value = "getAllDocument",
			produces = MediaType.APPLICATION_JSON_VALUE,
			method = RequestMethod.GET)
	public List<Document> getAllDocument(){
		return documentService.getAllDocument();
	}
	
	@RequestMapping(value = "updateDocument",
			method = RequestMethod.PUT,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateDocument(@RequestBody Document document) {
		return documentService.updateDocument(document);
	}
	
	@RequestMapping(value = "deleteDocument/{did}",
			method = RequestMethod.DELETE)
	public String deleteDocument(@PathVariable("did") int did) {
		return documentService.deleteDocument(did);
	}
}
