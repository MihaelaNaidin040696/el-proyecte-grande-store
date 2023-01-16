import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import classes from './Table.module.css';
import {useEffect, useState} from "react";
import moment from "moment/moment";
import {Link} from "@mui/material";

export default function OrdersTable() {
    const baseURL = "http://localhost:8080";
    const [orders, setOrders] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetch(`${baseURL}/order/get-order`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setOrders(data);
                console.log(data);
            })
    }, []);

    function openModal() {
        setModal(true);
        document.body.style.overflow = "visible";
    }

    return (
        <div className={classes.Table}>
            <h3>Recent Orders</h3>
                <TableContainer
                    component={Paper}
                    style={{boxShadow: "0px 13px 20px 0px #80808029"}}
                >
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Tracking ID</TableCell>
                                <TableCell align="left">Order Date</TableCell>
                                <TableCell align="left">Total Price</TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody style={{color: "white"}}>
                            {orders.map((order) => (
                                <TableRow
                                    key={order.id}
                                    sx={{"&:last-child td, &:last-child th": {border: 0}}}
                                >
                                    <TableCell align="left">{order.trackingId}</TableCell>
                                    <TableCell align="left">{moment(order.orderDate).format('DD-MM-YYYY')}</TableCell>
                                    <TableCell align="left">{order.totalPrice}</TableCell>
                                    <TableCell align="left" className={classes.Details}>
                                        <Link onClick={openModal}>Details</Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
        </div>
    );
}