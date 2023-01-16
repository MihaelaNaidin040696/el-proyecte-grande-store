package com.codecool.sneakersStore.controller;

import com.codecool.sneakersStore.model.Brand;
import com.codecool.sneakersStore.model.Category;
import com.codecool.sneakersStore.model.Product;
import com.codecool.sneakersStore.model.Supplier;
import com.codecool.sneakersStore.payload.ProductRequest;
import com.codecool.sneakersStore.service.BrandService;
import com.codecool.sneakersStore.service.CategoryService;
import com.codecool.sneakersStore.service.ProductService;
import com.codecool.sneakersStore.service.SupplierService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/", methods = {RequestMethod.PUT, RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST})
@RestController
@RequestMapping("/admin")
public class AdminController {
    private final ProductService productService;
    private final CategoryService categoryService;
    private final BrandService brandService;
    private final SupplierService supplierService;

    public AdminController(ProductService productService, CategoryService categoryService, BrandService brandService, SupplierService supplierService) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.brandService = brandService;
        this.supplierService = supplierService;
    }

    @GetMapping
    public List<Product> getProducts() {
        return productService.getAllProducts();
    }

    @PutMapping("/edit-product/{prodId}")
    public Product updateProductById(@RequestBody ProductRequest productRequest, @PathVariable Long prodId) {
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

    @PostMapping("/add-new-product")
    public Product saveNewProduct(@RequestBody ProductRequest productRequest) {
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
//                productRequest.getImage(),
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
}
