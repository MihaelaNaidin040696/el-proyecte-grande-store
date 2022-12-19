import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import moment from 'moment';
import classes from './Table.module.css';
import {Checkbox} from "@mui/material";
import {pink} from "@mui/material/colors";

export default function ReadOnlyRow({ product, index, handleEditClick}) {
    return (
        <TableRow
            key={index}
            sx={{"&:last-child td, &:last-child th": {border: 0}}}
        >
            <TableCell>
                <Checkbox
                defaultChecked
                sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                        color: pink[600],
                    },
                }}
            /></TableCell>
            <TableCell scope="row">{product.productName}</TableCell>
            <TableCell align="left">{product.referenceCode}</TableCell>
            <TableCell align="left">{product.descriptionColor}</TableCell>
            <TableCell align="left">{product.descriptionMaterial}</TableCell>
            <TableCell align="left">{product.descriptionInterior}</TableCell>
            <TableCell align="left">{product.descriptionSole}</TableCell>
            <TableCell align="left">{product.size}</TableCell>
            <TableCell align="left">{product.sellingPrice}</TableCell>
            <TableCell align="left">{product.purchasePrice}</TableCell>
            <TableCell align="left">{moment(product.purchaseDate).format('DD-MM-YYYY')}</TableCell>
            <TableCell align="left">{product.totalStock}</TableCell>
            <TableCell align="left">{product.discount}</TableCell>

            <TableCell align="left">
                <button type='button' className={classes.status} style={{background: 'rgb(145 254 159 / 47%)', color: 'green', border: 'none'}} onClick={(event) => handleEditClick(event, product)}>Edit</button>
            </TableCell>
        </TableRow>
    )
}