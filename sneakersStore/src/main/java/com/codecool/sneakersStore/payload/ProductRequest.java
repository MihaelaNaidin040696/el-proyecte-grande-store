package com.codecool.sneakersStore.payload;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ProductRequest {
    private String productName;
    private String referenceCode;
    private String descriptionColor;
    private String descriptionMaterial;
    private String descriptionInterior;
    private String descriptionSole;
//    private String image;
    private String size;
    private Float sellingPrice;
    private Float purchasePrice;
    private Date purchaseDate;
    private Integer totalStock;
    private Float discount;
    private Boolean isAvailable;
}
