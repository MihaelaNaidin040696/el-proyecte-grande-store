import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";


export default function ReadOnlyRow({ product, index, handleEditClick, handleDeleteClick }) {
    return (
        <TableRow
            key={index}
            sx={{"&:last-child td, &:last-child th": {border: 0}}}
        >
            <TableCell scope="row">{product.name || product.productName}</TableCell>
            <TableCell align="left">{product.referenceCode}</TableCell>
            <TableCell align="left">{product.description}</TableCell>
            <TableCell align="left">
                <img
                    style={{height: 'auto', maxWidth: '50%'}}
                    src={product.image}
                    alt={product.name || product.productName}
                />
            </TableCell>
            <TableCell align="left">{product.size}</TableCell>
            <TableCell align="left">{product.sellingPrice}</TableCell>
            <TableCell align="left">{product.purchasePrice}</TableCell>
            <TableCell align="left">{product.totalStock}</TableCell>
            <TableCell align="left">{product.discount}</TableCell>

            <TableCell align="left">
                <button type='button' onClick={(event) => handleEditClick(event, product)}>Edit</button>
            </TableCell>
            <TableCell align="left">
                <button type='button' onClick={() => handleDeleteClick(product.id)}>Delete</button>
            </TableCell>
        </TableRow>
    )
}