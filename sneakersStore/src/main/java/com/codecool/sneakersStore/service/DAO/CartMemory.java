package com.codecool.sneakersStore.service.DAO;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class CartMemory {
    private List<ProductMemory> cartList;

    public CartMemory(){
        this.cartList = new ArrayList<>();
    }

    public void addItemToCart(ProductMemory productMemory){
        cartList.add(productMemory);
    }

    public List<ProductMemory> getCartList() {
        return cartList;
    }
}
