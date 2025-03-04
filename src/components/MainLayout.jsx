import {Outlet} from "react-router-dom";
import Header from "./organics/Header.jsx";
import Footer from "./organics/Footer.jsx";

const MainLayout = () => {
    return (
        <>
            <Header/>
                <main className="main">
                    <Outlet/>
                </main>
            <Footer/>
        </>
    );
};

export default MainLayout;