import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faTh, faUser, faList, faPercent } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
    return (
        <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-secondary navbar-dark">
                <a href="home-controller.php" className="navbar-brand mx-4 mb-3">
                    <h3 className="text-primary">MY KITCHEN</h3>
                </a>
                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        <img className="rounded-circle" src="https://i.pinimg.com/550x/dd/25/df/dd25df36b75a4765cd4ddef557e9aafe.jpg" alt="" style={{width: '40px', height: '40px'}}/>
                        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                        <h6 className="mb-0 text-dark">Vai trò</h6>
                        <span>username</span>
                    </div>
                </div>
                <div className="navbar-nav w-100">
                    <NavLink to="/" className="nav-item nav-link"><i className="me-2"><FontAwesomeIcon icon={faHouse}/></i>Thống kê</NavLink>
                    <NavLink to="/brand-list" className="nav-item nav-link"><i className="me-2"><FontAwesomeIcon icon={faTh}/></i>Thương hiệu</NavLink>
                    <NavLink to="/category-list" className="nav-item nav-link"><i className="me-2"><FontAwesomeIcon icon={faTh}/></i>Loại sản phẩm</NavLink>
                    <NavLink to="/product-list" className="nav-item nav-link"><i className="me-2"><FontAwesomeIcon icon={faTh}/></i>Sản phẩm</NavLink>
                    <NavLink to="/discount-list" className="nav-item nav-link"><i className="me-2"><FontAwesomeIcon icon={faPercent}/></i>Khuyến mãi</NavLink>
                    <NavLink to="/user-list" className="nav-item nav-link"><i className="me-2"><FontAwesomeIcon icon={faUser}/></i>Người dùng</NavLink>
                    <NavLink to="/order-list" className="nav-item nav-link"><i className="me-2"><FontAwesomeIcon icon={faList}/></i>Đơn hàng</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar;