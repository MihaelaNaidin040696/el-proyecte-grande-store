package com.codecool.sneakersStore.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.Date;

@Getter
@Setter
@Table(name = "products")
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    @JoinColumn(name="brand_id",referencedColumnName = "id")
    private Brand brand;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    @JoinColumn(name="category_id",referencedColumnName = "id")
    private Category category;
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    @JoinColumn(name="supplier_id",referencedColumnName = "id")
    private Supplier supplier;
    private String productName;
    private String referenceCode;
    private String descriptionColor;
    private String descriptionMaterial;
    private String descriptionInterior;
    private String descriptionSole;
    private String image;
    private String size;
    private float sellingPrice;
    private float purchasePrice;
    private Date purchaseDate;
    private int totalStock;
    private float discount;

    public Product(String productName,
                   String referenceCode,
                   String descriptionColor,
                   String descriptionMaterial,
                   String descriptionInterior,
                   String descriptionSole,
//                   String image,
                   String size,
                   Float sellingPrice,
                   Float purchasePrice,
                   Date purchaseDate,
                   Integer totalStock,
                   Float discount) {
        this.setProductName(productName);
        this.setReferenceCode(referenceCode);
        this.setDescriptionColor(descriptionColor);
        this.setDescriptionMaterial(descriptionMaterial);
        this.setDescriptionInterior(descriptionInterior);
        this.setDescriptionSole(descriptionSole);
//        this.setImage(image);
        this.setSize(size);
        this.setSellingPrice(sellingPrice);
        this.setPurchasePrice(purchasePrice);
        this.setPurchaseDate(purchaseDate);
        this.setTotalStock(totalStock);
        this.setDiscount(discount);
    }
}
