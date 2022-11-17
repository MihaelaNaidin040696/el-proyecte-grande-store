import classes from "./Table.module.css";

export default function EditableRow({editProduct, index, handleEditFormChange, handleCancelClick}) {
    return (
        <tr key={index}>
            <td>
                <input
                    type="text"
                    name="productName"
                    required="required"
                    placeholder="Enter a product name"
                    defaultValue={editProduct.productName}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="brand"
                    required="required"
                    placeholder="Enter a product brand"
                    defaultValue={editProduct.brand}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="referenceCode"
                    required="required"
                    placeholder="Enter a reference code"
                    defaultValue={editProduct.referenceCode}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="descriptionColor"
                    required="required"
                    placeholder="Enter a product color"
                    defaultValue={editProduct.descriptionColor}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="descriptionMaterial"
                    required="required"
                    placeholder="Enter a product material"
                    defaultValue={editProduct.descriptionMaterial}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="descriptionInterior"
                    required="required"
                    placeholder="Enter a product interior"
                    defaultValue={editProduct.descriptionInterior}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="descriptionSole"
                    required="required"
                    placeholder="Enter a product description sole"
                    defaultValue={editProduct.descriptionSole}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="file"
                    name="image"
                    required="required"
                    alt="image"
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="size"
                    required="required"
                    placeholder="Enter a product size"
                    defaultValue={editProduct.size}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="sellingPrice"
                    required="required"
                    placeholder="Enter a selling price"
                    defaultValue={editProduct.sellingPrice}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="purchasePrice"
                    required="required"
                    placeholder="Enter a purchase price"
                    defaultValue={editProduct.purchasePrice}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="date"
                    name="purchaseDate"
                    required="required"
                    placeholder="Enter a purchase date"
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="totalStock"
                    required="required"
                    placeholder="Enter a product total stock"
                    defaultValue={editProduct.totalStock}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="discount"
                    required="required"
                    placeholder="Enter a product discount"
                    defaultValue={editProduct.discount}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <button type='submit' className={classes.status}
                        style={{background: 'rgb(145 254 159 / 47%)', color: 'green', border: 'none'}}>Save
                </button>
            </td>
            <td>
                <button type='button' className={classes.status}
                        style={{background: '#ffadad8f', color: 'red', border: 'none'}}
                        onClick={handleCancelClick}>Cancel
                </button>
            </td>
        </tr>
    );
}