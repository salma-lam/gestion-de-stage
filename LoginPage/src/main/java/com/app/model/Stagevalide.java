package com.app.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Stagevalide extends Stage{
			
		@Id
		private String cne;
		private String entreprise;
		private String emailEntre;
		private String encadrantStg;
		private String description;
		private String dureestage;
		  private String validationchef;
		  private String avischef;

	}


