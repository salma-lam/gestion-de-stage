package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.app.model.attribuernote;

@Repository
public interface AttribuernoteRepositoy extends JpaRepository<attribuernote,Long>{

}
