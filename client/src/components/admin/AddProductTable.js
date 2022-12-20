import Paper from "@mui/material/Paper";
import classes from './Table.module.css';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import {useEffect, useState} from "react";
import {MenuItem, TextField} from "@mui/material";

export default function AddProductTable({products, setProducts}) {
    const baseURL = "http://localhost:8080";
    const [addFormData, setAddFormData] = useState({
        categoryId: 0,
        brandId: 0,
        supplierId: 0,
        productName: "",
        referenceCode: "",
        descriptionColor: "",
        descriptionMaterial: "",
        descriptionInterior: "",
        descriptionSole: "",
        size: "",
        sellingPrice: 0,
        purchasePrice: 0,
        purchaseDate: null,
        totalStock: 0,
        discount: 0,
    });


    const [selectedCategory, setSelectedCategory] = useState(0);
    const [selectedBrand, setSelectedBrand] = useState(0);
    const [selectedSupplier, setSelectedSupplier] = useState(0);

    const menuClickedCategory = (event) => {
        event.preventDefault();
        setSelectedCategory(event.target.value);
    };

    const menuClickedBrand = (event) => {
        event.preventDefault();
        setSelectedBrand(event.target.value);
    };

    const menuClickedSupplier = (event) => {
        event.preventDefault();
        setSelectedSupplier(event.target.value);
    };

    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/category`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCategories(data);
            });

        fetch(`${baseURL}/brand`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setBrands(data);
            })

        fetch(`${baseURL}/supplier`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setSuppliers(data);
            })
    }, []);

    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
            categoryId: selectedCategory.valueOf(),
            brandId: selectedBrand.valueOf(),
            supplierId: selectedSupplier.valueOf(),
            productName: addFormData.productName,
            referenceCode: addFormData.referenceCode,
            descriptionColor: addFormData.descriptionColor,
            descriptionMaterial: addFormData.descriptionMaterial,
            descriptionInterior: addFormData.descriptionInterior,
            descriptionSole: addFormData.descriptionSole,
            size: addFormData.size,
            sellingPrice: addFormData.sellingPrice,
            purchasePrice: addFormData.purchasePrice,
            purchaseDate: addFormData.purchaseDate,
            totalStock: addFormData.totalStock,
            discount: addFormData.discount,
        }
        fetch(`${baseURL}/admin/add-new-product`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newProduct)
        })
            .then((response) => {
                return response.json();
            })
            .then(() => {
                const newProducts = [...products, newProduct];
                setProducts(newProducts);
            })
    };

    return (
        <div className={classes.Table}>
            <h3>Add New Product</h3>
            <form onSubmit={handleAddFormSubmit}>
                <Box
                    component={Paper}
                    sx={{
                        '& > :not(style)': {m: 1},
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField
                        id="standard-select-category"
                        select
                        required
                        label="Category"
                        defaultValue=""
                        value={selectedCategory}
                        helperText="Please select a category"
                        variant="standard"
                        onChange={menuClickedCategory}
                    >
                        {categories.map((category, index) => (
                            <MenuItem key={index} value={category.id}>
                                {category.name}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        id="standard-select-brand"
                        select
                        required
                        label="Brand"
                        defaultValue=""
                        value={selectedBrand}
                        name="brand"
                        helperText="Please select a brand"
                        variant="standard"
                        onChange={menuClickedBrand}
                    >
                        {brands.map((brand, index) => (
                            <MenuItem key={index} value={brand.id}>
                                {brand.name}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        id="standard-select-supplier"
                        select
                        required
                        label="Supplier"
                        defaultValue=""
                        value={selectedSupplier}
                        helperText="Please select a supplier"
                        variant="standard"
                        onChange={menuClickedSupplier}
                    >
                        {suppliers.map((supplier, index) => (
                            <MenuItem key={index} value={supplier.id}>
                                {supplier.name}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        id="standard-basic-name"
                        label="Name"
                        name="productName"
                        helperText="Please write product name"
                        required
                        onChange={handleAddFormChange}
                        variant="standard"/>

                    <TextField
                        id="standard-basic-ref-code"
                        label="Reference Code"
                        name="referenceCode"
                        helperText="Please write product reference code"
                        required
                        onChange={handleAddFormChange}
                        variant="standard"/>

                    <TextField
                        id="standard-basic-color"
                        label="Product Color"
                        name="descriptionColor"
                        helperText="Please write description color"
                        required
                        onChange={handleAddFormChange}
                        variant="standard"/>

                    <TextField
                        id="standard-basic-material"
                        label="Product Material"
                        name="descriptionMaterial"
                        helperText="Please write description material"
                        required
                        onChange={handleAddFormChange}
                        variant="standard"/>

                    <TextField
                        id="standard-basic-interior"
                        label="Product Interior"
                        name="descriptionInterior"
                        helperText="Please write description interior"
                        required
                        onChange={handleAddFormChange}
                        variant="standard"/>

                    <TextField
                        id="standard-basic-sole"
                        label="Product Sole"
                        name="descriptionSole"
                        helperText="Please write description sole"
                        required
                        onChange={handleAddFormChange}
                        variant="standard"/>

                    <TextField
                        id="standard-basic-size"
                        label="Size"
                        name="size"
                        helperText="Please write product size"
                        required
                        onChange={handleAddFormChange}
                        variant="standard"/>

                    <TextField
                        id="filled-number-selling-price"
                        label="Selling Price"
                        name="sellingPrice"
                        helperText="Please write selling price ($)"
                        required
                        type="number"
                        onChange={handleAddFormChange}
                        variant="standard"/>

                    <TextField
                        id="filled-number-purchase-price"
                        label="Purchase Price"
                        name="purchasePrice"
                        helperText="Please write purchase price ($)"
                        required
                        type="number"
                        onChange={handleAddFormChange}
                        variant="standard"/>

                    <TextField
                        id="filled-number-stock"
                        label="Stock"
                        name="totalStock"
                        helperText="Please write product stock"
                        required
                        type="number"
                        onChange={handleAddFormChange}
                        variant="standard"/>

                    <TextField
                        id="filled-number-discount"
                        label="Discount"
                        name="discount"
                        helperText="Please write product discount (%)"
                        required
                        type="number"
                        onChange={handleAddFormChange}
                        variant="standard"/>

                    <Input
                        type="date"
                        name="purchaseDate"
                        required
                        placeholder="Purchase Date"
                        onChange={handleAddFormChange}
                    />

                    <button type="submit" className={classes.status}
                            style={{background: 'rgb(145 254 159 / 47%)', color: 'green', border: 'none'}}>Add Product
                    </button>
                </Box>
            </form>
        </div>
    )
}