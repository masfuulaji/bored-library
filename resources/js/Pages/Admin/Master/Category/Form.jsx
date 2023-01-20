import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Form = ({ data, isShow, onClose, onFetch }) => {
    const [id, setId] = useState(data.id);
    const [name, setName] = useState(data.name);
    const [description, setDescription] = useState(data.description);
    const [method_field, setMethodField] = useState("");

    if (data.id !== id) {
        setId(data.id);
        setName(data.name);
        setDescription(data.description);
    }

    const closeModal = () => {
        onClose();
    };

    function handleSubmit() {
        if (id) {
            setMethodField("PUT");
            updateData();
        } else {
            setMethodField("POST");
            createData();
        }
    }

    async function createData(data) {
        try {
            const response = await axios.post(
                import.meta.env.VITE_API_URL + "/category",
                {
                    id: id,
                    name: name,
                    description: description,
                    method_field: method_field,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );
            onFetch()
            onClose();
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async function updateData() {
        try {
            const response = await axios.post(
                import.meta.env.VITE_API_URL + "/category/" + id,
                {
                    id: id,
                    name: name,
                    description: description,
                    method_field: method_field,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );
            onFetch()
            onClose();
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    return (
        <div className={isShow ? "block" : "hidden"}>
            <div className="w-full max-w-4xl mx-auto fixed inset-0 z-10">
                <div className="m-6 bg-white  rounded-xl shadow-lg p-6">
                    <div className="flex">
                        <div className="flex items-center px-3">
                            <h1 className="text-lg font-semibold">
                                Form Category
                            </h1>
                        </div>
                        <div className="ml-auto">
                            <button className="m-2" onClick={closeModal}>
                                <AiOutlineClose size={20} />
                            </button>
                        </div>
                    </div>
                    <div className="p-2 sm:p-4">
                        <div>
                            <input
                                type="hidden"
                                name="id"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            />
                            <div className="mb-4">
                                <label
                                    htmlFor="user name"
                                    className="block text-sm text-gray-700 capitalize"
                                >
                                    Name
                                </label>
                                <input
                                    placeholder="Name"
                                    type="text"
                                    name="name"
                                    className="block w-full px-3 py-2 mt-2 text-gray-600 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="user name"
                                    className="block text-sm text-gray-700 capitalize"
                                >
                                    Description
                                </label>
                                <input
                                    placeholder="Description"
                                    type="text"
                                    name="description"
                                    className="block w-full px-3 py-2 mt-2 text-gray-600 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex">
                                <div className="ml-auto">
                                    <button
                                        onClick={closeModal}
                                        className="inline-block px-4 py-2.5 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                    >
                                        Close
                                    </button>
                                    <button
                                        onClick={handleSubmit}
                                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed top-0 right-0 left-0 bottom-0 opacity-50 bg-gray-400 block"></div>
        </div>
    );
};

export default Form;
