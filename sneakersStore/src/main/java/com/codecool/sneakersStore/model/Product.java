package com.codecool.sneakersStore.model;

import java.util.Date;

public class Product {
    private int id;
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


    public Product(int id, String name, String referenceCode, int categoryId, int supplierId, int brandId, String description, String image, String size, float sellingPrice, float purchasePrice, Date purchaseDate, int totalStock, float discount) {
        this.id = id;
        this.name = name;
        this.referenceCode = referenceCode;
        this.categoryId = categoryId;
        this.supplierId = supplierId;
        this.brandId = brandId;
        this.description = description;
        this.image = image;
        this.size = size;
        this.sellingPrice = sellingPrice;
        this.purchasePrice = purchasePrice;
        this.purchaseDate = purchaseDate;
        this.totalStock = totalStock;
        this.discount = discount;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getReferenceCode() {
        return referenceCode;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public int getSupplierId() {
        return supplierId;
    }

    public int getBrandId() {
        return brandId;
    }

    public String getDescription() {
        return description;
    }

    public String getImage() {
        return image;
    }

    public String getSize() {
        return size;
    }

    public float getSellingPrice() {
        return sellingPrice;
    }

    public float getPurchasePrice() {
        return purchasePrice;
    }

    public Date getPurchaseDate() {
        return purchaseDate;
    }

    public int getTotalStock() {
        return totalStock;
    }

    public float getDiscount() {
        return discount;
    }
}
