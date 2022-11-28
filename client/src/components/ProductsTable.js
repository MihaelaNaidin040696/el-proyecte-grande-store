import {useEffect, useState, Fragment} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import classes from './Table.module.css';
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';

export default function ProductsTable() {
    const [products, setProducts] = useState([]);
    const [editProductId, setEditProductId] = useState(null);
    const [addFormData, setAddFormData] = useState({
        productName: "",
        brand: "",
        referenceCode: "",
        descriptionColor: "",
        descriptionMaterial: "",
        descriptionInterior: "",
        descriptionSole: "",
        image: "",
        size: "",
        sellingPrice: "",
        purchasePrice: "",
        purchaseDate: "",
        totalStock: "",
        discount: "",
    });

    const [editFormData, setEditFormData] = useState({
        productName: "",
        brand: "",
        referenceCode: "",
        descriptionColor: "",
        descriptionMaterial: "",
        descriptionInterior: "",
        descriptionSole: "",
        image: "",
        size: "",
        sellingPrice: "",
        purchasePrice: "",
        purchaseDate: "",
        totalStock: "",
        discount: "",
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
            productName: addFormData.productName,
            brand: addFormData.brand,
            referenceCode: addFormData.referenceCode,
            descriptionColor: addFormData.descriptionColor,
            descriptionMaterial: addFormData.descriptionMaterial,
            descriptionInterior: addFormData.descriptionInterior,
            descriptionSole: addFormData.descriptionSole,
            image: addFormData.image,
            size: addFormData.size,
            sellingPrice: addFormData.sellingPrice,
            purchasePrice: addFormData.purchasePrice,
            purchaseDate: addFormData.purchaseDate,
            totalStock: addFormData.totalStock,
            discount: addFormData.discount,
        }
        const newProducts = [...products, newProduct];
        setProducts(newProducts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedProduct = {
            brand: editFormData.brand,
            productName: editFormData.productName,
            referenceCode: editFormData.referenceCode,
            descriptionColor: editFormData.descriptionColor,
            descriptionMaterial: editFormData.descriptionMaterial,
            descriptionInterior: editFormData.descriptionInterior,
            descriptionSole: editFormData.descriptionSole,
            image: editFormData.image,
            size: editFormData.size,
            sellingPrice: editFormData.sellingPrice,
            purchasePrice: editFormData.purchasePrice,
            purchaseDate: editFormData.purchaseDate,
            totalStock: editFormData.totalStock,
            discount: editFormData.discount,
        };
        const newProducts = [...products];
        const index = products.findIndex((product) => product.id === editProductId);
        newProducts[index] = editedProduct;
        setProducts(newProducts);
        setEditProductId(null);
    };

    const handleEditClick = (event, product) => {
        event.preventDefault();
        setEditProductId(product.id);
        const formValues = {
            brand: product.brand,
            productName: product.productName,
            referenceCode: product.referenceCode,
            descriptionColor: product.descriptionColor,
            descriptionMaterial: product.descriptionMaterial,
            descriptionInterior: product.descriptionInterior,
            descriptionSole: product.descriptionSole,
            image: product.image,
            size: product.size,
            sellingPrice: product.sellingPrice,
            purchasePrice: product.purchasePrice,
            purchaseDate: product.purchaseDate,
            totalStock: product.totalStock,
            discount: product.discount,
        }
        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditProductId(null);
    };

    const handleDeleteClick = (editProductId) => {
        const newProducts = [...products];
        const index = products.findIndex((product) => product.id === editProductId);
        newProducts.splice(index, 1);
        setProducts(newProducts);
    };

    useEffect(() => {
        fetch("http://localhost:8080/prod/products")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const products = [];
                for (const key in data) {
                    const product = {
                        id: key + 1, ...data[key]
                    };
                    products.push(product);
                }
                setProducts(products);
            })
    }, []);

    return (<div className={classes.Table}>
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
                    required="required"
                    placeholder="Enter a product name"
                    onChange={handleAddFormChange}
                />
                <Input
                    type="text"
                    name="brand"
                    required="required"
                    placeholder="Enter a product brand"
                    onChange={handleAddFormChange}
                />
                <Input
                    type="text"
                    name="referenceCode"
                    required="required"
                    placeholder="Enter a reference code"
                    onChange={handleAddFormChange}
                />
                <Input
                    type="text"
                    name="descriptionColor"
                    required="required"
                    placeholder="Enter a product color"
                    onChange={handleAddFormChange}
                />
                <Input
                    type="text"
                    name="descriptionMaterial"
                    required="required"
                    placeholder="Enter a product material"
                    onChange={handleAddFormChange}
                />
                <Input
                    type="text"
                    name="descriptionInterior"
                    required="required"
                    placeholder="Enter a product interior"
                    onChange={handleAddFormChange}
                />
                <Input
                    type="text"
                    name="descriptionSole"
                    required="required"
                    placeholder="Enter a product description sole"
                    onChange={handleAddFormChange}
                />
                <Input
                    type="file"
                    name="image"
                    required="required"
                    alt="image"
                    onChange={handleAddFormChange}
                />
                <Input
                    type="text"
                    name="size"
                    required="required"
                    placeholder="Enter a product size"
                    onChange={handleAddFormChange}
                />
                <Input
                    type="text"
                    name="sellingPrice"
                    required="required"
                    placeholder="Enter a selling price"
                    onChange={handleAddFormChange}
                />
                <Input
                    type="text"
                    name="purchasePrice"
                    required="required"
                    placeholder="Enter a purchase price"
                    onChange={handleAddFormChange}
                />
                <Input
                    type="date"
                    name="purchaseDate"
                    required="required"
                    placeholder="Enter a purchase date"
                    onChange={handleAddFormChange}
                />
                <Input
                    type="text"
                    name="totalStock"
                    required="required"
                    placeholder="Enter a product total stock"
                    onChange={handleAddFormChange}
                />
                <Input
                    type="text"
                    name="discount"
                    required="required"
                    placeholder="Enter a product discount"
                    onChange={handleAddFormChange}
                />
                <button type="submit" className={classes.status}
                        style={{background: 'rgb(145 254 159 / 47%)', color: 'green', border: 'none'}}>Add Product
                </button>
            </Box>
        </form>
        <br/>

        <h3>All Products</h3>
        <form onSubmit={handleEditFormSubmit} className={classes.Table}>
            <TableContainer
                component={Paper}
                style={{boxShadow: "0px 13px 20px 0px #80808029"}}
            >
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="left">Brand</TableCell>
                            <TableCell align="left">Reference Code</TableCell>
                            <TableCell align="left">Color</TableCell>
                            <TableCell align="left">Material</TableCell>
                            <TableCell align="left">Interior</TableCell>
                            <TableCell align="left">Sole</TableCell>
                            <TableCell align="left">Image</TableCell>
                            <TableCell align="left">Size</TableCell>
                            <TableCell align="left">Selling Price</TableCell>
                            <TableCell align="left">Purchase Price</TableCell>
                            <TableCell align="left">Purchase Date</TableCell>
                            <TableCell align="left">Total Stock</TableCell>
                            <TableCell align="left">Discount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{color: "white"}}>
                        {products.map((product, index) => (
                            <Fragment>
                                {editProductId === product.id ?
                                    (<EditableRow
                                        index={index}
                                        editProduct={product}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />)
                                    :
                                    (<ReadOnlyRow
                                        index={index}
                                        product={product}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />)}
                            </Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </form>
    </div>);
}