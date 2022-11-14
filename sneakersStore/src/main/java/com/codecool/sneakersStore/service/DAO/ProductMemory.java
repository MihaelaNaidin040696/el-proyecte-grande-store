package com.codecool.sneakersStore.service.DAO;

import com.codecool.sneakersStore.model.Product;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Repository
public class ProductMemory {
    private final List<Product> products;

    public ProductMemory() {
        this.products = new ArrayList<>();
    }

    public void addProduct(Product product){
        products.add(product);
    }

    public List<Product> getProducts() {
        setProducts();
        return products;
    }

    public void setProducts(){
        Product p1 = new Product(1,"ADIDAS ORIGINALS NITEBALL","H67366",1,1,1,"Culori: Alb / Negru\n" +
                "\n" +
                "Materiale: Piele / Materiale sintetice\n" +
                "\n" +
                "Interior: Textile\n" +
                "\n" +
                "Talpa: Cauciuc vulcanizat durabil","https://sneakerindustry.ro/94724-product_zoomed/niteball.jpg","41", (float) 455.4, (float) 250.3,new Date(),50, 10.0F);
        Product p2 = new Product(2,"JORDAN 12 RETRO","CT8013-015\n" +
                "\n",1,3,3,"Culori:  Alb / Gri\n" +
                "\n" +
                "Materiale: Piele / Piele sintetica\n" +
                "\n" +
                "Interior: Textile\n" +
                "\n" +
                "Talpa: Cauciuc vulcanizat durabil","https://sneakerindustry.ro/94586-product_zoomed/12-retro.jpg","44",
                1200,700,new Date(),20,10);
        products.add(p1);
        products.add(p2);
    }

}
