import classes from './Navbar.module.css';

export default function Navbar() {
    return (
        <div className={classes.container}>
            <nav>
                <label className={classes.logo}>RIGHT Sneakers Store</label>
                <ul className={classes.left}>
                    <li><a className={classes.active} href='/'>Home</a></li>
                    <li><a href='/sneakers'>Sneakers</a></li>
                    <li><a href='/clothes'>Clothes</a></li>
                </ul>
                <ul className={classes.right}>
                    <li><a href='/cart'>Cart</a></li>
                    <li><a href='/login'>Login</a></li>
                    <li><a href='/register'>Register</a></li>
                    <li><a href='/logout'>Logout</a></li>
                </ul>
            </nav>
        </div>
    );
}