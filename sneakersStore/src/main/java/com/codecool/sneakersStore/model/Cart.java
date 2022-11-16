package com.codecool.sneakersStore.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class Cart {
    private List<CartItem> cartItems;
}
