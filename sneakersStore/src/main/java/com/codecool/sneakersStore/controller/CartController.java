package com.codecool.sneakersStore.controller;

import com.codecool.sneakersStore.model.Cart;
import com.codecool.sneakersStore.model.Client;
import com.codecool.sneakersStore.model.Product;
import com.codecool.sneakersStore.service.CartService;
import com.codecool.sneakersStore.service.ClientService;
import com.codecool.sneakersStore.service.ProductService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000/", methods = {RequestMethod.PUT, RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST})
@RestController
@RequestMapping("/cart")
public class CartController {
    private final CartService cartService;
    private final ClientService clientService;
    private final ProductService productService;

    public CartController(CartService cartService, ClientService clientService, ProductService productService) {
        this.cartService = cartService;
        this.clientService = clientService;
        this.productService = productService;
    }

    @GetMapping("/get-cart")
    public Cart getClientCart() {
        Client client = clientService.findByUsername("test");
        return client.getCart();
    }

    @PostMapping("/add-to-cart/{id}")
    public Cart addItemToCart(@PathVariable Long id, @RequestBody String size) {
        System.out.println("sizzzzzzzzzzzzzzzzz" + size);
        Product product = productService.getProductById(id);
        Client client = clientService.findByUsername("test");
        Cart cart = cartService.addItemToCartTest(product, 1, client);
        return cart;
    }

    @PostMapping("/decrease-quantity-of-cart-item/{id}")
    public Cart decreaseQuantityOfCartItem(@PathVariable Long id) {
        Product product = productService.getProductById(id);
        Client client = clientService.findByUsername("test");
        Cart cart = cartService.decreaseCartItemQuantity(product, 1, client);

        return cart;
    }

}
