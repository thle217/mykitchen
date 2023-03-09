import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function Admin() {
    return (
        <div className="navbar-nav align-items-center ms-auto">
            <div className="nav-item dropdown">
                <div className="d-flex">
                    <div className="image-avatar">
                        <img
                            className="rounded-circle me-lg-2"
                            src="https://i.pinimg.com/550x/dd/25/df/dd25df36b75a4765cd4ddef557e9aafe.jpg"
                            alt=""
                            style={{ width: "40px", height: "40px" }}
                        />
                    </div>
                    <div>
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Tên"
                                menuVariant="light"
                            >
                                <NavDropdown.Item href="#action/3.2">
                                    Quản lý thông tin
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Đăng xuất
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
