package com.app.model;

import java.io.File;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data

public class Document {
	   
	 @Id
	  @GeneratedValue(strategy=GenerationType.IDENTITY)
	  private int  iddocument;
	  private String  cne ; 
	
//	  @Lob
//	  private byte[] presentation;
//	  @Lob
//	  private byte[] ficheevaluation;
//      @Lob
//	  private byte[] rapport;
	  

	  private String Drive;

	    
	  @OneToOne
	  private Stage stage;
	  

}

