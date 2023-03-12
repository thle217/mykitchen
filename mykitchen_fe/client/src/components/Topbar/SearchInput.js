
function SearchInput() {
 
    return (
        <div className="col-lg-6 col-6 text-left">
            <form action="/search" method="get">
                <div className="input-group">
                    <input type="text" name="keyword" className="form-control" id="search-box" placeholder="Tìm kiếm..."/>
                    <div className="input-group-append">
                        <span className="input-group-text bg-primary">
                            <button type="submit" className="btn p-0 border-0 text-white">TÌM</button>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchInput;