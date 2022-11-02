package com.codecool.sneakersStore.service;


import com.codecool.sneakersStore.service.DAO.ProductMemory;

public class ProductService {
    private ProductMemory productMemory;

    public ProductService() {
        this.productMemory = ProductMemory.getInstance();
    }

    public ProductMemory getProductMemory() {
        return productMemory;
    }
}
