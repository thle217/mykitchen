import { Link } from "react-router-dom";

function Admin() {
    return (
        <div className="navbar-nav align-items-center ms-auto">
            <div className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    <img className="rounded-circle me-lg-2" src="https://i.pinimg.com/550x/dd/25/df/dd25df36b75a4765cd4ddef557e9aafe.jpg" alt="" style={{width: '40px', height: '40px'}}/>
                    <span className="d-none d-lg-inline-flex">Tên</span>
                </Link>
                <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                    <a href="login-logout-controller.php?logout=true" className="dropdown-item">Đăng xuất</a>
                </div>
            </div>
        </div>
    )
}

export default Admin;