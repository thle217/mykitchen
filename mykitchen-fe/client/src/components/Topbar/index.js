import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "./SearchInput";

function Topbar() {
    return (
        <div className="container-fluid">
            <div className="row align-items-center py-3 px-xl-5 mb-3">
                <div className="col-lg-3 d-none d-lg-block">
                    <a href="index-controller.php" className="text-decoration-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">MY</span>Kitchen</h1>
                    </a>
                </div>
                <SearchInput />
                <div className="col-lg-3 col-6 text-right">
                    <a href="cart-list-controller.php" className="btn border">
                        <FontAwesomeIcon icon={faShoppingCart} className='text-primary'/>
                        <span className="badge">0</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Topbar;