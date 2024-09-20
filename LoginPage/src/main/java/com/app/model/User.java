package com.app.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="registerlogin")
@AllArgsConstructor
@Data
@NoArgsConstructor
public class User {
  
	@Id
	private String   cne;
	private String   nom;
	private String   prenom;
	private String   email;
	private String  password;
	private String  cpassword;
	
	
//	private String userId;
//	private String password;
	
	
	
	
	@OneToOne(mappedBy = "user")
	private Stage stage;
}
