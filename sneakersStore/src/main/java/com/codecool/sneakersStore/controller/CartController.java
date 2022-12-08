package com.codecool.sneakersStore.controller;

import com.codecool.sneakersStore.model.Cart;
import com.codecool.sneakersStore.model.CartItem;
import com.codecool.sneakersStore.repository.CartItemRepository;
import com.codecool.sneakersStore.service.CartService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@CrossOrigin(value = {"*"} )
@RestController
@RequestMapping("/cart")
public class CartController {
    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping("/get-cart/{cartId}")
    public Cart getCart(@PathVariable Long cartId){
        return cartService.getCartById(cartId);
    }

    @PostMapping("/add-items/{id}")
    public void addItemsToCart(@PathVariable Long id, @RequestBody CartItem cartItem){
        cartService.addItemToCart(cartItem,id);
    }
}
