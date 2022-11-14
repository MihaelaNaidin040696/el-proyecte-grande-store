package com.codecool.sneakersStore.service;


import com.codecool.sneakersStore.service.DAO.ProductMemory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    private final ProductMemory productMemory;

    @Autowired
    public ProductService(ProductMemory productMemory) {
        this.productMemory = productMemory;
    }

    public ProductMemory getProductMemory() {
        return productMemory;
    }
}
