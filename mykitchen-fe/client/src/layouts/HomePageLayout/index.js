import React from "react";
import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function HomePageLayout({ children }) {
    return (
        <React.Fragment>
            <Topbar />
            <Navbar isAtHomePage={true} />
            {children}
            <Footer />
        </React.Fragment>
    )
}

export default HomePageLayout;