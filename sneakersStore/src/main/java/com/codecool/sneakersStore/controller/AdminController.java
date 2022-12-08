package com.codecool.sneakersStore.controller;

import com.codecool.sneakersStore.model.Product;
import com.codecool.sneakersStore.payload.ProductRequest;
import com.codecool.sneakersStore.service.ProductService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(value = {"*"})
@RestController
@RequestMapping("/admin")
public class AdminController {
    private final ProductService productService;

    public AdminController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getProducts() {
        return productService.getAllProducts();
    }

    @DeleteMapping("/delete-product/{id}")
    public void deleteProductById(@PathVariable Long id) {
        productService.deleteProduct(id);
    }

    @PutMapping("/edit-product/{prodId}")
    public Product updateProductById(@RequestBody ProductRequest productRequest, @PathVariable Long prodId) {
        Product product = productService.getProductById(prodId);
        product.setProductName(productRequest.getProductName());
        product.setReferenceCode(productRequest.getReferenceCode());
        product.setDescriptionColor(productRequest.getDescriptionColor());
        product.setDescriptionMaterial(productRequest.getDescriptionMaterial());
        product.setDescriptionInterior(productRequest.getDescriptionInterior());
        product.setDescriptionSole(productRequest.getDescriptionSole());
        product.setSize(productRequest.getSize());
        product.setSellingPrice(productRequest.getSellingPrice());
        product.setPurchasePrice(productRequest.getPurchasePrice());
        product.setPurchaseDate(productRequest.getPurchaseDate());
        product.setTotalStock(productRequest.getTotalStock());
        product.setDiscount(productRequest.getDiscount());
        return productService.updateProduct(product);
    }

    @PostMapping("/add-new-product")
    public Product saveNewProduct(@RequestBody ProductRequest productRequest) {
        Product product = new Product(
                productRequest.getProductName(),
                productRequest.getReferenceCode(),
                productRequest.getDescriptionColor(),
                productRequest.getDescriptionMaterial(),
                productRequest.getDescriptionInterior(),
                productRequest.getDescriptionSole(),
//                productRequest.getImage(),
                productRequest.getSize(),
                productRequest.getSellingPrice(),
                productRequest.getPurchasePrice(),
                productRequest.getPurchaseDate(),
                productRequest.getTotalStock(),
                productRequest.getDiscount()
        );
        return productService.saveNewProduct(product);
    }
}
