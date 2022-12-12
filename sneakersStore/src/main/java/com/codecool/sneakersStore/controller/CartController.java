package com.codecool.sneakersStore.controller;

import com.codecool.sneakersStore.model.Cart;
import com.codecool.sneakersStore.model.CartItem;
import com.codecool.sneakersStore.model.Client;
import com.codecool.sneakersStore.model.Product;
import com.codecool.sneakersStore.payload.CartItemRequest;
import com.codecool.sneakersStore.service.CartService;
import com.codecool.sneakersStore.service.ClientService;
import com.codecool.sneakersStore.service.ProductService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@CrossOrigin(origins = "http://localhost:3000/", methods = {RequestMethod.PUT, RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST})
@RestController
@RequestMapping("/cart")
public class CartController {
    private  CartService cartService;
    private  ClientService clientService;
    private  ProductService productService;

    public CartController(CartService cartService, ClientService clientService, ProductService productService) {
        this.cartService = cartService;
        this.clientService = clientService;
        this.productService = productService;
    }

    @GetMapping("/get-cart/{cartId}")
    public Cart getCart(@PathVariable Long cartId){
        return cartService.getCartById(cartId);
    }

    @PostMapping("/add-to-cart/{id}")
    public Cart addItemToCart(@PathVariable Long id,@RequestBody String size) {
        System.out.println("sizzzzzzzzzzzzzzzzz"+size);
        Product product = productService.getProductById(id);
        Client client = clientService.findByUsername("test");
        Cart cart = cartService.addItemToCartTest(product, 1, client);
        return cart;
    }

}
