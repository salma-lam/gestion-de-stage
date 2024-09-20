package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Stagevalide;


@Repository
public interface stagevalideRepository extends JpaRepository<Stagevalide,String>{

	

}
