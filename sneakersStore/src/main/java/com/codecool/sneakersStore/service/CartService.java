package com.codecool.sneakersStore.service;

import com.codecool.sneakersStore.model.Cart;
import com.codecool.sneakersStore.model.CartItem;
import com.codecool.sneakersStore.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

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

    public Cart getCartById(Long id){
        Optional<Cart> optionalCart = cartRepository.findById(id);
        return optionalCart.orElse(null);
    }

    public void addItemToCart(CartItem cartItem,Long cartId){
        Cart cart = getCartById(cartId);
        cart.addCartItem(cartItem);
        addCart(cart);
    }
}
