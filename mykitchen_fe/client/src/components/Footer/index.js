function Footer() {
    return (
        <div className="container-fluid bg-secondary text-dark mt-5 pt-3">
            <div className="row px-xl-5 pt-5">
                <div className="col-lg-12 col-md-12 mb-5 pr-3 pr-xl-5 text-center">
                    <a href="" className="text-decoration-none">
                        <h1 className="mb-4 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border border-white px-3 mr-1">MY</span>Kitchen</h1>
                    </a>
                    <p>-----</p>
                    <p className="mb-2 font-weight-bold">Giảng viên hướng dẫn</p>
                    <p className="mb-4">ThS. Trần Văn Hùng</p>
                    <p className="mb-2 font-weight-bold">Nhóm sinh viên thực hiện</p>
                    <p className="mb-2">DH51903543 - Lê Thị Hậu</p>
                    <p className="mb-2">DH51903591 - Phan Trọng Hiếu</p>
                    <p className="mb-2">DH51903919 - Nguyễn Thành Long</p>
                    <p className="mb-2">DH51903286 - Dương Nguyên Cơ</p>
                    <p className="mb-2">DH51904922 - Lưu Đình Vọng</p>
                </div>
            </div>
            <div className="row border-top border-light mx-xl-5 py-4">
                <div className="col-md-12 px-xl-0">
                    <p className="mb-md-0 text-center text-md-left text-dark" style={{textAlign: 'center !important'}}>
                        &copy; <a className="text-dark font-weight-semi-bold" href="#">HN Kitchen</a>. All Rights Reserved. Designed
                        by
                        <a className="text-dark font-weight-semi-bold" href="https://htmlcodex.com">HTML Codex</a><br/>
                        Distributed By <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;