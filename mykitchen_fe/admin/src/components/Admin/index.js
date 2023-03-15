import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { logout } from "../../slices/userSlice";

function Admin() {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate  = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            title: "BẠN CÓ MUỐN ĐĂNG XUẤT?",
            confirmButtonText: "Đăng xuất",
            showCancelButton: true,
            cancelButtonText: "Hủy",
            customClass: {
                title: "fs-5 text-dark",
                confirmButton: "bg-primary shadow-none",
                cancelButton: "bg-light shadow-none",
            },
        })
        .then((result) => {
            if (result.isConfirmed) {
                dispatch(logout());
                navigate("/");
            }
        });
    };


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
                                title={user.name}
                                menuVariant="light"
                            >
                                <NavDropdown.Item onClick={handleLogout}>
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
