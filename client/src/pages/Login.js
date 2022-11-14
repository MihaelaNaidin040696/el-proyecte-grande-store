import classes from "./Login.module.css";

function Login() {
    return (
        <div className={classes.bodydiv}>
            <div className={classes.center}>
                <h1>LOGIN TO YOUR ACCOUNT</h1>
                <form className={classes.formstyle}>
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

                    <a className={classes.forgotpass} href="#">
                        Forgot Password?
                    </a>

                    <input
                        className={classes.inputstyle}
                        type="submit"
                        value="Login"
                    />
                    <div className={classes.signuplink}>
                        <p>Not a member?</p>
                    </div>
                    <input
                        className={classes.inputstyle}
                        type="submit"
                        value="Signup"
                    />
                </form>
            </div>
        </div>
    );
}

export default Login;
