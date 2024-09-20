package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Logincheffiliere;
import com.app.model.User;

@Repository
public interface logincheffiliereRepository extends JpaRepository<Logincheffiliere,Long>{

	Logincheffiliere findByEmail(String email);








}
