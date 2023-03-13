import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setKeyword } from "../../slices/keywordSlice";


function SearchInput() {

    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChangeValue = (e) => {
        setValue(e.target.value);
    }

    const handleSearch = () => {
        const action = setKeyword(value);
        dispatch(action);
        navigate("/shopping");
    }
 
    return (
        <div className="col-lg-6 col-6 text-left">
            <div className="input-group">
                <input
                    type="text"
                    name="keyword"
                    className="form-control"
                    id="search-box"
                    placeholder="Tìm kiếm..."
                    value={value}
                    onChange={handleChangeValue}
                />
                <div className="input-group-append">
                    <span className="input-group-text bg-primary">
                        <button
                            type="submit"
                            className="btn p-0 border-0 text-white"
                            onClick={handleSearch}
                        >
                            TÌM
                        </button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SearchInput;