import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, adminRoutes, staffRoutes } from "./routes";
import { useSelector } from "react-redux";
import './assets/scss/bootstrap.min.scss';
import './assets/scss/style.scss';
import MainLayout from "./layouts/MainLayout";
import SubLayout from "./layouts/SubLayout";

function App() {

    const user = useSelector(state => state.user);
    console.log('user bên app', user);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {
                        user.login && user.role_id === 3
                        ?
                        adminRoutes.map((route, index) => {
                            const Page = route.page;
                            let Layout = MainLayout;
                            
                            if(!route.isMainLayout) {
                                Layout = SubLayout;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<Layout><Page /></Layout>}
                                />
                            )
                        })
                        : user.login && user.role_id === 2
                        ?
                        staffRoutes.map((route, index) => {
                            const Page = route.page;
                            let Layout = MainLayout;
                            
                            if(!route.isMainLayout) {
                                Layout = SubLayout;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<Layout><Page /></Layout>}
                                />
                            )
                        })
                        :
                        publicRoutes.map((route, index) => {
                            const Page = route.page

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<Page />}
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