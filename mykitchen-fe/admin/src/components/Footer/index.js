import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="container-fluid pt-4 px-4">
            <div className="bg-secondary rounded-top p-4">
                <div className="row">
                    <div className="col-12 col-sm-6 text-center text-sm-start">
                        &copy; <Link to="#" className="text-light">Your Site Name</Link>, All Right Reserved.
                    </div>
                    <div className="col-12 col-sm-6 text-center text-sm-end">
                        Designed By <Link to="https://htmlcodex.com" className="text-light">HTML Codex</Link>
                        <br/>Distributed By: <Link to="https://themewagon.com" target="_blank" className="text-light">ThemeWagon</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;