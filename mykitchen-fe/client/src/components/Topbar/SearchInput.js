function SearchInput() {
    return (
        <div className="col-lg-6 col-6 text-left">
            <form action="shop-controller.php" method="post">
                <div className="input-group">
                    <input type="text" name="txt-search-keyword" className="form-control" placeholder="Tìm kiếm..."/>
                    <div className="input-group-append">
                        <span className="input-group-text bg-primary">
                            <button type="submit" name="btn-search" className="btn p-0 border-0 text-white">TÌM</button>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchInput;