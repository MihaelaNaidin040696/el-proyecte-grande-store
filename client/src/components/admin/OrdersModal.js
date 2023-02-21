import classes from './OrdersModal.module.css';
import React, {useEffect, useState} from "react";
import moment from "moment/moment";

export default function OrdersModal({setModal, order}) {

    function closeModal() {
        setModal(false);
        document.body.style.overflow = 'visible';
    }

    const [pageHeight, setPageHeight] = useState(document.body.clientHeight - 80);

    useEffect(() => {
        setPageHeight(document.body.clientHeight - 80);
    },[pageHeight])

    return (
        <div className={classes.container} style={{height: pageHeight}}>
            <div>
                    <span className={classes.close_btn}>
                        <i className="fas fa-close" onClick={closeModal}></i>
                    </span>
            </div>
            <div className={classes.box}>
                <div>
                    <h3 style={{marginLeft: '50px', fontStyle: 'oblique'}}>CUSTOMER</h3>
                    <div className={classes.details}>
                        <p><strong>Name:</strong> {order.first_name} {order.last_name}</p>
                        <p><strong>Email:</strong> {order.email}</p>
                        <p><strong>Phone number:</strong> {order.phone_number}</p>
                    </div>
                </div>
                <div>
                    <h3 style={{marginLeft: '50px', fontStyle: 'oblique'}}>DELIVERY</h3>
                    <div className={classes.details}>
                        <p><strong>Country:</strong> {order.country}</p>
                        <p><strong>City:</strong> {order.city}</p>
                        <p><strong>Address:</strong> {order.address}</p>
                        <p><strong>Postal Code:</strong> {order.postal_code}</p>
                        <p><strong>Notes:</strong> {order.notes}</p>
                    </div>
                </div>
                <div>
                    <h3 style={{marginLeft: '50px', fontStyle: 'oblique'}}>ORDER</h3>
                    <div className={classes.details}>
                        <p><strong>Order Date:</strong> {moment(order.orderDate).format('DD-MM-YYYY')}</p>
                        <p><strong>Total Amount:</strong> {order.totalPrice}</p>
                        <p><strong>Tracking ID:</strong> {order.trackingId}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}