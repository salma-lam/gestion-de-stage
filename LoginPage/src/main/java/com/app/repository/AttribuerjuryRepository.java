package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Attribuerjury;
import com.app.model.Logincheffiliere;


@Repository
public interface AttribuerjuryRepository extends JpaRepository<Attribuerjury,Long> {



}
