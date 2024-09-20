package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Document;

import com.app.repository.documentRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class documentcontroller {
	
	@Autowired documentRepository  documentrepository;
	
	@PostMapping("/document")
	public  Document adddocument(@RequestBody Document document) {		
	 return documentrepository.save(document);
     }
	
	@GetMapping("/document")
	public List<Document> getAlldocument() {		
	 return documentrepository.findAll();
     }

}
