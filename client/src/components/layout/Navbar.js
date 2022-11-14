
import classes from './Navbar.module.css';
import {useState} from "react";

export default function Navbar() {
  return (
      <div>

      <nav>
          <script src="https://kit.fontawesome.com/a076d05399.js"></script>
          <input type="checkbox" className={classes.check}/>
              <label for="check" className={classes.checkbtn}>
                  <i className="fas fa-bars"></i>
              </label>
        <label className={classes.logo}>Design</label>
        <ul>
          <li><a className={classes.active} href="#">Home</a></li>
          <li><a href="#">Sneakers</a></li>
          <li><a href="#">Clothing</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
        </ul>
      </nav>


          <section>
          </section>
      </div>

  );
}