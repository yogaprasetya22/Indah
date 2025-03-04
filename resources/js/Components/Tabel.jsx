import Add from "@/Components/modal/IdentifikasiWajah/Add";
import Layout from "@/Layouts/Layout";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Delete from "./modal/IdentifikasiWajah/Delete";

export default function Tersangka() {
    const [data, setData] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [Loading, setLoading] = useState(false);
    const [page, setPage] = useState(5);

    useEffect(() => {
        const data = Array.from({ length: 100 }, (_, i) => ({
            id: i + 1,
            foto_depan: `https://picsum.photos/200?random=${i + 1}`,
            foto_kanan: `https://picsum.photos/200?random=${
                i + Math.random() + 1
            }`,
            foto_kiri: `https://picsum.photos/200?random=${
                i + Math.random() + 2
            }`,
            nama: `Nama ${i + 1}`,
            ttl: `01-01-1990`,
            alamat: `Alamat ${i + 1}`,
            perkara: `Perkara ${i + 1}`,
        }));
        setData(data);
    }, []);

    useEffect(() => {
        setLoading(true);
        const endOffset = parseInt(itemOffset) + parseInt(page);
        const sortData = data
            .sort((a, b) => {
                return a.id - b.id;
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
                                <th className="lowercase text-center">Id</th>
                                <th className="lowercase text-center">
                                    Foto Depan
                                </th>
                                <th className="lowercase text-center">
                                    Foto Kanan
                                </th>
                                <th className="lowercase text-center">
                                    Foto Kiri
                                </th>
                                <th className="lowercase text-center">Nama</th>
                                <th className="lowercase text-center">TTL</th>
                                <th className="lowercase text-center">
                                    Alamat
                                </th>
                                <th className="lowercase text-center">
                                    Perkara
                                </th>
                                <th className="lowercase text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-b">
                            {currentItems.map((item, index) => (
                                <tr key={index}>
                                    <th>{item?.id}</th>
                                    <td>
                                        <img
                                            src={
                                                item?.foto_depan
                                                    ? item?.foto_depan
                                                    : "https://picsum.photos/200"
                                            }
                                            alt="Foto Depan"
                                            className="h-[4rem] w-[4rem] rounded"
                                        />
                                    </td>
                                    <td>
                                        <img
                                            src={
                                                item?.foto_kanan
                                                    ? item?.foto_kanan
                                                    : "https://picsum.photos/200"
                                            }
                                            alt="Foto Kanan"
                                            className="h-[4rem] w-[4rem] rounded"
                                        />
                                    </td>
                                    <td>
                                        <img
                                            src={
                                                item?.foto_kiri
                                                    ? item?.foto_kiri
                                                    : "https://picsum.photos/200"
                                            }
                                            alt="Foto Kiri"
                                            className="h-[4rem] w-[4rem] rounded"
                                        />
                                    </td>
                                    <td>{item?.nama}</td>
                                    <td>{item?.ttl}</td>
                                    <td>{item?.alamat}</td>
                                    <td>{item?.perkara}</td>
                                    <th className="flex gap-2">
                                        <button className="btn btn-ghost btn-md">
                                            <i className="text-green-500 text-xl fas fa-edit"></i>
                                        </button>
                                        <button className="btn btn-ghost btn-md">
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
                            activeClassName="bg-green-400 text-white"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                </div>
            </div>
            <Add title={"Add Identifikasi Wajah"} />
            <Delete title={"Delete Identifikasi Wajah"} />
        </Layout>
    );
}
