package com.codecool.sneakersStore.service;

import com.codecool.sneakersStore.model.CartItem;
import com.codecool.sneakersStore.repository.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartItemService {
    private final CartItemRepository cartItemRepository;

    @Autowired
    public CartItemService(CartItemRepository cartItemRepository) {
        this.cartItemRepository = cartItemRepository;
    }

    public void addCartItem(CartItem cartItem) {
        cartItemRepository.save(cartItem);
    }
}
