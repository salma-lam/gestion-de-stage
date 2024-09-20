package com.app.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class Attribuerjury {
    
	  @Id
	  @GeneratedValue(strategy=GenerationType.IDENTITY)
	  private int  idjury;
	  private String cne;
	  private String jury;
	  
	  
	  @OneToOne
	  private Stage stage;
}
