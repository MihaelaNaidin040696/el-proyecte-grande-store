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
        Product p1 = new Product(1,"JORDAN","JORDAN 1 LOW","H67366",1,1,1,"Culori: Alb / Negru\n" +
                "\n" +
                "Materiale: Piele / Materiale sintetice\n" +
                "\n" +
                "Interior: Textile\n" +
                "\n" +
                "Talpa: Cauciuc vulcanizat durabil","https://sneakerindustry.ro/95359-category_products/1-low.jpg","41", (float) 455.4, (float) 250.3,new Date(),50, 10.0F);
        Product p2 = new Product(2,"JORDAN","JORDAN 1 LOW","CT8013-015\n" +
                "\n",1,3,3,"Culori:  Alb / Gri\n" +
                "\n" +
                "Materiale: Piele / Piele sintetica\n" +
                "\n" +
                "Interior: Textile\n" +
                "\n" +
                "Talpa: Cauciuc vulcanizat durabil","https://sneakerindustry.ro/95359-category_products/1-low.jpg","44",
                1200,700,new Date(),20,10);
        Product p3 = new Product(3,"JORDAN","JORDAN 1 LOW","CT8013-015\n" +
                "\n",1,3,3,"Culori:  Alb / Gri\n" +
                "\n" +
                "Materiale: Piele / Piele sintetica\n" +
                "\n" +
                "Interior: Textile\n" +
                "\n" +
                "Talpa: Cauciuc vulcanizat durabil","https://sneakerindustry.ro/95359-category_products/1-low.jpg","44",
                1200,700,new Date(),20,10);
        Product p4 = new Product(4,"JORDAN","JORDAN 1 LOW","CT8013-015\n" +
                "\n",1,3,3,"Culori:  Alb / Gri\n" +
                "\n" +
                "Materiale: Piele / Piele sintetica\n" +
                "\n" +
                "Interior: Textile\n" +
                "\n" +
                "Talpa: Cauciuc vulcanizat durabil","https://sneakerindustry.ro/95359-category_products/1-low.jpg","44",
                1200,700,new Date(),20,10);
        Product p5 = new Product(4,"JORDAN","JORDAN 1 LOW","CT8013-015\n" +
                "\n",1,3,3,"Culori:  Alb / Gri\n" +
                "\n" +
                "Materiale: Piele / Piele sintetica\n" +
                "\n" +
                "Interior: Textile\n" +
                "\n" +
                "Talpa: Cauciuc vulcanizat durabil","https://sneakerindustry.ro/95359-category_products/1-low.jpg","44",
                1200,700,new Date(),20,10);
        Product p6 = new Product(4,"JORDAN","JORDAN 1 LOW","CT8013-015\n" +
                "\n",1,3,3,"Culori:  Alb / Gri\n" +
                "\n" +
                "Materiale: Piele / Piele sintetica\n" +
                "\n" +
                "Interior: Textile\n" +
                "\n" +
                "Talpa: Cauciuc vulcanizat durabil","https://sneakerindustry.ro/95359-category_products/1-low.jpg","44",
                1200,700,new Date(),20,10);
        Product p7 = new Product(4,"JORDAN","JORDAN 1 LOW","CT8013-015\n" +
                "\n",1,3,3,"Culori:  Alb / Gri\n" +
                "\n" +
                "Materiale: Piele / Piele sintetica\n" +
                "\n" +
                "Interior: Textile\n" +
                "\n" +
                "Talpa: Cauciuc vulcanizat durabil","https://sneakerindustry.ro/95359-category_products/1-low.jpg","44",
                1200,700,new Date(),20,10);
        products.add(p1);
        products.add(p2);
        products.add(p3);
        products.add(p4);
        products.add(p5);
        products.add(p6);
        products.add(p7);
    }
}
