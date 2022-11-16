package com.codecool.sneakersStore.service.DAO;

import com.codecool.sneakersStore.model.Product;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Repository
public class ProductMemory {
    private final List<Product> products;
    private static  ProductMemory instance = null;


    public static ProductMemory getInstance(){
        if(instance == null){
            instance = new ProductMemory();

        }
        return instance;
    }
    public ProductMemory() {
        this.products = new ArrayList<>();
    }

    public void addProduct(Product product){
        products.add(product);
    }

    public List<Product> getProducts() {

        return products;
    }

    public Product findProductById(int productId){
        Product productToFind = null;
        for (Product product : products) {
            if(product.getId()==productId){
                productToFind = product;
            }
        }
        return productToFind;
    }
    public void setProducts(){
        Product p1 = new Product(1,"JORDAN","JORDAN 1 LOW","CT8013-015",
        1,2,1,"Cherrywood Red / White / Cement Grey",
                "Leather / Synthetic leather"
                ,"Textiles"
                ,"Durable vulcanized rubber"
                ,"https://sneakerindustry.ro/95359-category_products/1-low.jpg","44",300,200,new Date(),100,10);
        Product p2 = new Product(2,"JORDAN","JORDAN 1 LOW","CT8013-015",
                1,2,1,"Cherrywood Red / White / Cement Grey",
                "Leather / Synthetic leather"
                ,"Textiles"
                ,"Durable vulcanized rubber"
                ,"https://sneakerindustry.ro/95359-category_products/1-low.jpg","44",300,200,new Date(),100,10);
        Product p3 = new Product(3,"JORDAN","JORDAN 1 LOW","CT8013-015",
                1,2,1,"Cherrywood Red / White / Cement Grey",
                "Leather / Synthetic leather"
                ,"Textiles"
                ,"Durable vulcanized rubber"
                ,"https://sneakerindustry.ro/95359-category_products/1-low.jpg","44",300,200,new Date(),100,10);
        Product p4 = new Product(4,"JORDAN","JORDAN 1 LOW","CT8013-015",
                1,2,1,"Cherrywood Red / White / Cement Grey",
                "Leather / Synthetic leather"
                ,"Textiles"
                ,"Durable vulcanized rubber"
                ,"https://sneakerindustry.ro/95359-category_products/1-low.jpg","44",300,200,new Date(),100,10);
        Product p5 = new Product(5,"JORDAN","JORDAN 1 LOW","CT8013-015",
                1,2,1,"Cherrywood Red / White / Cement Grey",
                "Leather / Synthetic leather"
                ,"Textiles"
                ,"Durable vulcanized rubber"
                ,"https://sneakerindustry.ro/95359-category_products/1-low.jpg","44",300,200,new Date(),100,10);
        Product p6 = new Product(6,"JORDAN","JORDAN 1 LOW","CT8013-015",
                1,2,1,"Cherrywood Red / White / Cement Grey",
                "Leather / Synthetic leather"
                ,"Textiles"
                ,"Durable vulcanized rubber"
                ,"https://sneakerindustry.ro/95359-category_products/1-low.jpg","44",300,200,new Date(),100,10);
        Product p7 = new Product(7,"JORDAN","JORDAN 1 LOW","CT8013-015",
                1,2,1,"Cherrywood Red / White / Cement Grey",
                "Leather / Synthetic leather"
                ,"Textiles"
                ,"Durable vulcanized rubber"
                ,"https://sneakerindustry.ro/95359-category_products/1-low.jpg","44",300,200,new Date(),100,10);


        products.add(p1);
        products.add(p2);
        products.add(p3);
        products.add(p4);
        products.add(p5);
        products.add(p6);
        products.add(p7);
    }
}
