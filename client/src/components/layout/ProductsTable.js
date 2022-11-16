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

export default function ProductsTable() {
    const [loadedProducts, setLoadedProducts] = useState([]);
    const [editProductId, setEditProductId] = useState(null);
    const [addNewProduct, setAddNewProduct] = useState({
        productName: "",
        referenceCode: "",
        description: "",
        image: "",
        size: "",
        sellingPrice: "",
        purchasePrice: "",
        totalStock: "",
        discount: "",
    });

    const [editProduct, setEditProduct] = useState({
        productName: "",
        referenceCode: "",
        description: "",
        image: "",
        size: "",
        sellingPrice: "",
        purchasePrice: "",
        totalStock: "",
        discount: "",
    });

    const handleAddNewProduct = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newProduct = {...addNewProduct};
        newProduct[fieldName] = fieldValue;
        setAddNewProduct(newProduct);
    };

    const handleEditFormProduct = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...editProduct};
        newFormData[fieldName] = fieldValue;
        setEditProduct(newFormData);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
            productName: addNewProduct.productName,
            referenceCode: addNewProduct.referenceCode,
            description: addNewProduct.description,
            image: addNewProduct.image,
            size: addNewProduct.size,
            sellingPrice: addNewProduct.sellingPrice,
            purchasePrice: addNewProduct.purchasePrice,
            totalStock: addNewProduct.totalStock,
            discount: addNewProduct.discount,
        }
        const newProducts = [...loadedProducts, newProduct];
        setLoadedProducts(newProducts);
    };

    const handleEditClick = (event, product) => {
        event.preventDefault();
        setEditProductId(product.id);

        const formValues = {
            productName: addNewProduct.productName,
            referenceCode: addNewProduct.referenceCode,
            description: addNewProduct.description,
            image: addNewProduct.image,
            size: addNewProduct.size,
            sellingPrice: addNewProduct.sellingPrice,
            purchasePrice: addNewProduct.purchasePrice,
            totalStock: addNewProduct.totalStock,
            discount: addNewProduct.discount,
        }

        setEditProduct(formValues);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedProduct = {
            productName: addNewProduct.productName,
            referenceCode: addNewProduct.referenceCode,
            description: addNewProduct.description,
            image: addNewProduct.image,
            size: addNewProduct.size,
            sellingPrice: addNewProduct.sellingPrice,
            purchasePrice: addNewProduct.purchasePrice,
            totalStock: addNewProduct.totalStock,
            discount: addNewProduct.discount,
        };

        const newProduct = [...loadedProducts];

        const index = loadedProducts.findIndex((product) => product.id === editProductId);

        newProduct[index] = editedProduct;

        setLoadedProducts(newProduct);
        setEditProductId(null);
    };

    const handleCancelClick = () => {
        setEditProductId(null);
    };

    const handleDeleteClick = (editProductId) => {
        const newProduct = [...loadedProducts];

        const index = loadedProducts.findIndex((product) => product.id === editProductId);

        newProduct.splice(index, 1);

        setLoadedProducts(newProduct);
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
                setLoadedProducts(products);
            })
    }, []);

    return (<div className={classes.Table}>
        <h3>Add New Product</h3>
        <form onSubmit={handleAddFormSubmit}>
            <input
                type="text"
                name="productName"
                required="required"
                placeholder="Enter a product name"
                onChange={handleAddNewProduct}
            />
            <input
                type="text"
                name="referenceCode"
                required="required"
                placeholder="Enter a reference code"
                onChange={handleAddNewProduct}
            />
            <input
                type="text"
                name="description"
                required="required"
                placeholder="Enter a product description"
                onChange={handleAddNewProduct}
            />
            <input
                type="file"
                name="image"
                required="required"
                alt="image"
                onChange={handleAddNewProduct}
            />
            <input
                type="text"
                name="size"
                required="required"
                placeholder="Enter a product size"
                onChange={handleAddNewProduct}
            />
            <input
                type="text"
                name="sellingPrice"
                required="required"
                placeholder="Enter a selling price"
                onChange={handleAddNewProduct}
            />
            <input
                type="text"
                name="purchasePrice"
                required="required"
                placeholder="Enter a purchase price"
                onChange={handleAddNewProduct}
            />
            <input
                type="text"
                name="totalStock"
                required="required"
                placeholder="Enter a product total stock"
                onChange={handleAddNewProduct}
            />
            <input
                type="text"
                name="discount"
                required="required"
                placeholder="Enter a product discount"
                onChange={handleAddNewProduct}
            />
            <button type="submit">Add Product</button>
        </form>

        <h3>All Products</h3>
        <form onSubmit={handleEditFormSubmit}>
            <TableContainer
                component={Paper}
                style={{boxShadow: "0px 13px 20px 0px #80808029"}}
            >
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="left">Reference Code</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="left">Image</TableCell>
                            <TableCell align="left">Size</TableCell>
                            <TableCell align="left">Selling Price</TableCell>
                            <TableCell align="left">Purchase Price</TableCell>
                            <TableCell align="left">Total Stock</TableCell>
                            <TableCell align="left">Discount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{color: "white"}}>
                        {loadedProducts.map((product, index) => (
                            <Fragment>
                                {editProductId === product.id ?
                                    (<EditableRow
                                        index={index}
                                        editProduct={product}
                                        handleEditFormProduct={handleEditFormProduct}
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