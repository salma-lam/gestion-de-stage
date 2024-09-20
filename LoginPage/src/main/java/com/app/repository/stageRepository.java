package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.model.Stage;
import com.app.model.Stagevalide;

@Repository
public interface stageRepository extends JpaRepository<Stage,String>{

	@Query("select s.cne,s.validationchef,s.avischef from Stage s ")
	public List<Stage> getstage();
    
	

}
