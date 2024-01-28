package com.ayurwave.medicinedelivery.service;

import java.util.List;
import com.ayurwave.medicinedelivery.model.Product;

public interface ProductService {
    List<Product> getAllProducts();
    Product getProductById(Long productId);
    void saveProduct(Product product);
    void deleteProduct(Long productId);
}