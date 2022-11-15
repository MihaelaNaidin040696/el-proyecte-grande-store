package com.codecool.sneakersStore.service;


import com.codecool.sneakersStore.model.Product;
import com.codecool.sneakersStore.service.DAO.ProductMemory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static java.lang.Integer.parseInt;

@Service
public class ProductService {
    private final ProductMemory productMemory;

    @Autowired
    public ProductService() {
        this.productMemory = ProductMemory.getInstance();
        productMemory.setProducts();
    }
    public Product findProductById(String roomId){
        return productMemory.findProductById(parseInt(roomId));
    }
    public ProductMemory getProductMemory() {
        return productMemory;
    }
}
