package com.codecool.sneakersStore.controller;

import com.codecool.sneakersStore.model.Product;
import com.codecool.sneakersStore.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/prod")
public class ProductController {
    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/products")
    public List<Product> products() {
        return productService.getAllProducts();
    }

    @GetMapping("/product/{productId}")
    public Product getProductById(@PathVariable String productId){
        return productService.getProductById(Long.parseLong(productId));
    }
}
