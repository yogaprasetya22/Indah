import React, { useState, useEffect } from "react";
import Add from "@/Components/modal/Tersangka/Add";
import Layout from "@/Layouts/Layout";
import ReactPaginate from "react-paginate";
import { PhotoView } from "react-photo-view";

export default function Tersangka({ data, auth }) {
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(5);
    const [filterByUser, setFilterByUser] = useState(false);

    useEffect(() => {
        setLoading(true);
        const filteredData = filterByUser
            ? data.filter((item) => item.user.id === auth.user.id)
            : data;
        const endOffset = parseInt(itemOffset) + parseInt(page);
        const sortData = filteredData
            .sort((a, b) => a.id - b.id)
            .slice(itemOffset, endOffset);

        setCurrentItems(sortData);
        setPageCount(Math.ceil(filteredData.length / page));
        setLoading(false);
    }, [itemOffset, data, page, filterByUser, auth.user.id]);

    const handlePageClick = (event) => {
        window.scrollTo({
            top: 60,
            behavior: "smooth",
        });

        const newOffset = (event.selected * page) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <Layout>
            <div className="bg-white flex flex-col gap-5 rounded-xl">
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
                        <div className="flex flex-row items-center justify-center gap-2">
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder="Search"
                            />
                            <button className="btn">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                        <div
                            className="flex flex-row items-center justify-center gap-2 tooltip  tooltip-info tooltip-right"
                            data-tip="Filter hanya berdasarkan anda upload"
                        >
                            <button
                                className="btn btn-ghost"
                                onClick={() => setFilterByUser(!filterByUser)}
                            >
                                <i className="fas fa-filter"></i>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-5 py-3">
                        <button
                            className="btn bg-green-400 text-white rounded-md"
                            onClick={() => window.my_modal_1.show()}
                        >
                            <i className="fas fa-plus"></i> Add Tersangka
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto overflow-table">
                    <table className="table lg:table-xs 2xl:table-md ">
                        <thead>
                            <tr className="font-bold text-lg text-black">
                                <th className="uppercase text-sm text-center">
                                    Foto Depan
                                </th>
                                <th className="uppercase text-sm text-center">
                                    Foto Kanan
                                </th>
                                <th className="uppercase text-sm text-center">
                                    Foto Kiri
                                </th>
                                <th className="uppercase text-sm text-center">
                                    Nama
                                </th>
                                <th className="uppercase text-sm text-center">
                                    TTL
                                </th>
                                <th className="uppercase text-sm text-center">
                                    Alamat
                                </th>
                                <th className="uppercase text-sm text-center">
                                    Perkara
                                </th>
                                <th className="uppercase text-sm text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-b">
                            {currentItems.map((item, index) => (
                                <tr key={index}>
                                    <td className="text-center">
                                        <PhotoView
                                            speed={() => 800}
                                            easing={(type) =>
                                                type === 2
                                                    ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                                                    : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                                            }
                                            src={route("file.get", {
                                                direktori: "tersangka",
                                                disk: "foto-depan",
                                                filename: item?.foto_depan,
                                            })}
                                        >
                                            <img
                                                src={route("file.get", {
                                                    direktori: "tersangka",
                                                    disk: "foto-depan",
                                                    filename: item?.foto_depan,
                                                })}
                                                alt="Foto Depan"
                                                className="w-[8rem] bg-cover rounded mx-auto"
                                            />
                                        </PhotoView>
                                    </td>
                                    <td className="text-center">
                                        <PhotoView
                                            speed={() => 800}
                                            easing={(type) =>
                                                type === 2
                                                    ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                                                    : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                                            }
                                            src={route("file.get", {
                                                direktori: "tersangka",
                                                disk: "foto-kanan",
                                                filename: item?.foto_kanan,
                                            })}
                                        >
                                            <img
                                                src={route("file.get", {
                                                    direktori: "tersangka",
                                                    disk: "foto-kanan",
                                                    filename: item?.foto_kanan,
                                                })}
                                                alt="Foto Kanan"
                                                className="w-[8rem] bg-cover rounded mx-auto"
                                            />
                                        </PhotoView>
                                    </td>
                                    <td className="text-center">
                                        <PhotoView
                                            speed={() => 800}
                                            easing={(type) =>
                                                type === 2
                                                    ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                                                    : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                                            }
                                            src={route("file.get", {
                                                direktori: "tersangka",
                                                disk: "foto-kiri",
                                                filename: item?.foto_kiri,
                                            })}
                                        >
                                            <img
                                                src={route("file.get", {
                                                    direktori: "tersangka",
                                                    disk: "foto-kiri",
                                                    filename: item?.foto_kiri,
                                                })}
                                                alt="Foto Kiri"
                                                className="w-[8rem] bg-cover rounded mx-auto"
                                            />
                                        </PhotoView>
                                    </td>
                                    <td className="text-center">
                                        {item?.nama}
                                    </td>
                                    <td className="text-center">{item?.ttl}</td>
                                    <td className="text-center">
                                        {item?.alamat}
                                    </td>
                                    <td className="text-center">
                                        {item?.perkara}
                                    </td>
                                    <td>
                                        <button className="btn btn-ghost btn-md">
                                            <i className="text-green-500 text-xl fas fa-edit"></i>
                                        </button>
                                        <button className="btn btn-ghost btn-md">
                                            <i className="text-red-500 text-xl fas fa-trash-alt"></i>
                                        </button>
                                    </td>
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
                            activeClassName="bg-green-400 text-white"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                </div>
            </div>
            <Add />
        </Layout>
    );
}
