package com.codecool.sneakersStore.service;

import com.codecool.sneakersStore.model.Brand;
import com.codecool.sneakersStore.model.Category;
import com.codecool.sneakersStore.model.Order;
import com.codecool.sneakersStore.model.Product;
import com.codecool.sneakersStore.model.Supplier;
import com.codecool.sneakersStore.payload.ProductRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.TreeMap;

@Service
public class AdminService {
    private final ProductService productService;
    private final OrderService orderService;
    private final CategoryService categoryService;
    private final BrandService brandService;
    private final SupplierService supplierService;

    public AdminService(ProductService productService, OrderService orderService, CategoryService categoryService, BrandService brandService, SupplierService supplierService) {
        this.productService = productService;
        this.orderService = orderService;
        this.categoryService = categoryService;
        this.brandService = brandService;
        this.supplierService = supplierService;
    }

    public Product saveNewProduct(ProductRequest productRequest) {
        Category category = categoryService.getCategoryById(productRequest.getCategoryId());
        Brand brand = brandService.getBrandById(productRequest.getBrandId());
        Supplier supplier = supplierService.getSupplierById(productRequest.getSupplierId());

        Product product = new Product(
                category,
                brand,
                supplier,
                productRequest.getProductName(),
                productRequest.getReferenceCode(),
                productRequest.getDescriptionColor(),
                productRequest.getDescriptionMaterial(),
                productRequest.getDescriptionInterior(),
                productRequest.getDescriptionSole(),
                productRequest.getImage(),
                productRequest.getSize(),
                productRequest.getSellingPrice(),
                productRequest.getPurchasePrice(),
                productRequest.getPurchaseDate(),
                productRequest.getTotalStock(),
                productRequest.getDiscount(),
                true
        );
        return productService.saveNewProduct(product);
    }

    public List<Product> getProducts() {
        return productService.getAllProducts();
    }

    public Product updateProductById(ProductRequest productRequest, Long prodId) {
        Product product = productService.getProductById(prodId);

        if (productRequest.getCategoryId() != null || productRequest.getBrandId() != null || productRequest.getSupplierId() != null) {
            Category category = categoryService.getCategoryById(productRequest.getCategoryId());
            Brand brand = brandService.getBrandById(productRequest.getBrandId());
            Supplier supplier = supplierService.getSupplierById(productRequest.getSupplierId());
            product.setCategory(category);
            product.setBrand(brand);
            product.setSupplier(supplier);
        }

        product.setProductName(productRequest.getProductName());
        product.setReferenceCode(productRequest.getReferenceCode());
        product.setDescriptionColor(productRequest.getDescriptionColor());
        product.setDescriptionMaterial(productRequest.getDescriptionMaterial());
        product.setDescriptionInterior(productRequest.getDescriptionInterior());
        product.setDescriptionSole(productRequest.getDescriptionSole());
        product.setSize(productRequest.getSize());
        product.setSellingPrice(productRequest.getSellingPrice());
        product.setPurchasePrice(productRequest.getPurchasePrice());
        product.setPurchaseDate(productRequest.getPurchaseDate());
        product.setTotalStock(productRequest.getTotalStock());
        product.setDiscount(productRequest.getDiscount());
        product.setIsAvailable(productRequest.getIsAvailable());
        return productService.updateProduct(product);
    }

    private String convertDate(Date date) {
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        return dateFormat.format(date);
    }

    public TreeMap<String, Float> getExpensesDetails() {
        TreeMap<String, Float> expenses = new TreeMap<>();
        List<Product> products = productService.getAllProducts();
        for (Product product : products) {
            String strDate = convertDate(product.getPurchaseDate());
            if (expenses.containsKey(strDate)) {
                expenses.put(strDate, expenses.get(strDate) + product.getPurchasePrice());
            } else {
                expenses.put(strDate, product.getPurchasePrice());
            }
        }
        return expenses;
    }

    public TreeMap<String, Float> getSalesDetails() {
        TreeMap<String, Float> sales = new TreeMap<>();
        List<Order> orders = orderService.getAllOrders();
        for (Order order : orders) {
            String strDate = convertDate(order.getOrderDate());
            if (sales.containsKey(strDate)) {
                sales.put(strDate, sales.get(strDate) + Float.parseFloat(String.valueOf(order.getTotalPrice())));
            } else {
                sales.put(strDate, Float.parseFloat(String.valueOf(order.getTotalPrice())));
            }
        }
        return sales;
    }

    public Float getTotalExpenses() {
        float totalExpenses = 0;
        List<Product> products = productService.getAllProducts();
        for (Product product : products) {
            totalExpenses += product.getPurchasePrice();
        }
        return totalExpenses;
    }

    public Float getTotalSales() {
        float totalSales = (float) 0;
        List<Order> orders = orderService.getAllOrders();
        for (Order order : orders) {
            totalSales += Float.parseFloat(String.valueOf(order.getTotalPrice()));
        }
        return totalSales;
    }

}
