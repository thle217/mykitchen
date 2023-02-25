function Search() {
    return (
        <form action="" method="post" className="d-none d-md-flex ms-4">
            <input
                className="form-control bg-secondary border-1"
                type="search"
                placeholder="Tìm kiếm..."
                name="input-search"
            />
            <button className="btn-search btn-light border-0 text-dark" name="btn-search">TÌM</button>
        </form>
    )
}

export default Search;