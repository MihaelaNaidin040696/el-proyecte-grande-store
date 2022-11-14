import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

function Layout(props) {
    return (
        <div>
            <Header/>
            <Navbar/>

            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;
