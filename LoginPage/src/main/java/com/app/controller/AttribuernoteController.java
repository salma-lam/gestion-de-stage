package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Stage;
import com.app.model.attribuernote;
import com.app.repository.AttribuernoteRepositoy;

import jakarta.persistence.OneToOne;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AttribuernoteController {
   
	@Autowired AttribuernoteRepositoy attribuernoteRepositoy;
	
	

	@PostMapping("/addattribuernote")
	public  attribuernote addattribuernote(@RequestBody attribuernote attribuerno) {		
	 return attribuernoteRepositoy.save(attribuerno);
     }
	
	
	
	
	
	
	
	
}
