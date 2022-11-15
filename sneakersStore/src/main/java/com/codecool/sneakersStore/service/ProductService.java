package com.codecool.sneakersStore.service;


import com.codecool.sneakersStore.service.DAO.ProductMemory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    private final ProductMemory productMemory;

    @Autowired
    public ProductService() {
        this.productMemory = ProductMemory.getInstance();
        productMemory.setProducts();
    }

    public ProductMemory getProductMemory() {
        return productMemory;
    }
}
