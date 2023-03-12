import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/scss/style.scss";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "../node_modules/slick-carousel/slick/slick.css";
import { ToastContainer } from "react-toastify";
import { publicRoutes, privateRoutes } from "./routes";
import HomePageLayout from "./layouts/HomePageLayout";
import OtherPagesLayout from "./layouts/OtherPagesLayout";
import LoginRegisterLayout from "./layouts/LoginRegisterLayout";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

function App() {

    const user = useSelector(state => state.user);

    return (
        <>
            <Router>
                <div className="App">
                    <Routes>
                        {
                            user.login
                            ?
                            privateRoutes.map((route, index) => {
                                const Page = route.page;
                                let Layout = OtherPagesLayout;

                                if (route.isHomePageLayout) {
                                    Layout = HomePageLayout;
                                }
                                if (route.isLoginRegisterLayout) {
                                    Layout = LoginRegisterLayout;
                                }

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })
                            :
                            publicRoutes.map((route, index) => {
                                const Page = route.page;
                                let Layout = OtherPagesLayout;

                                if (route.isHomePageLayout) {
                                    Layout = HomePageLayout;
                                }
                                if (route.isLoginRegisterLayout) {
                                    Layout = LoginRegisterLayout;
                                }

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })
                        }
                    </Routes>
                </div>
            </Router>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
        </>
    );
}

export default App;
