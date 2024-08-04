import Add from "@/Components/modal/IdentifikasiWajah/Add";
import Layout from "@/Layouts/Layout";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export default function IdentifikasiWajah({ data }) {
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [Loading, setLoading] = useState(false);
    const [page, setPage] = useState(5);

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
                        <button className="btn bg-green-400 text-white rounded-md">
                            <i className="fas fa-plus"></i> REKAP
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto overflow-table ">
                    <table className="table lg:table-xs 2xl:table-md ">
                        <thead>
                            <tr className="font-bold text-lg text-black">
                                <th className=" uppercase text-sm text-center">Id</th>
                                <th className=" uppercase text-sm text-center">
                                    Tgl Proses
                                </th>
                                <th className=" uppercase text-sm text-center">
                                    Polda Res
                                </th>
                                <th className=" uppercase text-sm text-center">
                                    Operator
                                </th>
                                <th className=" uppercase text-sm text-center">
                                    Perkara
                                </th>
                                <th className=" uppercase text-sm text-center">
                                    Target
                                </th>
                                <th className=" uppercase text-sm text-center">
                                    Hasil FR
                                </th>
                                <th className=" uppercase text-sm text-center">Nama</th>
                                <th className=" uppercase text-sm text-center">NIK</th>
                                <th className=" uppercase text-sm text-center">TTL</th>
                                <th className=" uppercase text-sm text-center">
                                    Alamat
                                </th>
                                <th className=" uppercase text-sm text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-b">
                            {currentItems.map((item, index) => (
                                <tr key={index}>
                                    <th>{item?.id}</th>
                                    <td className="text-center">
                                        {item?.tanggal_proses}
                                    </td>
                                    <td className="text-center">
                                        {item?.ident_polda_res}
                                    </td>
                                    <td className="text-center">
                                        {item?.operator}
                                    </td>
                                    <td className="text-center">
                                        {item?.perkara}
                                    </td>
                                    <td className="text-center">
                                        <img
                                            src={route("file.get", {
                                                direktori: "identifikasi-wajah",
                                                disk: "foto-target",
                                                filename: item?.foto_target,
                                            })}
                                            alt="Foto Target"
                                            className="w-[8rem] bg-cover rounded mx-auto"
                                        />
                                    </td>
                                    <td className="text-center">
                                        <img
                                            src={route("file.get", {
                                                direktori: "identifikasi-wajah",
                                                disk: "foto-hasil-fr",
                                                filename: item?.foto_hasil_fr,
                                            })}
                                            alt="Foto Hasil FR"
                                            className="w-[8rem] bg-cover rounded mx-auto"
                                        />
                                    </td>
                                    <td className="text-center">
                                        {item?.nama}
                                    </td>
                                    <td className="text-center">{item?.nik}</td>
                                    <td className="text-center">{item?.ttl}</td>
                                    <td className="text-center">
                                        {item?.alamat}
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
        </Layout>
    );
}
