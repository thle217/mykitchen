import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "./SearchInput";

function Topbar() {
    const user = useSelector(state => state.user);

    return (
        <div className="container-fluid">
            <div className="row align-items-center py-3 px-xl-5 mb-3">
                <div className="col-lg-3 d-none d-lg-block">
                    <Link to="/" className="text-decoration-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">MY</span>Kitchen</h1>
                    </Link>
                </div>
                <SearchInput />
                <div className="col-lg-3 col-6 text-right">
                    <Link to={user.user_id ? '/cart': '/login'} className="btn border">
                        <FontAwesomeIcon icon={faShoppingCart} className='text-primary'/>
                        {/* <span className="badge">0</span> */}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Topbar;