function ProductCard() {
    return (
        <div className="pb-1 mb-5">
            <div className="card product-item border-0 mb-5 mt-5">
                <div className="card-header product-img overflow-hidden bg-transparent border p-3">
                    <a href="detail-controller.php?product_id=<?php echo $product['product_id'] ?>" className="d-flex justify-content-center">
                        <img className="img-fluid w-75" src="https://i.imgur.com/FgLC3rD.jpeg" alt=""/>
                    </a>
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <a href="detail-controller.php?product_id=<?php echo $product['product_id'] ?>" style={{textDecoration: 'none'}}>
                        <h6 className="text-truncate mb-3 mx-2">TÊN SẢN PHẨM</h6>
                    </a>
                    <div className="justify-content-center">
                        <h6 className="text-danger"><b>GIÁ TIỀN<sup>đ</sup></b></h6>
                        <h6 className="text-muted"><del>GIÁ TIỀN<sup>đ</sup></del></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                    <a href="detail-controller.php" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Xem chi tiết</a>
                    <button type="button" value="<?php echo $product['product_id'] ?>" className="btn btn-outline-primary btn-add" style={{backgroundColor: 'transparent'}}>Thêm vào giỏ</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;