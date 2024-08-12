import React, { useState, useEffect } from "react";
import Layout from "@/Layouts/Layout";
import ReactPaginate from "react-paginate";
import { PhotoView } from "react-photo-view";
import moment from "moment/moment";
moment.locale("id");
import "moment/locale/id";

export default function DashboardIdentifikasiWajah({ data, auth }) {
    const bulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(5);
    const [resultModal, setResultModal] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedMonth, setSelectedMonth] = useState(""); // New state for the selected month

    useEffect(() => {
        setLoading(true);
        let filteredData = data;

        // Filter data by selected month
        if (selectedMonth) {
            filteredData = filteredData.filter(
                (item) =>
                    moment(item.created_at).format("MMMM") === selectedMonth
            );
        }

        const endOffset = parseInt(itemOffset) + parseInt(page);
        const sortData = filteredData
            .sort((a, b) => a.id - b.id)
            .slice(itemOffset, endOffset);

        setCurrentItems(sortData);
        setPageCount(Math.ceil(filteredData.length / page));
        setLoading(false);
    }, [itemOffset, data, page, selectedMonth, auth.user.id]);

    const handlePageClick = (event) => {
        window.scrollTo({
            top: 60,
            behavior: "smooth",
        });
        const newOffset = (event.selected * page) % data.length;
        setItemOffset(newOffset);
    };

    const handleSearch = () => {
        const filteredData = data;
        const searchResult = filteredData.filter(
            (item) =>
                item.nama.toLowerCase().includes(search.toLowerCase()) ||
                item.nik.toLowerCase().includes(search.toLowerCase()) ||
                item.ttl.toLowerCase().includes(search.toLowerCase()) ||
                item.alamat.toLowerCase().includes(search.toLowerCase()) ||
                item.perkara.toLowerCase().includes(search.toLowerCase()) ||
                item.dasar_rujukan
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                item.operator.toLowerCase().includes(search.toLowerCase()) ||
                moment(item.tanggal_proses)
                    .format("LL")
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                moment(item.created_at)
                    .format("LL")
                    .toLowerCase()
                    .includes(search.toLowerCase())
        );
        setCurrentItems(searchResult);
        setPageCount(Math.ceil(searchResult.length / page));
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value); // Update the selected month
        setItemOffset(0); // Reset the pagination to the first page
    };

    return (
        <Layout>
            <div className="bg-white flex flex-col gap-5 rounded-xl ">
                <div className="flex justify-between">
                    <div className="flex px-5 py-3 gap-2">
                        <div className="flex flex-row items-center justify-center gap-2">
                            <span className="font-bold">Show:</span>
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
                            <span className="font-bold">Month:</span>
                            <select
                                className="select"
                                value={selectedMonth}
                                onChange={handleMonthChange}
                            >
                                <option value="">All</option>
                                {bulan.map((item, index) => (
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
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button className="btn" onClick={handleSearch}>
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto overflow-table ">
                    <table className="table lg:table-xs 2xl:table-md ">
                        <thead>
                            <tr className="font-bold text-lg text-black">
                                <th className=" uppercase text-[10px] text-center ">
                                    Tgl Proses
                                </th>
                                <th className=" uppercase text-[10px] text-center ">
                                    Dasar Rujukan
                                </th>
                                <th className=" uppercase text-[10px] text-center ">
                                    Polda Res
                                </th>
                                <th className=" uppercase text-[10px] text-center ">
                                    Operator
                                </th>
                                <th className=" uppercase text-[10px] text-center ">
                                    Perkara
                                </th>
                                <th className=" uppercase text-[10px] text-center ">
                                    Target
                                </th>
                                <th className=" uppercase text-[10px] text-center ">
                                    Hasil FR
                                </th>
                                <th className=" uppercase text-[10px] text-center ">
                                    Nama
                                </th>
                                <th className=" uppercase text-[10px] text-center ">
                                    NIK
                                </th>
                                <th className=" uppercase text-[10px] text-center ">
                                    TTL
                                </th>
                                <th className=" uppercase text-[10px] text-center ">
                                    Alamat
                                </th>
                                <th className=" uppercase text-[10px] text-center ">
                                    Tgl Upload
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-b">
                            {currentItems.map((item, index) => (
                                <tr key={index}>
                                    <td className="text-center text-xs max-w-[6rem]">
                                        {moment(item?.tanggal_proses).format(
                                            "LL"
                                        )}
                                    </td>
                                    <td className="text-center text-xs max-w-[6rem] max-h-[6rem] break-words">
                                        {item?.dasar_rujukan}
                                    </td>
                                    <td className="text-center text-xs max-w-[6rem]">
                                        {item?.ident_polda_res}
                                    </td>
                                    <td className="text-center text-xs max-w-[6rem]">
                                        {item?.operator}
                                    </td>
                                    <td className="text-center text-xs max-w-[6rem]">
                                        {item?.perkara}
                                    </td>
                                    <td className="text-center text-xs ">
                                        <PhotoView
                                            speed={() => 800}
                                            easing={(type) =>
                                                type === 2
                                                    ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                                                    : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                                            }
                                            src={route("file.get", {
                                                direktori: "identifikasi-wajah",
                                                disk: "foto-target",
                                                filename: item?.foto_target,
                                            })}
                                        >
                                            <img
                                                src={route("file.get", {
                                                    direktori:
                                                        "identifikasi-wajah",
                                                    disk: "foto-target",
                                                    filename: item?.foto_target,
                                                })}
                                                alt="Foto Target"
                                                className="w-[6rem] max-h-[6rem] object-cover rounded mx-auto"
                                            />
                                        </PhotoView>
                                    </td>
                                    <td className="text-center text-xs">
                                        <PhotoView
                                            speed={() => 800}
                                            easing={(type) =>
                                                type === 2
                                                    ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                                                    : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                                            }
                                            src={route("file.get", {
                                                direktori: "identifikasi-wajah",
                                                disk: "foto-hasil-fr",
                                                filename: item?.foto_hasil_fr,
                                            })}
                                        >
                                            <img
                                                src={route("file.get", {
                                                    direktori:
                                                        "identifikasi-wajah",
                                                    disk: "foto-hasil-fr",
                                                    filename:
                                                        item?.foto_hasil_fr,
                                                })}
                                                alt="Foto Hasil FR"
                                                className="w-[6rem] max-h-[6rem] object-cover rounded mx-auto"
                                            />
                                        </PhotoView>
                                    </td>
                                    <td className="text-center text-xs max-w-[6rem] max-h-[6rem] break-words">
                                        {item?.nama}
                                    </td>
                                    <td className="text-center text-xs">
                                        {item?.nik}
                                    </td>
                                    <td className="text-center text-xs">
                                        {item?.ttl}
                                    </td>
                                    <td className="text-center text-xs">
                                        {item?.alamat}
                                    </td>{" "}
                                    <td className="text-center text-xs max-w-[6rem]">
                                        {moment(item?.created_at).format("LL")}
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
        </Layout>
    );
}
