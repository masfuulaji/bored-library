import React from "react";
import DataTables from "react-data-table-component";
import { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import Form from "./Form";

const index = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [perPage, setPerPage] = useState(10);

    const columns = [
        {
            name: "#",
            selector: (row, index) => index + 1,
            width: "60px",
        },
        {
            name: "Name",
            selector: (row) => row.name,
            width: "25%",
        },
        {
            name: "Description",
            selector: (row) => row.description,
            width: "53%",
        },
        {
            name: "Action",
            cell: (row) => (
                <>
                    <button
                        className="inline-block px-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                        onClick={() => handleButtonEdit(row.id)}
                    >
                        Edit
                    </button>
                    <button
                        className="inline-block px-2 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                        onClick={() => handleButtonDelete(row.id)}
                    >
                        Delete
                    </button>
                </>
            ),
            width: "200px",
        },
    ];

    //fetch table data using axios
    async function fetchData() {
        try {
            setLoading(true);
            const response = await axios.get(
                import.meta.env.VITE_API_URL + "/language",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );
            setData(response.data.language);
            setLoading(false);
        } catch (e) {
            // console.log(e);
            console.log(e.response?.data?.message);
            setLoading(false);
        }
    }

    const handleButtonEdit = (id) => {
        readData(id);
        // setModal(true);
    };

    const handleButtonAdd = () => {
        setCategory({
            id: "",
            name: "",
            description: "",
        });
        setModal(true);
    };

    const handleButtonDelete = (id) => {
        confirmAlert({
            title: "Confirm to submit",
            message: "Are you sure to do this.",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => deleteData(id),
                },
                {
                    label: "No",
                },
            ],
        });
    };

    async function deleteData(id) {
        try {
            const response = await axios.delete(
                import.meta.env.VITE_API_URL + "/language/" + id,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );
            fetchData();
        } catch (e) {
            // console.log(e);
            console.log(e.response?.data?.message);
        }
    }

    // modal open state
    const [modal, setModal] = useState(false);

    // modal close callback
    const ModalClose = () => {
        setModal(false);
    };

    const [category, setCategory] = useState({
        id: "",
        name: "",
        description: "",
    });

    async function readData(id) {
        try {
            const response = await axios.get(
                import.meta.env.VITE_API_URL + "/language/" + id,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );
            setCategory({
                id: response.data.language.id,
                name: response.data.language.name,
                description: response.data.language.description,
            });
            setModal(true);
        } catch (e) {
            // console.log(e);
            console.log(e.response?.data?.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <div className="w-full bg-slate-100 shadow-sm rounded">
                <div className="p-4">
                    <div className="flex mb-4">
                        <div className="mr-auto">
                            <h1>Data Category</h1>
                        </div>
                        <div>
                            <button
                                className="inline-block px-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                onClick={() => handleButtonAdd()}
                            >
                                Add New
                            </button>
                        </div>
                    </div>
                    {data && (
                        <div className="custom-table">
                            <DataTables
                                columns={columns}
                                data={data}
                                progressPending={loading}
                                pagination
                            />
                        </div>
                    )}
                </div>
            </div>
            <Form isShow={modal} data={category} onClose={ModalClose} onFetch={fetchData} />
        </>
    );
};

export default index;
