import { Outlet } from "react-router-dom";
import Header from "./header&footer/Header";
import Footer from "./header&footer/Footer";


const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default Layout