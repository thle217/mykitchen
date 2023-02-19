import React from "react";
import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function OtherPagesLayout({ children }) {
    return (
        <React.Fragment>
            <Topbar />
            <Navbar />
            {children}
            <Footer />
        </React.Fragment>
    )
}

export default OtherPagesLayout;