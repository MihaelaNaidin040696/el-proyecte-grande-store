package com.codecool.sneakersStore.service;

import com.codecool.sneakersStore.model.Product;
import com.codecool.sneakersStore.payload.ProductRequest;
import com.codecool.sneakersStore.repository.ProductRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public Product getProductById(Long id){
        Optional<Product> optionalProduct = productRepository.findById(id);
        return optionalProduct.orElse(null);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public Product updateProduct(Product product) {
        return productRepository.save(product);

    }

    public Product saveNewProduct(Product newProduct) {
        return productRepository.save(newProduct);
    }
}
