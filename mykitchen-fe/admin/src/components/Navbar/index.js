import Search from "../Search";
import Admin from "../Admin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faBars } from "@fortawesome/free-solid-svg-icons";

function NavbarForMainLayout() {
    return (
        <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
            <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                <h2 className="text-primary mb-0"><i><FontAwesomeIcon icon={faUserEdit}/></i></h2>
            </a>
            <a href="#" className="sidebar-toggler flex-shrink-0 text-light">
                <i><FontAwesomeIcon icon={faBars}/></i>
            </a>
            <Search />
            <Admin />
        </nav>
    )
}

function NavbarForSubLayout() {
    return (
        <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
            <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                <h2 className="text-primary mb-0"><i><FontAwesomeIcon icon={faUserEdit}/></i></h2>
            </a>
            <a href="#" className="sidebar-toggler flex-shrink-0 text-light">
                <i><FontAwesomeIcon icon={faBars}/></i>
            </a>
            <Admin />
        </nav>
    )
}

function Navbar(props) {
    if(props.isMainLayout) {
        return (
            <NavbarForMainLayout />
        )
    }
    else {
        return (
            <NavbarForSubLayout />
        )
    }
}

export default Navbar;