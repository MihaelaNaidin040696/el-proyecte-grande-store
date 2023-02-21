import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({name, children}) {
    return (
        <>
            <Navbar name={name}/>
            {children}
            <Footer/>
        </>
    );
}
