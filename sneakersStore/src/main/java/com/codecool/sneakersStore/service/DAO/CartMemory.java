package com.codecool.sneakersStore.service.DAO;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Repository
public class CartMemory {
    private List<CartItemMemory> cartList;


    public CartMemory(){
        this.cartList = new ArrayList<>();
    }

    public void addItemToCart(CartItemMemory cartItemMemory){
        cartList.add(cartItemMemory);
    }

    public List<CartItemMemory> getCartList() {
        return cartList;
    }
}
