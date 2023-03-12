import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function CategoryDetails(props) {
    

    //XỬ LÝ LẤY DỮ LIỆU TỪ STORE, LẤY HÀM TỪ PROPS VÀ TẠO STATE CHỨA
    const category = useSelector(state => state.common);
    const { handleCreate, handleUpdate } = props;
    const [name, setName] = useState("");
    

    //SET LẠI GIÁ TRỊ CHO STATE KHI DỮ LIỆU TỪ STORE THAY ĐỔI (KHI CHỌN RECORD KHÁC)
    useEffect(() => {
        setName(category.category_name);
    }, [category]);


    //XỬ LÝ LƯU STATE KHI NGƯỜI DÙNG THAY ĐỔI VALUE INPUT
    const handleOnChange = e => {
        setName(e.target.value);
    };


    //XỬ LÝ SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
           category_name: name,
        }

        Swal.fire({
            title: 'BẠN CÓ MUỐN LƯU THÔNG TIN?',
            confirmButtonText: 'Lưu',
            showCancelButton: true,
            cancelButtonText: 'Hủy',
            customClass: {
                title: 'fs-5 text-dark',
                confirmButton: 'bg-primary shadow-none',
                cancelButton: 'bg-light shadow-none',
            }
        })
        .then(result => {
            if (result.isConfirmed) {

                //UPDATE
                if (category.category_id) {
                    handleUpdate(obj);
                }

                //CREATE
                else {
                    handleCreate(obj);
                }
            }
        });
    };


    return (
        <div className="col-md-5 mt-4">
            <form action="" method="post" onSubmit={handleSubmit}>
                <label htmlFor="inputName" className="col-form-label">Tên loại sản phẩm</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    name="txt-category-name"
                    value={name||""}
                    onChange={handleOnChange}
                />
                <div className="float-end">
                    <button type="reset" className="btn-cancel btn btn-light mt-4 px-4 mx-2">HỦY</button>
                    <button type="submit" className="btn-save btn btn-dark mt-4 px-4" name="txt-category-id">LƯU</button>
                </div>
            </form>
        </div>
    )
}

export default CategoryDetails;