package com.codecool.sneakersStore.controller;

import com.codecool.sneakersStore.model.Product;
import com.codecool.sneakersStore.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public List<Product> products() {
        return productService.getProductMemory().getProducts();
    }
}