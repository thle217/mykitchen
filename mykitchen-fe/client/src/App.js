import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/scss/style.scss';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import '../node_modules/slick-carousel/slick/slick.css';
import { publicRoutes } from "./routes";
import HomePageLayout from "./layouts/HomePageLayout";
import OtherPagesLayout from "./layouts/OtherPagesLayout";
import LoginRegisterLayout from "./layouts/LoginRegisterLayout";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {
                        publicRoutes.map((route, index) => {
                            const Page = route.page;
                            let Layout = OtherPagesLayout;
                            
                            if(route.isHomePageLayout) {
                                Layout = HomePageLayout;
                            }
                            if(route.isLoginRegisterLayout) {
                                Layout = LoginRegisterLayout;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<Layout><Page /></Layout>}
                                />
                            )
                        })
                    }
                </Routes>
            </div>
        </Router>
    );
}

export default App;
