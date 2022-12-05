package com.codecool.sneakersStore.repository;

import com.codecool.sneakersStore.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
