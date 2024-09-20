package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Stage;
import com.app.model.Stagevalide;
import com.app.repository.stageRepository;
import com.app.repository.stagevalideRepository;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class stageController {
	 
	@Autowired
	private stageRepository stagerepository;
	@Autowired
	private stagevalideRepository stagevalideReposi;

	
	@PostMapping("/stage")
	public  Stage addstage(@RequestBody Stage stage) {		
	 return stagerepository.save(stage);
     }
	
	@GetMapping("/stage")
	public List<Stage> getAllstage() {		
	 return stagerepository.findAll();
     }
	
	@GetMapping("/stage/{cne}")
	public Stage getStageById(@PathVariable("cne") String cne) {
		return stagerepository.findById(cne).get();
	}
	
	
	@PostMapping("/stagetest")
	public void affiche() {
		System.out.println(stagerepository.getstage());
	}

	
	 
	 
	
	
	
}
