package com.ayurwave.medicinedelivery.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayurwave.medicinedelivery.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    
}