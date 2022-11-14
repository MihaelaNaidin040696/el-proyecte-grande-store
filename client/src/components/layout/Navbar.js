import classes from './Navbar.module.css';
import {useState} from "react";

export default function Navbar() {
    const[mobileNavbar, setMobileNavbar] = useState(false);

    return (
        <div className={classes.container}>
            <nav>
                <label className={classes.logo}>RIGHT Sneakers Store</label>
                <ul className={classes.left}>
                    <li><a className={classes.aNav} href='/'>Home</a></li>
                    <li><a className={classes.aNav} href='/sneakers'>Sneakers</a></li>
                    <li><a className={classes.aNav} href='/clothes'>Clothes</a></li>
                </ul>
                <label className={classes.hamburger}>
                     <i className="fas fa-bars" onClick={()=>setMobileNavbar(!mobileNavbar)}></i>
                </label>
                <ul className={classes.right}>
                    <li><a className={classes.aNav} href='/cart'>Cart</a></li>
                    <li><a className={classes.aNav} href='/login'>Login</a></li>
                    <li><a className={classes.aNav} href='/register'>Register</a></li>
                    <li><a className={classes.aNav} href='/logout'>Logout</a></li>
                </ul>
                {mobileNavbar && <div className={classes.mobileContainer}>
                    <label className={classes.hamburger}>
                        <i className="fas fa-close" onClick={()=>setMobileNavbar(!mobileNavbar)}></i>
                    </label>
                    <ul className={classes.mobileNav}>
                        <li><a className={classes.aNav} href='/'>Home</a></li>
                        <li><a className={classes.aNav} href='/sneakers'>Sneakers</a></li>
                        <li><a className={classes.aNav} href='/clothes'>Clothes</a></li>
                        <li><a className={classes.aNav} href='/cart'>Cart</a></li>
                        <li><a className={classes.aNav} href='/login'>Login</a></li>
                        <li><a className={classes.aNav} href='/register'>Register</a></li>
                        <li><a className={classes.aNav}href='/logout'>Logout</a></li>
                    </ul>
                </div>}
            </nav>
        </div>
    );
}