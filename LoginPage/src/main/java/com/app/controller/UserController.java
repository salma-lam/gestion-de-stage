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

import com.app.model.Stage;
import com.app.model.User;
import com.app.repository.UserRepository;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
    
	@Autowired
	private UserRepository userRepository;
	
	
	@PostMapping("/repository")
	public ResponseEntity<User> registerUser(@RequestBody User user) {
		
	 System.out.println("Controller called");
	 return ResponseEntity.ok(userRepository.save(user));
		
		
	}
	 @PostMapping(value="/login")
	 public ResponseEntity<?> loginUser(@RequestBody User userData) {
		 System.out.println(userData);
		User user= userRepository.findBycne(userData.getCne());
		if(user.getPassword().equals(userData.getPassword()))
			return ResponseEntity.ok(user);
		 return (ResponseEntity<?>) ResponseEntity.internalServerError();
		 
	 }
	 
	 
	 @GetMapping("/login/{cne}")
		public User getuserById(@PathVariable("cne") String cne) {
			return userRepository.findById(cne).get();
		}
}
