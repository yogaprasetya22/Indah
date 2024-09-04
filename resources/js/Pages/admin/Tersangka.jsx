import React, { useState, useEffect } from "react";
import Layout from "@/Layouts/Layout";
import ReactPaginate from "react-paginate";
import { PhotoView } from "react-photo-view";
import UpdateTersangka from "@/Components/modal/Tersangka/Update";
import Delete from "@/Components/modal/Tersangka/Delete";
import moment from "moment/moment";
import "moment/locale/id";
moment.locale("id");

export default function Tersangka({ data: datas, auth }) {
    const [data, setData] = useState(datas);
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(5);
    const [resultModal, setResultModal] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setData(datas);
    }, [datas]);

    useEffect(() => {
        setLoading(true);
        const filteredData = data;
        const endOffset = parseInt(itemOffset) + parseInt(page);
        const sortData = filteredData
            .sort((a, b) => moment(b.created_at) - moment(a.created_at))
            .slice(itemOffset, endOffset);

        setCurrentItems(sortData);
        setPageCount(Math.ceil(filteredData.length / page));
        setLoading(false);
    }, [itemOffset, data, page, auth.user.id]);

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
            const filteredData = datas;
            const searchResult = filteredData.filter(
                (item) =>
                    item.nama.toLowerCase().includes(search.toLowerCase()) ||
                    item.ttl.toLowerCase().includes(search.toLowerCase()) ||
                    item.alamat.toLowerCase().includes(search.toLowerCase()) ||
                    item.perkara.toLowerCase().includes(search.toLowerCase())
            );
            setData(searchResult);
            const endOffset = parseInt(itemOffset) + parseInt(page);
            const sortData = searchResult
                 .sort((a, b) => moment(b.created_at) - moment(a.created_at))
                .slice(itemOffset, endOffset);

            setCurrentItems(sortData);
            setPageCount(Math.ceil(searchResult.length / page));
            setItemOffset(0);
        } else {
             const filteredData = datas;
             const endOffset = parseInt(itemOffset) + parseInt(page);
             const sortData = filteredData
                 .sort((a, b) => moment(b.created_at) - moment(a.created_at))
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
                                                role: item.user.role.name_role,
                                                uuid: item.user.uuid,
                                                disk: "foto-depan",
                                                filename: item?.foto_depan,
                                            })}
                                        >
                                            <img
                                                src={route("file.get", {
                                                    direktori: "tersangka",
                                                    role: item.user.role
                                                        .name_role,
                                                    uuid: item.user.uuid,
                                                    disk: "foto-depan",
                                                    filename: item?.foto_depan,
                                                })}
                                                alt="Foto Depan"
                                                className="w-[6rem] h-[6rem] object-cover rounded mx-auto"
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
                                                role: item.user.role.name_role,
                                                uuid: item.user.uuid,
                                                disk: "foto-kanan",
                                                filename: item?.foto_kanan,
                                            })}
                                        >
                                            <img
                                                src={route("file.get", {
                                                    direktori: "tersangka",
                                                    role: item.user.role
                                                        .name_role,
                                                    uuid: item.user.uuid,
                                                    disk: "foto-kanan",
                                                    filename: item?.foto_kanan,
                                                })}
                                                alt="Foto Kanan"
                                                className="w-[6rem] h-[6rem] object-cover rounded mx-auto"
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
                                                role: item.user.role.name_role,
                                                uuid: item.user.uuid,
                                                disk: "foto-kiri",
                                                filename: item?.foto_kiri,
                                            })}
                                        >
                                            <img
                                                src={route("file.get", {
                                                    direktori: "tersangka",
                                                    role: item.user.role
                                                        .name_role,
                                                    uuid: item.user.uuid,
                                                    disk: "foto-kiri",
                                                    filename: item?.foto_kiri,
                                                })}
                                                alt="Foto Kiri"
                                                className="w-[6rem] h-[6rem] object-cover rounded mx-auto"
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
                                        <button
                                            className="btn btn-ghost btn-md px-2"
                                            onClick={() => {
                                                setResultModal(item);
                                                window.my_modal_2.show();
                                            }}
                                        >
                                            <i className="text-indigo-500 text-xl fas fa-edit"></i>
                                        </button>
                                        <button
                                            className="btn btn-ghost btn-md px-2"
                                            onClick={() => {
                                                setResultModal(item);
                                                window.my_modal_3.show();
                                            }}
                                        >
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
                            activeClassName="bg-indigo-400 text-white"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                </div>
            </div>
            <UpdateTersangka result={resultModal} title={"Update Tersangka"} />
            <Delete result={resultModal} title={"Delete Tersangka"} />
        </Layout>
    );
}
