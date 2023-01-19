import classes from "./Navbar.module.css";
import {useState, useEffect} from "react";
import Modal from "../user/Modal";
import { NAME } from "../../STORE";
import { atom,useAtom } from "jotai";
import { redirect, useLocation } from "react-router-dom";


export default function Navbar() {
    const [mobileNavbar, setMobileNavbar] = useState(false);
    const [modal, setModal] = useState(false);
    const [username, setUsername] = useState("")
    const [atomName, setAtomName] = useAtom(NAME)
    const location = useLocation();



    function openModal() {
        setModal(true);
        document.body.style.overflow = "visible";
        setMobileNavbar(false);
    }


    // function test(){
    //     let res = localStorage.getItem("username")
    //     setUsername(localStorage.getItem(res))

    // }
    // useEffect(() => {
    //     console.log(localStorage.getItem("username"))
    //     test();

    // },[username])

     function logout() {
        localStorage.clear();
        if(location.pathname==="/"){
            window.location.reload()
        }else{
            redirect("/")
        }
      };


    return (<>
    <div className={classes.container}>
                 <nav>
                     <label className={classes.logo}>RIGHT Sneakers Store</label>
                    
                     <ul className={classes.left}>
                         <li>
                             <a className={classes.aNav} href="/">
                                 Home
                             </a>
                         </li>
                         <li>
                             <a className={classes.aNav} href="/sneakers">
                                 Sneakers
                             </a>
                         </li>
                         <li>
                             <a className={classes.aNav} href="/clothes">
                                 Clothes
                             </a>
                         </li>
                     </ul>
                     <label className={classes.hamburger}>
                         <i
                            className="fas fa-bars"
                            onClick={() => setMobileNavbar(!mobileNavbar)}
                        ></i>
                    </label>
                    {localStorage.getItem("username") ?
                        localStorage.getItem("username") === "admin" ?
                            <ul className={classes.right}>
                                <li>
                                    <a className={classes.aNav} href="/admin">
                                        DASHBOARD
                                    </a>
                                </li>
                                <li>
                                    <a className={classes.aNav}>
                                        {localStorage.getItem("username")}
                                    </a>
                                </li>
                                <li>
                                    <a className={classes.aNav} onClick={logout} href="/">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                            :
                            <ul className={classes.right}>
                                <li
                                    onClick={() => openModal()}
                                    className={classes.cartNav}
                                >
                                    <div>Cart</div>
                                </li>
                                <li>
                                    <a className={classes.aNav}>
                                        {localStorage.getItem("username")}
                                    </a>
                                </li>
                                <li>
                                    <a className={classes.aNav} onClick={logout} href="/">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        :
                        <ul className={classes.right}>
                            <li>
                                <a className={classes.aNav} href="/login">
                                    Login
                                </a>
                            </li>
                            <li>
                                <a className={classes.aNav} href="/register">
                                    Register
                                </a>
                            </li>
                        </ul>
                    }


                    {mobileNavbar && (
                        <div className={classes.mobileContainer}>
                            <label className={classes.hamburger}>
                                <i
                                    className="fas fa-close"
                                    onClick={() =>
                                        setMobileNavbar(!mobileNavbar)
                                    }
                                ></i>
                            </label>
                            <ul className={classes.mobileNav}>
                                <li>
                                    <a className={classes.aNav} href="/">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={classes.aNav}
                                        href="/sneakers"
                                    >
                                        Sneakers
                                    </a>
                                </li>
                                <li>
                                    <a className={classes.aNav} href="/clothes">
                                        Clothes
                                    </a>
                                </li>
                                <li
                                    onClick={() => openModal()}
                                    className={classes.cartNav}
                                >
                                    <div>Cart</div>
                                </li>
                                <li>
                                    <a className={classes.aNav} href="/login">
                                        Login
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={classes.aNav}
                                        href="/register"
                                    >
                                        Register
                                    </a>
                                </li>
                                <li>
                                    <a className={classes.aNav} href="/logout">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </nav>
            </div>
            {modal && <Modal setModal={setModal} />}

            </>
        // <>
        // {localStorage.getItem("username")
        //     ? (<>
        //      <div className={classes.container}>
        //         <nav>
        //             <label className={classes.logo}>RIGHT Sneakers Store</label>

        //             <ul className={classes.left}>
        //                 <li>
        //                     <a className={classes.aNav} href="/">
        //                         Home
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a className={classes.aNav} href="/sneakers">
        //                         Sneakers
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a className={classes.aNav} href="/clothes">
        //                         Clothes
        //                     </a>
        //                 </li>
        //             </ul>
        //             <label className={classes.hamburger}>
        //                 <i
        //                     className="fas fa-bars"
        //                     onClick={() => setMobileNavbar(!mobileNavbar)}
        //                 ></i>
        //             </label>
        //             <ul className={classes.right}>
        //                 <li
        //                     onClick={() => openModal()}
        //                     className={classes.cartNav}
        //                 >
        //                     <div>Cart</div>
        //                 </li>

        //                 <li>
        //                     <a className={classes.aNav}>
        //                         {/* Login */}
        //                         {localStorage.getItem("username")}
        //                     </a>
        //                 </li>
        //                 {/* <li>
        //                     <a className={classes.aNav} href="/register">
        //                         Register
        //                     </a>
        //                 </li> */}
        //                 <li>
        //                     <a className={classes.aNav} onClick={logout} href="/">
        //                         Logout
        //                     </a>
        //                 </li>
        //             </ul>


        //             {mobileNavbar && (
        //                 <div className={classes.mobileContainer}>
        //                     <label className={classes.hamburger}>
        //                         <i
        //                             className="fas fa-close"
        //                             onClick={() =>
        //                                 setMobileNavbar(!mobileNavbar)
        //                             }
        //                         ></i>
        //                     </label>
        //                     <ul className={classes.mobileNav}>
        //                         <li>
        //                             <a className={classes.aNav} href="/">
        //                                 Home
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a
        //                                 className={classes.aNav}
        //                                 href="/sneakers"
        //                             >
        //                                 Sneakers
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className={classes.aNav} href="/clothes">
        //                                 Clothes
        //                             </a>
        //                         </li>
        //                         <li
        //                             onClick={() => openModal()}
        //                             className={classes.cartNav}
        //                         >
        //                             <div>Cart</div>
        //                         </li>
        //                         <li>
        //                             <a className={classes.aNav}>
        //                                  {atomName}
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a
        //                                 className={classes.aNav}
        //                                 href="/register"
        //                             >
        //                                 Register
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className={classes.aNav} onClick={logout}>
        //                                 Logout
        //                             </a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             )}
        //         </nav>
        //     </div>
        //     {modal && <Modal setModal={setModal} />}

        //     </>)


        //     :


        //     (<>
        //         <div className={classes.container}>
        //         <nav>
        //             <label className={classes.logo}>RIGHT Sneakers Store</label>

        //             <ul className={classes.left}>
        //                 <li>
        //                     <a className={classes.aNav} href="/">
        //                         Home
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a className={classes.aNav} href="/sneakers">
        //                         Sneakers
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a className={classes.aNav} href="/clothes">
        //                         Clothes
        //                     </a>
        //                 </li>
        //             </ul>
        //             <label className={classes.hamburger}>
        //                 <i
        //                     className="fas fa-bars"
        //                     onClick={() => setMobileNavbar(!mobileNavbar)}
        //                 ></i>
        //             </label>
        //             <ul className={classes.right}>
        //                 <li
        //                     onClick={() => openModal()}
        //                     className={classes.cartNav}
        //                 >
        //                     <div>Cart</div>
        //                 </li>

        //                 <li>
        //                     <a className={classes.aNav} href="/login">
        //                         Login
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a className={classes.aNav} href="/register">
        //                         Register
        //                     </a>
        //                 </li>
        //                 {/* <li>
        //                     <a className={classes.aNav} href="/logout">
        //                         Logout
        //                     </a>
        //                 </li> */}
        //             </ul>


        //             {mobileNavbar && (
        //                 <div className={classes.mobileContainer}>
        //                     <label className={classes.hamburger}>
        //                         <i
        //                             className="fas fa-close"
        //                             onClick={() =>
        //                                 setMobileNavbar(!mobileNavbar)
        //                             }
        //                         ></i>
        //                     </label>
        //                     <ul className={classes.mobileNav}>
        //                         <li>
        //                             <a className={classes.aNav} href="/">
        //                                 Home
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a
        //                                 className={classes.aNav}
        //                                 href="/sneakers"
        //                             >
        //                                 Sneakers
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className={classes.aNav} href="/clothes">
        //                                 Clothes
        //                             </a>
        //                         </li>
        //                         <li
        //                             onClick={() => openModal()}
        //                             className={classes.cartNav}
        //                         >
        //                             <div>Cart</div>
        //                         </li>
        //                         <li>
        //                             <a className={classes.aNav} href="/login">
        //                                 Login
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a
        //                                 className={classes.aNav}
        //                                 href="/register"
        //                             >
        //                                 Register
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className={classes.aNav} href="/logout">
        //                                 Logout
        //                             </a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             )}
        //         </nav>
        //     </div>
        //     {modal && <Modal setModal={setModal} />}

        //     </>)
        // }
        //           </>
    );
}
