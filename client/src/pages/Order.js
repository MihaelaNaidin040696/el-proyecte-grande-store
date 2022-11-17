import classes from "./Order.module.css";

function Order() {
    return (
        <div className={classes.bodydiv}>
            <div className={classes.center}>
                <h1>COMPLETE THE ORDER</h1>

                <form className={classes.formstyle}>
                    <div className={classes.bulletPoints}>
                        <p>1. Checkout cart</p>
                    </div>
                    <div className={classes.bulletPoints}>
                        <p>2. Account details</p>
                    </div>

                    <input
                        className={classes.txtfield}
                        type="email"
                        placeholder="E-mail"
                    />
                    <div className={classes.bulletPoints}>
                        <p>3. Delivery details</p>
                    </div>

                    <input
                        className={classes.txtfield}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        className={classes.txtfield}
                        type="text"
                        placeholder="Family Name"
                    />
                    <input
                        className={classes.txtfield}
                        type="text"
                        placeholder="Phone"
                    />

                    <input
                        className={classes.txtfield}
                        type="text"
                        placeholder="Country"
                    />
                    <input
                        className={classes.txtfield}
                        type="text"
                        placeholder="City"
                    />
                    <input
                        className={classes.txtfield}
                        type="text"
                        placeholder="Address"
                    />
                    <input
                        className={classes.txtfield}
                        type="text"
                        placeholder="Postal Code"
                    />
                    <div className={classes.bulletPoints}>
                        <p>4. Delivery method</p>
                    </div>
                    <div className={classes.radios}>
                        <div>
                            <input
                                className={classes.inputRadio}
                                type="radio"
                                id="FAN COURIER"
                                name="fav_language"
                                value="FAN COURIER"
                            />
                            <label for="FAN COURIER">FAN COURIER</label>
                        </div>
                        <div>
                            <input
                                className={classes.inputRadio}
                                type="radio"
                                id="css"
                                name="fav_language"
                                value="DHL"
                            />
                            <label for="DHL">DHL</label>
                        </div>
                    </div>

                    <div className={classes.bulletPoints}>
                        <p>5. Payment method</p>
                    </div>
                    <div className={classes.radios}>
                        <div>
                            <input
                                className={classes.inputRadio}
                                type="radio"
                                id="FAN COURIER"
                                name="fav_language"
                                value="FAN COURIER"
                            />
                            <label for="FAN COURIER">Cash</label>
                        </div>
                        <div>
                            <input
                                className={classes.inputRadio}
                                type="radio"
                                id="css"
                                name="fav_language"
                                value="DHL"
                            />
                            <label for="DHL">Card</label>
                        </div>
                    </div>

                    <div className={classes.bulletPoints}>
                        <p>6. Products</p>
                    </div>
                    <p>SUBTOTAL:</p>
                    <p>Delivery:</p>
                    <p>TOTAL:</p>
                    <textarea placeholder="Observations about order?">

                    </textarea>

                    <input
                        className={classes.inputstyle}
                        type="submit"
                        value="Order"
                    />
                </form>
            </div>
        </div>
    );
}

export default Order;
