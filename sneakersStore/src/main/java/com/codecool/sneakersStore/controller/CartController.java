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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@CrossOrigin(value = {"*"} )
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

//    @PostMapping("/add-items/{id}")
//    public void addItemsToCart(@PathVariable Long id, @RequestBody CartItem cartItem){
//        cartService.addItemToCart(cartItem,id);
//    }
//    @GetMapping("/client-cart")
//    public Cart cart(){
//        String email = "test";
//        Client client = clientService.findByUsername(email);
////        Cart cart = client.getCart();
//        if(cart == null){
//            System.out.println("Cart is empttyyyyyyyyyyyyyyy");
//        }
//        return cart;
//    }
    @PostMapping("/add-to-cart")
    public Cart addItemToCart(@RequestBody CartItemRequest cartItemRequest) {
//        System.out.println(cartItemRequest.getId());
        Product product = productService.getProductById(Long.parseLong(String.valueOf(cartItemRequest.getProductId())));
        int quantity = cartItemRequest.getQuantity();
        Client client = clientService.findByUsername("test");

        Cart cart = cartService.addItemToCartTest(product, quantity, client);
        System.out.println(cart);
        return cart;
    }

}
