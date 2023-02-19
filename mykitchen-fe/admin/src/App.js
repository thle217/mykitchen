import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { privateRoutes } from "./routes";
import './assets/scss/bootstrap.min.scss';
import './assets/scss/style.scss';
import MainLayout from "./layouts/MainLayout";
import SubLayout from "./layouts/SubLayout";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {
                        privateRoutes.map((route, index) => {
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
                    }
                </Routes>
            </div>
        </Router>
    );
}

export default App;