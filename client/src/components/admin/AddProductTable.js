import Paper from "@mui/material/Paper";
import classes from './Table.module.css';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import {useState} from "react";

export default function AddProductTable({products, setProducts}) {
    const baseURL = "http://localhost:8080/admin";
    const [addFormData, setAddFormData] = useState({
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
        fetch(`${baseURL}/add-new-product`, {
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
                    <Input
                        type="text"
                        name="productName"
                        required
                        placeholder="Enter a product name"
                        onChange={handleAddFormChange}
                    />
                    <Input
                        type="text"
                        name="referenceCode"
                        required
                        placeholder="Enter a reference code"
                        onChange={handleAddFormChange}
                    />
                    <Input
                        type="text"
                        name="descriptionColor"
                        required
                        placeholder="Enter a product color"
                        onChange={handleAddFormChange}
                    />
                    <Input
                        type="text"
                        name="descriptionMaterial"
                        required
                        placeholder="Enter a product material"
                        onChange={handleAddFormChange}
                    />
                    <Input
                        type="text"
                        name="descriptionInterior"
                        required
                        placeholder="Enter a product interior"
                        onChange={handleAddFormChange}
                    />
                    <Input
                        type="text"
                        name="descriptionSole"
                        required
                        placeholder="Enter a product description sole"
                        onChange={handleAddFormChange}
                    />
                    <Input
                        type="text"
                        name="size"
                        required
                        placeholder="Enter a product size"
                        onChange={handleAddFormChange}
                    />
                    <Input
                        type="number"
                        name="sellingPrice"
                        required
                        placeholder="Enter a selling price"
                        onChange={handleAddFormChange}
                    />
                    <Input
                        type="number"
                        name="purchasePrice"
                        required
                        placeholder="Enter a purchase price"
                        onChange={handleAddFormChange}
                    />
                    <Input
                        type="date"
                        name="purchaseDate"
                        required
                        placeholder="Enter a purchase date"
                        onChange={handleAddFormChange}
                    />
                    <Input
                        type="number"
                        name="totalStock"
                        required
                        placeholder="Enter a product total stock"
                        onChange={handleAddFormChange}
                    />
                    <Input
                        type="number"
                        name="discount"
                        required
                        placeholder="Enter a product discount"
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