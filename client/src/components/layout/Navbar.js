import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

export default function Navbar() {
  const pages = [
      { text: 'Sneakers', href: '/sneakers' },
      { text: 'Clothes', href: '/clothes' }
    ];

  function toggleMenu() {
    document.container.classList.toggle('open');
  }

  return (
    <div className={classes.container}>
      <nav className={classes.navbar}>
        <button onClick={toggleMenu} className={classes.burger}></button>
        <Link to={'/'} className={classes.link}>
          <button className={classes.button}>Home</button>
        </Link>
        <div className={classes.dropdowns}>
          {pages.map((page) => (
            <div className={classes.dropdown} key={page.text}>
              <Link to={page.href} className={classes.link}>
                <button className={classes.button}key={page.text}>{page.text}</button>
              </Link>
              <div className={classes.dropdownmenu}>
                <button>Men</button>
                <button>Women</button>
              </div>
            </div>
          ))}
        </div>
        <Link to='/cart' className={classes.link}>
          <button className={classes.button}>Cart</button>
        </Link>
      </nav>
    </div>
  );
}