package com.codecool.sneakersStore.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;

@Getter
@Setter
@AllArgsConstructor
public class CartItem {
    private Product product;
    private int quantity;
    private float total;

}
