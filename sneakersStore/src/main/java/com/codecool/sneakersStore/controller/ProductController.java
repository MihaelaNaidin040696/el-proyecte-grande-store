package com.codecool.sneakersStore.controller;

import com.codecool.sneakersStore.model.Product;
import com.codecool.sneakersStore.service.DAO.ProductMemory;
import com.codecool.sneakersStore.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class ProductController {
    private final ProductService productService;


    public ProductController() {
        this.productService = new ProductService();
    }

    @GetMapping( "/products")
    public List<Product> products(){
        return productService.getProductMemory().getProducts();
    }
}
