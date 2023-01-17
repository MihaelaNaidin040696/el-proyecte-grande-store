import classes from './OrdersModal.module.css';
import React from "react";

export default function OrdersModal({setModal, order}) {

    function closeModal() {
        setModal(false);
    }

    return (
        <div className={classes.container}>
            <div className={classes.modalContainer}>
                <>
                    <div className={classes.close_container}>
                        <h1 className={classes.wrapper}>Order Details</h1>
                        <span className={classes.close_btn}>
                            <i className="fas fa-close" onClick={closeModal}></i>
                        </span>
                    </div>
                    <div className={classes.project}>
                        <div className={classes.shop}>
                            <div className={classes.content}>
                                <h3>{order.first_name}</h3>
                                <h3>{order.last_name}</h3>
                                <h4>{order.totalPrice} $</h4>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
}