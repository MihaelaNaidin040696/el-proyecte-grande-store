package com.codecool.sneakersStore.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
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
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinColumn(name="brand_id",referencedColumnName = "id")
    @JsonBackReference
    private Brand brand;
    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinColumn(name="category_id",referencedColumnName = "id")
    @JsonBackReference
    private Category category;
    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinColumn(name="supplier_id", referencedColumnName = "id")
    @JsonBackReference
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
}
