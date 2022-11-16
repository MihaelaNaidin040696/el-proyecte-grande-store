import {useEffect, useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import classes from './Table.module.css';

export default function ProductsTable() {
    const [loadedProducts, setLoadedProducts] = useState([]);

    // const [addNewProduct, setAddNewProduct] = useState({
    //     name: "",
    //     referenceCode: "",
    //     description: "",
    //     image: "",
    //     size: "",
    //     sellingPrice: "",
    //     purchasePrice: "",
    //     totalStock: "",
    //     discount: "",
    // });
    //
    // const [editFormData, setEditFormData] = useState({
    //     name: "",
    //     referenceCode: "",
    //     description: "",
    //     image: "",
    //     size: "",
    //     sellingPrice: "",
    //     purchasePrice: "",
    //     totalStock: "",
    //     discount: "",
    // });

    useEffect(() => {
        fetch("http://localhost:8080/prod/products")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const products = [];
                for (const key in data) {
                    const product = {
                        id: key + 1,
                        ...data[key]
                    };
                    products.push(product);
                }
                setLoadedProducts(products);
            })
    }, []);

    return (
        <div className={classes.Table}>
            <h3>All Products</h3>
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
                            <TableRow
                                key={index}
                                sx={{"&:last-child td, &:last-child th": {border: 0}}}
                            >
                                <TableCell scope="row">{product.name}</TableCell>
                                <TableCell align="left">{product.referenceCode}</TableCell>
                                <TableCell align="left">{product.description}</TableCell>
                                <TableCell align="left">{product.image}</TableCell>
                                <TableCell align="left">{product.size}</TableCell>
                                <TableCell align="left">{product.sellingPrice}</TableCell>
                                <TableCell align="left">{product.purchasePrice}</TableCell>
                                <TableCell align="left">{product.totalStock}</TableCell>
                                <TableCell align="left">{product.discount}</TableCell>

                                <TableCell align="left" className={classes.Details}>Edit</TableCell>
                                <TableCell align="left" className={classes.Details}>Delete</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}