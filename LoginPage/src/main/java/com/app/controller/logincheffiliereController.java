package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Logincheffiliere;
import com.app.model.User;
import com.app.repository.logincheffiliereRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class logincheffiliereController {

	
 @Autowired logincheffiliereRepository logincheffiliereReposito;
 

 
  @PostMapping(value="/logincheffiliere")
 
    public ResponseEntity<?> addcheffiliere(@RequestBody Logincheffiliere logincheffiliereData) {
	 System.out.println(logincheffiliereData);
	 Logincheffiliere logincheffilie= logincheffiliereReposito.findByEmail(logincheffiliereData.getEmail());
	if(logincheffilie.getPassword().equals(logincheffiliereData.getPassword()))
		return ResponseEntity.ok(logincheffilie);
	 return (ResponseEntity<?>) ResponseEntity.internalServerError();
	 
  }
  
  @GetMapping("/logincheffiliere/{email}")
	public Logincheffiliere getchefById(@PathVariable("email") String email) {
		return logincheffiliereReposito.findByEmail(email);
	}

 
 
 
}
