import { useState, useEffect } from "react";
import { Carousel, Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../slices/userSlice";
import PageHeader from "../PageHeader";
import categoryAPI from "../../services/categoryAPI";

function Navbar(props) {


    const { login, name } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    //CALL API
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        const getAllCategories = async () => {
            const res = await categoryAPI.getAll();
            setCategoryList(res.data.data);
        };

        getAllCategories();
    }, []);


    //XỬ LÝ DROPDOWN
    const [isDropdownShow, setIsDropdownShow] = useState(true);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleDropdownShow = () => setIsDropdownShow(!isDropdownShow);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


    //XỬ LÝ ĐĂNG XUẤT
    const handlelogOut = (e) => {
        dispatch(logout());
        navigate("/");
    };


    return (
        <>
            <div className="container-fluid mb-5">
                <div className="row border-top px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        {props.isAtHomePage ? (
                            <DropdownButton
                                id="dropdown-basic-button"
                                title="DANH MỤC SẢN PHẨM"
                                show={isDropdownShow}
                                onClick={handleDropdownShow}
                            >
                                {categoryList.map((category) => {
                                    return (
                                        <Dropdown.Item
                                            href="#/action-1"
                                            key={category.category_id}
                                        >
                                            {category.category_name}
                                        </Dropdown.Item>
                                    );
                                })}
                            </DropdownButton>
                        ) : (
                            <DropdownButton
                                id="dropdown-basic-button"
                                title="DANH MỤC SẢN PHẨM"
                            >
                                {categoryList.map((category) => {
                                    return (
                                        <Dropdown.Item
                                            href="#/action-1"
                                            key={category.category_id}
                                        >
                                            {category.category_name}
                                        </Dropdown.Item>
                                    );
                                })}
                            </DropdownButton>
                        )}
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <Link
                                to="/"
                                className="text-decoration-none d-block d-lg-none"
                            >
                                <h1 className="m-0 display-5 font-weight-semi-bold">
                                    <span className="text-primary font-weight-bold border px-3 mr-1">
                                        MY
                                    </span>
                                    Kitchen
                                </h1>
                            </Link>
                            <button
                                type="button"
                                className="navbar-toggler"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                                aria-expanded={!isNavCollapsed ? true : false}
                                onClick={handleNavCollapse}
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                className={`${
                                    isNavCollapsed ? "collapse" : ""
                                } navbar-collapse text-center`}
                                id="navbarCollapse"
                            >
                                <div className="navbar-nav mr-auto py-0">
                                    <Link
                                        to="/"
                                        className="nav-item nav-link active"
                                    >
                                        Trang chủ
                                    </Link>
                                    <Link
                                        to="/shopping"
                                        className="nav-item nav-link"
                                    >
                                        Mua sắm
                                    </Link>
                                </div>
                                {login ? (
                                    <div className="navbar-nav ml-auto py-0">
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                color="white"
                                                id="dropdown-basic"
                                                className="text-white"
                                            >
                                                {name}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    Thông tin cá nhân
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    onClick={handlelogOut}
                                                >
                                                    Đăng xuất
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                ) : (
                                    <div className="navbar-nav ml-auto py-0">
                                        <Link
                                            to="/login"
                                            className="nav-item nav-link"
                                        >
                                            Đăng nhập
                                        </Link>
                                        <Link
                                            to="/register"
                                            className="nav-item nav-link"
                                        >
                                            Đăng ký
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </nav>
                        {props.isAtHomePage ? (
                            <>
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="img-fluid"
                                            src="https://i.imgur.com/nCtH5CD.jpeg"
                                            alt=""
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="img-fluid"
                                            src="https://i.imgur.com/Jpa2VgT.jpeg"
                                            alt=""
                                        />
                                    </Carousel.Item>
                                </Carousel>
                                <div className="d-flex mt-4">
                                    <div className="col-md-6 px-0">
                                        <img
                                            src="https://www.bears.com.my/image/bears/image/data/LD5D6pNF1617851986.png"
                                            style={{ width: "100%" }}
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-md-6 px-0">
                                        <img
                                            src="https://www.bears.com.my/image/bears/image/data/LD5D6pNF1617851986.png"
                                            style={{ width: "100%" }}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
            {props.isAtHomePage ? <></> : <PageHeader />}
        </>
    );
}

export default Navbar;
