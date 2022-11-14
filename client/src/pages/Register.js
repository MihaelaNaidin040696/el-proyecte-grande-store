import classes from "./Register.module.css";

function Register() {
    return (
        <div className={classes.bodydiv}>
            <div className={classes.center}>
                <h1>CREATE AN ACCOUNT</h1>
                <form className={classes.formstyle}>
                    <input
                        className={classes.txtfield}
                        type="first-name"
                        placeholder="First Name"
                    />
                    <input
                        className={classes.txtfield}
                        type="name"
                        placeholder="Family Name"
                    />
                    <input
                        className={classes.txtfield}
                        type="email"
                        placeholder="E-mail"
                    />

                    <input
                        className={classes.txtfield}
                        type="password"
                        placeholder="Password"
                    />

                    <input
                        className={classes.inputstyle}
                        type="submit"
                        value="Signup"
                    />
                    <div className={classes.signuplink}>
                        <p>You are a member?</p>
                    </div>
                    <input
                        className={classes.inputstyle}
                        type="submit"
                        value="Login"
                    />
                </form>
            </div>
        </div>
    );
}

export default Register;
