package com.codecool.sneakersStore.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
public class Product {
    private int id;
    private String brand;
    private String name;
    private String referenceCode;
    private int categoryId;
    private int supplierId;
    private int brandId;
    private String description;
    private String image;
    private String size;
    private float sellingPrice;
    private float purchasePrice;
    private Date purchaseDate;
    private int totalStock;
    private float discount;
}
