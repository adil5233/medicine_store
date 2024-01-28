package com.ayurwave.medicinedelivery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ayurwave.medicinedelivery.model.User;

public interface UserRepository extends JpaRepository<User , String> {
}