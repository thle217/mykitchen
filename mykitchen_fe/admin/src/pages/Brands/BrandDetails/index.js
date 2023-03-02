import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function BrandDetails() {
    

    //XỬ LÝ LẤY DỮ LIỆU TỪ STORE VÀ TẠO STATE CHỨA
    const brand = useSelector(state => state.common);
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    

    //SET LẠI GIÁ TRỊ CHO STATE KHI DỮ LIỆU TỪ STORE THAY ĐỔI (KHI CHỌN RECORD KHÁC)
    useEffect(() => {
        setName(brand.brand_name);
        setUrl(brand.url);
    }, [brand]);


    //XỬ LÝ LƯU STATE KHI NGƯỜI DÙNG THAY ĐỔI VALUE INPUT
    const handleOnChangeName = e => {
        setName(e.target.value);
    };
    const handleOnChangeUrl = e => {
        setUrl(e.target.value);
    };
    

    return (
        <div className="col-md-5 mt-4">
            <form action="brand-controller.php" method="post">
                <label htmlFor="inputName" className="col-form-label">Tên thương hiệu</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    id="inputName"
                    name="txt-brand-name"
                    value={name||""}
                    onChange={handleOnChangeName}
                />
                <label htmlFor="inputUrl" className="col-form-label">URL Hình</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    id="inputUrl"
                    name="txt-brand-url"
                    value={url||""}
                    onChange={handleOnChangeUrl}
                />
                <div className="float-end">
                    <button type="reset" className="btn-cancel btn btn-light mt-4 px-4 mx-2">HỦY</button>
                    <button type="submit" className="btn-save btn btn-dark mt-4 px-4" name="txt-brand-id">LƯU</button>
                </div>
            </form>
        </div>
    )
}

export default BrandDetails;