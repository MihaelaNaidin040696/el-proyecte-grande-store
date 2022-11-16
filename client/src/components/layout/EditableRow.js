
export default function EditableRow({ editProduct, index, handleEditFormProduct, handleCancelClick }) {
    return (
    <tr key={index}>
        <td>
            <input
                type="text"
                name="productName"
                required="required"
                placeholder="Enter a product name"
                value={editProduct.name || editProduct.productName}
                onChange={handleEditFormProduct}
            />
        </td>
        <td>
            <input
                type="text"
                name="referenceCode"
                required="required"
                placeholder="Enter a reference code"
                value={editProduct.referenceCode}
                onChange={handleEditFormProduct}
            />
        </td>
        <td>
            <input
                type="text"
                name="description"
                required="required"
                placeholder="Enter a product description"
                value={editProduct.description}
                onChange={handleEditFormProduct}
            />
        </td>
        <td>
            <input
                type="file"
                name="image"
                required="required"
                alt="image"
                // value={editProduct.image}
                onChange={handleEditFormProduct}
            />
        </td>
        <td>
            <input
                type="text"
                name="size"
                required="required"
                placeholder="Enter a product size"
                value={editProduct.size}
                onChange={handleEditFormProduct}
            />
        </td>
        <td>
            <input
                type="text"
                name="sellingPrice"
                required="required"
                placeholder="Enter a selling price"
                value={editProduct.sellingPrice}
                onChange={handleEditFormProduct}
            />
        </td>
        <td>
            <input
                type="text"
                name="purchasePrice"
                required="required"
                placeholder="Enter a purchase price"
                value={editProduct.purchasePrice}
                onChange={handleEditFormProduct}
            />
        </td>
        <td>
            <input
                type="text"
                name="totalStock"
                required="required"
                placeholder="Enter a product total stock"
                value={editProduct.totalStock}
                onChange={handleEditFormProduct}
            />
        </td>
        <td>
            <input
                type="text"
                name="discount"
                required="required"
                placeholder="Enter a product discount"
                value={editProduct.discount}
                onChange={handleEditFormProduct}
            />
        </td>
        <td>
            <button type='submit'>Save</button>
            <button type='button' onClick={handleCancelClick}>Cancel</button>
        </td>
    </tr>
    );
}