import { Link } from "react-router-dom";
import { Table, Button, Popconfirm } from "antd";
import { useDispatch } from "react-redux";
import { setInfo } from "../../slices/commonSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";


function DataTable(props) {


    //XỬ LÝ LƯU RECORD CẦN XEM/SỬA VÀO STORE - TRANG BRAND VÀ CATEGORY
    const dispatch = useDispatch();
    const handleSaveToStore = (record) => {
        const action = setInfo(record);
        dispatch(action);
    }


    //ĐỊNH DẠNG COLUMNS
    let columns = [
        ...props.columns,
        props.isOrderTable? //TRANG ĐƠN HÀNG THÌ KHÔNG CÓ BUTTON XÓA
        {}
        : //CÁC TRANG KHÁC THÌ CÓ BUTTON XÓA
        {
            title: "Xóa",
            dataIndex: "",
            align: "center",
            render: (_, record) => (
                <Popconfirm title="Bạn có muốn xóa?" onConfirm={()=> props.handleDelete(record.product_id)}>
                    <Button className="bg-light">
                        <FontAwesomeIcon icon={faTrashAlt} className="text-dark"/>
                    </Button>
                </Popconfirm>
            )
            
        },
        props.isBrandCategoryTable? //TRANG CỦA BRANDS/CATEGORIES
        {
            title: "Xem",
            dataIndex: "",
            align: "center",
            render: (_, record) => (
                <Button className="bg-light" onClick={() => handleSaveToStore(record)}>
                    <FontAwesomeIcon icon={faEdit} className="text-dark"/>
                </Button>
            )
        }
        : //CÁC TRANG KHÁC
        {
            title: "Xem",
            dataIndex: "",
            align: "center",
            render: (_, record) => (
                <Link to={props.detailsPage} state={{ record }}>
                    <Button className="bg-light">
                        <FontAwesomeIcon icon={faEdit} className="text-dark"/>
                    </Button>
                </Link>
            )
        },
    ];


    return (
        <Table
            columns={columns}
            dataSource={props.list}
            bordered
            rowKey={columns[0].dataIndex} //prop key
        />
    )
}

export default DataTable;