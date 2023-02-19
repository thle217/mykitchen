import React from "react";
import { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../PageHeader";

function NavbarForHome() {
    const [isDropdownShow, setIsDropdownShow] = useState(true);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleDropdownShow = () => setIsDropdownShow(!isDropdownShow);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <div className="container-fluid mb-5">
            <div className="row border-top px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <DropdownButton id="dropdown-basic-button" title="DANH MỤC SẢN PHẨM" show={isDropdownShow} onClick={handleDropdownShow}>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <Link to="/" className="text-decoration-none d-block d-lg-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">MY</span>Kitchen</h1>
                        </Link>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" aria-expanded={!isNavCollapsed ? true : false} onClick={handleNavCollapse}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse text-center`} id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link to="/" className="nav-item nav-link active">Trang chủ</Link>
                                <Link to="/shopping" className="nav-item nav-link">Mua sắm</Link>
                            </div>
                            <div className="navbar-nav ml-auto py-0">
                                <Link to="/login" className="nav-item nav-link">Đăng nhập</Link>
                                <Link to="/register" className="nav-item nav-link">Đăng ký</Link>
                            </div>
                        </div>
                    </nav>
                    <div id="header-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" style={{height: '410px'}}>
                                <img className="img-fluid" src="https://i.imgur.com/nCtH5CD.jpeg" alt=""/>
                            </div>
                            <div className="carousel-item" style={{height: '410px'}}>
                                <img className="img-fluid" src="https://i.imgur.com/Jpa2VgT.jpeg" alt=""/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                            <div className="btn btn-dark" style={{width: '45px', height: '45px'}}>
                                <span className="carousel-control-prev-icon mb-n2"></span>
                            </div>
                        </a>
                        <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                            <div className="btn btn-dark" style={{width: '45px', height: '45px'}}>
                                <span className="carousel-control-next-icon mb-n2"></span>
                            </div>
                        </a>
                    </div>
                    <div className="d-flex mt-4">
                        <div className="col-md-6 px-0">
                            <img src="https://www.bears.com.my/image/bears/image/data/LD5D6pNF1617851986.png" style={{width: '100%'}} alt=""/>
                        </div>
                        <div className="col-md-6 px-0">
                            <img src="https://www.bears.com.my/image/bears/image/data/LD5D6pNF1617851986.png" style={{width: '100%'}} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function NavbarForOthers() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row border-top px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <DropdownButton id="dropdown-basic-button" title="DANH MỤC SẢN PHẨM">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <Link to="/" className="text-decoration-none d-block d-lg-none">
                                <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">MY</span>Kitchen</h1>
                            </Link>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" aria-expanded={!isNavCollapsed ? true : false} onClick={handleNavCollapse}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse text-center`} id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <Link to="/" className="nav-item nav-link active">Trang chủ</Link>
                                    <Link to="/shopping" className="nav-item nav-link">Mua sắm</Link>
                                </div>
                                <div className="navbar-nav ml-auto py-0">
                                    <Link to="/login" className="nav-item nav-link">Đăng nhập</Link>
                                    <Link to="/register" className="nav-item nav-link">Đăng ký</Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <PageHeader />
        </React.Fragment>
    )
}

function Navbar(props) {
    if(props.isAtHomePage) {
        return (
            <NavbarForHome />
        )
    }
    return (
        <NavbarForOthers />
    )
}

export default Navbar;