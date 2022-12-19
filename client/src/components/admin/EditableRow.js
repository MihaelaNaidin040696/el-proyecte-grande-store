import classes from "./Table.module.css";
import Input from '@mui/material/Input';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export default function EditableRow({editProduct, index, handleEditFormChange, handleCancelClick}) {
    return (
        <TableRow key={index}>
            <TableCell>
                <Input
                    type="text"
                    name="productName"
                    required
                    placeholder="Enter a product name"
                    defaultValue={editProduct.productName}
                    onChange={handleEditFormChange}
                />
            </TableCell>
            <TableCell>
                <Input
                    type="text"
                    name="referenceCode"
                    required
                    placeholder="Enter a reference code"
                    defaultValue={editProduct.referenceCode}
                    onChange={handleEditFormChange}
                />
            </TableCell>
            <TableCell>
                <Input
                    type="text"
                    name="descriptionColor"
                    required
                    placeholder="Enter a product color"
                    defaultValue={editProduct.descriptionColor}
                    onChange={handleEditFormChange}
                />
            </TableCell>
            <TableCell>
                <Input
                    type="text"
                    name="descriptionMaterial"
                    required
                    placeholder="Enter a product material"
                    defaultValue={editProduct.descriptionMaterial}
                    onChange={handleEditFormChange}
                />
            </TableCell>
            <TableCell>
                <Input
                    type="text"
                    name="descriptionInterior"
                    required
                    placeholder="Enter a product interior"
                    defaultValue={editProduct.descriptionInterior}
                    onChange={handleEditFormChange}
                />
            </TableCell>
            <TableCell>
                <Input
                    type="text"
                    name="descriptionSole"
                    required
                    placeholder="Enter a product description sole"
                    defaultValue={editProduct.descriptionSole}
                    onChange={handleEditFormChange}
                />
            </TableCell>
            <TableCell>
                <Input
                    type="text"
                    name="size"
                    required
                    placeholder="Enter a product size"
                    defaultValue={editProduct.size}
                    onChange={handleEditFormChange}
                />
            </TableCell>
            <TableCell>
                <Input
                    type="text"
                    name="sellingPrice"
                    required
                    placeholder="Enter a selling price"
                    defaultValue={editProduct.sellingPrice}
                    onChange={handleEditFormChange}
                />
            </TableCell>
            <TableCell>
                <Input
                    type="text"
                    name="purchasePrice"
                    required
                    placeholder="Enter a purchase price"
                    defaultValue={editProduct.purchasePrice}
                    onChange={handleEditFormChange}
                />
            </TableCell>
            <TableCell>
                <Input
                    type="date"
                    name="purchaseDate"
                    required
                    placeholder="Enter a purchase date"
                    onChange={handleEditFormChange}
                />
            </TableCell>
            <TableCell>
                <Input
                    type="text"
                    name="totalStock"
                    required
                    placeholder="Enter a product total stock"
                    defaultValue={editProduct.totalStock}
                    onChange={handleEditFormChange}
                />
            </TableCell>
            <TableCell>
                <Input
                    type="text"
                    name="discount"
                    required
                    placeholder="Enter a product discount"
                    defaultValue={editProduct.discount}
                    onChange={handleEditFormChange}
                />
            </TableCell>
            <TableCell>
                <button type='submit' className={classes.status}
                        style={{background: 'rgb(145 254 159 / 47%)', color: 'green', border: 'none'}}>Save
                </button>
            </TableCell>
            <TableCell>
                <button type='button' className={classes.status}
                        style={{background: '#ffadad8f', color: 'red', border: 'none'}}
                        onClick={handleCancelClick}>Cancel
                </button>
            </TableCell>
        </TableRow>
    );
}