import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Table, Button, Popconfirm } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

function DataTable(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try{
                setLoading(true);
                const respone = await axios.get(`http://localhost:8080/api/data-${props.nameAPI}`);
                setData(respone.data.data);
                setLoading(false);
            }
            catch(err){
                throw new Error(err);
            }
        };
        getData(); 
    },[]);

    //COLUMNS Ở NHỮNG TRANG BÌNH THƯỜNG
    let columns = [
        ...props.columns,
        {
            title: "Xóa",
            dataIndex: "",
            align: "center",
            render: (_, record) => (
                <Popconfirm title="Bạn có muốn xóa?" onConfirm={()=> props.handleDelete(record)}>
                    <Button className="bg-light">
                        <FontAwesomeIcon icon={faTrashAlt} className="text-dark"/>
                    </Button>
                </Popconfirm>
            )
            
        },
        {
            title: "Xem",
            dataIndex: "",
            align: "center",
            render: (_, record) => (
                <Link to={props.detailsPage}>
                    <Button className="bg-light" onClick={() => props.handleEdit(record)}>
                        <FontAwesomeIcon icon={faEdit} className="text-dark"/>
                    </Button>
                </Link>
            )
        },
    ];

    //COLUMNS Ở TRANG QUẢN LÝ ĐƠN HÀNG: KHÔNG CÓ XÓA ĐƠN
    if(props.isOrderTable) {
        columns = [
            ...props.columns,
            {
                title: "Xem",
                dataIndex: "",
                align: "center",
                render: () => (
                    <Link to={props.detailsPage}>
                        <Button className="bg-light">
                            <FontAwesomeIcon icon={faEdit} className="text-dark"/>
                        </Button>
                    </Link>
                )
            },
        ];
    }

    return (
        <Table
            columns={columns}
            dataSource={data}
            bordered
            loading={loading}
            rowKey={columns[0].dataIndex} //prop key
        />
    )
}

export default DataTable;