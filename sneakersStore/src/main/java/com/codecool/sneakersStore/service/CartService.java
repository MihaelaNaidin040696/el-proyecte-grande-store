package com.codecool.sneakersStore.service;

import com.codecool.sneakersStore.model.Cart;
import com.codecool.sneakersStore.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {
    private final CartRepository cartRepository;

    @Autowired
    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public void addCart(Cart cart) {
        cartRepository.save(cart);
    }
}
