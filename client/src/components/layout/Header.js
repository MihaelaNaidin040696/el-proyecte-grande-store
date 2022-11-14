import { Link } from 'react-router-dom';
import classes from "./Header.module.css";

function Header() { 
    return (
        <header className={classes.header}>
            <div>
                <ul className={classes.ul}>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            </div>
        </header>
    );

}

export default Header;