import { useEffect, useState } from "react";
import DataTable from "../../../components/DataTable";
import brandAPI from "../../../services/brandAPI";
import BrandDetails from "../BrandDetails";
import { successDialog } from "../../../components/Dialog";
import { useSelector } from "react-redux";
import { deleteSuccess } from "../../../components/Dialog";
import Swal from "sweetalert2";

function BrandList() {
    const brand = useSelector((state) => state.common);

    //CALL API
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAll = async () => {
        try {
            setLoading(true);
            const response = await brandAPI.getAll();
            setList(response.data);
            setLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };

    useEffect(() => {
        getAll();
    }, []);

    const handleCreate = async (obj) => {
        await brandAPI.create(obj).then((res) => {
            if (res.status === 200) {
                successDialog();
                getAll();
            }
        });
    };
    const handleUpdate = async (obj) => {
        await brandAPI.update(brand.brand_id, obj).then((res) => {
            if (res.status === 200) {
                successDialog();
                getAll();
            }
        });
    };

    //ĐỊNH DẠNG DATATABLE
    const columns = [
        {
            title: "ID",
            dataIndex: "brand_id",
            align: "center",
        },
        {
            title: "Tên thương hiệu",
            dataIndex: "brand_name",
        },
        {
            title: "URL hình",
            dataIndex: "url",
        },
    ];

    //XỬ LÝ DELETE
    const handleDelete = async (record) => {
        await brandAPI.delete(record.brand_id).then((res) => {
            if (res.status === 202) {
                Swal.fire({
                    icon: "error",
                    text: "Không có thương hiệu!",
                });
            } else if (res.status === 201) {
                Swal.fire({
                    icon: "error",
                    text: "Thương hiệu có sản phẩm!",
                });
            } else {
                deleteSuccess();
                getAll();
            }
        });
    };

    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row rounded justify-content-center mx-0">
                <div className="col-md">
                    <div className="rounded p-4 mb-4 bg-secondary">
                        <div className="d-flex">
                            <h4 className="text-dark">QUẢN LÝ THƯƠNG HIỆU</h4>
                        </div>
                        <div className="row mt-5">
                            <div className="table-responsive col-md-7 mt-4">
                                <div className="table">
                                    <DataTable
                                        list={list}
                                        columns={columns}
                                        isBrandCategoryTable={true}
                                        handleDelete={handleDelete}
                                        loading={loading}
                                    />
                                </div>
                            </div>
                            <BrandDetails
                                handleCreate={handleCreate}
                                handleUpdate={handleUpdate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandList;
