package com.app.model;

import java.io.File;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class attribuernote {
	
	 @Id
	  @GeneratedValue(strategy=GenerationType.IDENTITY)
	  private int  idattributnote;
	  private String cne;
	  private Double note;
	
	  @OneToOne
	  private Stage stage;
	
	
	
	

}
