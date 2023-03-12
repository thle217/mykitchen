import { useNavigate } from "react-router-dom";
function Search() {
     //CALL API
     

     const navigate = useNavigate();
     const handleSubmit = event => {
       event.preventDefault();
       navigate('/');
       
       const keyword = document.getElementById("search-box").value

       
     };


    return (
        <form action="#" method="get" className="d-none d-md-flex ms-4" onSubmit={handleSubmit}>
            <input
            id="search-box"
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