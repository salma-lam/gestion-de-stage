package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Attribuerjury;
import com.app.model.Logincheffiliere;
import com.app.repository.AttribuerjuryRepository;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AttribuerjuryController {

@Autowired AttribuerjuryRepository attribuerjuryReposito;
	
	

	@PostMapping("/addattribuerjury")
	public  Attribuerjury addAttribuerjury(@RequestBody Attribuerjury Attribuerju) {		
	 return attribuerjuryReposito.save(Attribuerju);
     }
	
	

}
