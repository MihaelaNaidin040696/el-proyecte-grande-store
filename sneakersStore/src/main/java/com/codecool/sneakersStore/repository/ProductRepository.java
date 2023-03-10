package com.codecool.sneakersStore.repository;

import com.codecool.sneakersStore.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long> {
    @Query(value = "SELECT p FROM Product p WHERE p.isAvailable = true and p.totalStock > 0")
    List<Product> findAllByIsAvailable();
}
