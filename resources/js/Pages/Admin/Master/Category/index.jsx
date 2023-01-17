import React from "react";
import DataTables from "react-data-table-component";
import { useState, useEffect } from "react";

const index = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [perPage, setPerPage] = useState(10);

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
        },
        {
            name: "Title",
            selector: (row) => row.title,
        },
        {
            name: "Completed",
            selector: (row) => row.completed?'Yes':'No',
        },
    ];
    
    //fetch table data using axios
    async function fetchData() {
        setLoading(true);
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
        );
        setData(response.data);
        setLoading(false);
    } 

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="w-full bg-slate-100 shadow-sm rounded">
            <div className="p-4">
                <h1>allo</h1>
                <DataTables
                    columns={columns}
                    data={data}
                    progressPending={loading}
                    pagination
                />
            </div>
        </div>
    );
};

export default index;
