package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Stage;
import com.app.model.Stagevalide;
import com.app.repository.stageRepository;
import com.app.repository.stagevalideRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class stagevalideController {

	@Autowired
	private stageRepository stageRepository;
	@Autowired
	private stagevalideRepository stagevalideReposi;

	
	@PostMapping("/stagevalide")
	public  Stagevalide addvalidestage(@RequestBody Stagevalide Stagevalid) {		
	 return stagevalideReposi.save(Stagevalid);
     }
	
	
	
	
	
	
	
}
