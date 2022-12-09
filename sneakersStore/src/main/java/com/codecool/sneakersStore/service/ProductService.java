package com.codecool.sneakersStore.service;

import com.codecool.sneakersStore.model.Product;
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
        Optional<Product> optionalProduct = Optional.of(productRepository.findById(id).get());
        return optionalProduct.orElse(null);
    }

    public Product getProductByIdTest(Long id){
//        Product product =
//        product.setId(id);
//        product.setProductName(product.getProductName());
//        product.setSellingPrice(product.getSellingPrice());
//        product.setCategory(product.getCategory());
//        product.setSupplier(product.getSupplier());
//        product.setSupplier(product.getSupplier());

        return productRepository.findById(id).get();
    }
}
