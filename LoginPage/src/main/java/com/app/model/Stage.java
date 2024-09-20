package com.app.model;

import java.util.List;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Stage {
	
	  @Id
	  private String  cne;
	  private String intitule;
	  private String entreprise;
	  private String emailEntre;
	  private String encadrantStg;
	  private String encadrantAcad;
	  private String description;
	  private String dureestage;
	  private String validationchef;
	  private String avischef;
	  
	  
	  
	  
	  @OneToOne
	  private User user;
	  
      
	  @OneToOne(mappedBy = "stage")
	  private Document document;
	  
	  
	  @OneToOne(mappedBy="stage")
	  private attribuernote attribuernot;
	  
	  @OneToOne(mappedBy="stage")
	  private Attribuerjury attribuerjury;
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
} 
