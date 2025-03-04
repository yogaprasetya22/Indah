import Add from "@/Components/modal/User/Add";
import Delete from "@/Components/modal/User/Delete";
import UpdateUser from "@/Components/modal/User/Update";
import Layout from "@/Layouts/Layout";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export default function User({ data: datas }) {
    const [data, setData] = useState(datas);
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [Loading, setLoading] = useState(false);
    const [page, setPage] = useState(5);
    const [results, setResults] = useState({});
    const [search, setSearch] = useState("");

    useEffect(() => {
        setData(datas);
    }, [datas]);

    useEffect(() => {
        setLoading(true);
        const endOffset = parseInt(itemOffset) + parseInt(page);
        const sortData = data
            .sort((a, b) => {
                return b.id - a.id;
            })
            .slice(itemOffset, endOffset);
        setCurrentItems(sortData);
        setPageCount(Math.ceil(data.length / page));
        setLoading(false);
    }, [itemOffset, data, page]);

    const handlePageClick = (event) => {
        window.scrollTo({
            top: 60,
            behavior: "smooth",
        });

        const newOffset = (event.selected * page) % data.length;

        setItemOffset(newOffset);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (search) {
            const searchResult = datas.filter((item) => {
                return (
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.email.toLowerCase().includes(search.toLowerCase()) ||
                    item.role.name_role
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    item.wilayah.nama
                        .toLowerCase()
                        .includes(search.toLowerCase())
                );
            });
            setData(searchResult);
            const endOffset = parseInt(itemOffset) + parseInt(page);
            const sortData = searchResult
                .sort((a, b) => {
                    return b.id - a.id;
                })
                .slice(itemOffset, endOffset);

            setCurrentItems(sortData);
            setPageCount(Math.ceil(searchResult.length / page));
            setItemOffset(0);
        } else {
            const filteredData = datas;
            const endOffset = parseInt(itemOffset) + parseInt(page);
            const sortData = filteredData
                .sort((a, b) => {
                    return b.id - a.id;
                })
                .slice(itemOffset, endOffset);
            setData(filteredData);
            setCurrentItems(sortData);
            setPageCount(Math.ceil(filteredData.length / page));
            setItemOffset(0);
            setSearch("");
        }
    };
    return (
        <Layout>
            <div className="bg-white flex flex-col gap-5 rounded-xl ">
                <div className="flex justify-between">
                    <div className="flex px-5 py-3 gap-10">
                        <div className="flex flex-row items-center justify-center gap-2">
                            <span className="font-bold">show :</span>
                            <select
                                className="select"
                                value={page}
                                onChange={(e) => setPage(e.target.value)}
                            >
                                {[5, 10, 15, 20].map((item, index) => (
                                    <option key={index} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <form
                            className="flex flex-row items-center justify-center gap-2"
                            onSubmit={handleSearch}
                        >
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button className="btn" type="sumbit">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                    </div>
                    <div className="flex items-center gap-2 px-5 py-3">
                        <button
                            className="btn bg-indigo-400 text-white rounded-md"
                            onClick={() => window.my_modal_1.show()}
                        >
                            <i className="fas fa-plus"></i> Add User
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto overflow-table ">
                    <table className="table lg:table-xs 2xl:table-md">
                        <thead>
                            <tr className="font-bold text-lg text-black">
                                <th className="uppercase text-sm text-center">
                                    Id
                                </th>
                                <th className="uppercase text-sm text-center">
                                    Name
                                </th>
                                <th className="uppercase text-sm text-center">
                                    Email
                                </th>
                                <th className="uppercase text-sm text-center">
                                    Image
                                </th>
                                <th className="uppercase text-sm text-center">
                                    Role
                                </th>
                                <th className="uppercase text-sm text-center">
                                    Wilayah
                                </th>
                                <th className="uppercase text-sm text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-b">
                            {currentItems.map((item, index) => (
                                <tr key={index}>
                                    <th className="text-center">{item?.id}</th>
                                    <td className="text-center">
                                        {item?.name}
                                    </td>
                                    <td className="text-center">
                                        {item?.email}
                                    </td>
                                    <td className="text-center ">
                                        <img
                                            className="w-10 h-10 mx-auto rounded-full object-fill"
                                            src={item?.wilayah.gambar}
                                            alt={item?.wilayah.nama}
                                            srcset=""
                                        />
                                    </td>
                                    <td className="text-center">
                                        {item?.role?.name_role}
                                    </td>
                                    <td className="text-center">
                                        {item?.wilayah?.nama}
                                    </td>
                                    <th className="flex justify-center gap-2">
                                        <button
                                            className="btn btn-ghost btn-md"
                                            onClick={() => {
                                                setResults(item);
                                                window.my_modal_2.show();
                                            }}
                                        >
                                            <i className="text-indigo-500 text-xl fas fa-edit"></i>
                                        </button>
                                        <button
                                            className="btn btn-ghost btn-md"
                                            onClick={() => {
                                                setResults(item);
                                                window.my_modal_3.show();
                                            }}
                                        >
                                            <i className="text-red-500 text-xl fas fa-trash-alt"></i>
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-normal items-center py-5">
                        <ReactPaginate
                            className="flex flex-row gap-1 w-full justify-center items-center select-none"
                            nextLabel="next"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={2}
                            marginPagesDisplayed={1}
                            pageCount={pageCount}
                            previousLabel="prev"
                            pageClassName="text-xl p-2 rounded-md"
                            pageLinkClassName="rounded-md text-black px-4 py-2 font-semibold font-roboto"
                            previousClassName="p-2 rounded-md text-gray-400 hover:text-black"
                            previousLinkClassName="text-xl p-2 font-semibold font-roboto"
                            nextClassName="p-2 rounded-md text-gray-400 hover:text-black"
                            nextLinkClassName="text-xl p-2 font-semibold font-roboto"
                            breakLabel="..."
                            breakClassName="p-2 rounded-md text-black"
                            breakLinkClassName="text-xl font-semibold font-roboto"
                            containerClassName="pagination"
                            activeClassName="bg-indigo-400 text-white"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                </div>
            </div>
            <Add title={"Add User"} />
            <UpdateUser title={"Update User"} results={results} />
            <Delete title={"Delete User"} results={results} />
        </Layout>
    );
}
