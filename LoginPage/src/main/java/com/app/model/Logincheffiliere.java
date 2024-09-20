package com.app.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@Data
@NoArgsConstructor
public class Logincheffiliere {
    
	  @Id
	  @GeneratedValue(strategy=GenerationType.IDENTITY)
	   private int idchef;
	   private String fullname;
	   private String email;
	   private String  password;
	
	}


