import {useState, Fragment} from "react";
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

export default function ProductsTable({products, setProducts}) {
    const baseURL = "http://localhost:8080/admin";
    const [editProductId, setEditProductId] = useState(null);
    const [editFormData, setEditFormData] = useState({
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

    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedProduct = {
            productName: editFormData.productName,
            referenceCode: editFormData.referenceCode,
            descriptionColor: editFormData.descriptionColor,
            descriptionMaterial: editFormData.descriptionMaterial,
            descriptionInterior: editFormData.descriptionInterior,
            descriptionSole: editFormData.descriptionSole,
            size: editFormData.size,
            sellingPrice: editFormData.sellingPrice,
            purchasePrice: editFormData.purchasePrice,
            purchaseDate: editFormData.purchaseDate,
            totalStock: editFormData.totalStock,
            discount: editFormData.discount,
        };
        fetch(`${baseURL}/edit-product/${editProductId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(editedProduct)
        })
            .then((response) => {
                return response.json();
            })
            .then(() => {
                const newProducts = [...products];
                newProducts[editProductId] = editedProduct;
                setProducts(newProducts);
                setEditProductId(null);
            })
    };

    const handleEditClick = (event, product) => {
        event.preventDefault();
        setEditProductId(product.id);
        const formValues = {
            productName: product.productName,
            referenceCode: product.referenceCode,
            descriptionColor: product.descriptionColor,
            descriptionMaterial: product.descriptionMaterial,
            descriptionInterior: product.descriptionInterior,
            descriptionSole: product.descriptionSole,
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

    return (<div className={classes.Table}>
        <h3>All Products</h3>
        <form onSubmit={handleEditFormSubmit} className={classes.Table}>
            <TableContainer
                component={Paper}
                style={{boxShadow: "0px 13px 20px 0px #80808029"}}
            >
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Show / Hide Product</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="left">Reference Code</TableCell>
                            <TableCell align="left">Color</TableCell>
                            <TableCell align="left">Material</TableCell>
                            <TableCell align="left">Interior</TableCell>
                            <TableCell align="left">Sole</TableCell>
                            <TableCell align="left">Size</TableCell>
                            <TableCell align="left">Selling Price</TableCell>
                            <TableCell align="left">Purchase Price</TableCell>
                            <TableCell align="left">Purchase Date</TableCell>
                            <TableCell align="left">Total Stock</TableCell>
                            <TableCell align="left">Discount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{color: "white"}}>
                        {products.map((product) => (
                            <Fragment key={product.id}>
                                {editProductId === product.id ?
                                    (<EditableRow
                                        index={product.id}
                                        editProduct={product}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />)
                                    :
                                    (<ReadOnlyRow
                                        index={product.id}
                                        product={product}
                                        handleEditClick={handleEditClick}
                                    />)}
                            </Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </form>
    </div>);
}