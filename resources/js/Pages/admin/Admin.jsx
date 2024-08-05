import Layout from "@/Layouts/Layout";
import moment from "moment/moment";
import "moment/locale/id";
moment.locale("id");
import React from "react";
import { useEffect } from "react";

export default function Admin({ identifikasi_wajah, tersangka }) {
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

    const tahun_identifikasi_wajah = identifikasi_wajah
        .map((data) => moment(data.created_at).format("YYYY"))
        .filter((value, index, self) => self.indexOf(value) === index);
    const tahun_trakhir_identifikasi_wajah = Math.max(
        ...tahun_identifikasi_wajah
    );
    
    const tahun_tersangka = tersangka
        .map((data) => moment(data.created_at).format("YYYY"))
        .filter((value, index, self) => self.indexOf(value) === index);
    const tahun_trakhir_tersangka = Math.max(...tahun_tersangka);

    const [selectedTahunIdentifikasiWajah, setSelectedTahunIdentifikasiWajah] =
        React.useState(tahun_trakhir_identifikasi_wajah.toString());
    const [selectedTahunTersangka, setSelectedTahunTersangka] = React.useState(
        tahun_trakhir_tersangka.toString()
    );
    const [currentTahunIdentifikasiWajah, setCurrentTahunIdentifikasiWajah] =
        React.useState([]);
    const [currentTahunTersangka, setCurrentTahunTersangka] = React.useState(
        []
    );

    const [selectedBulanIdentifikasiWajah, setSelectedBulanIdentifikasiWajah] =
        React.useState("Januari");
    const [selectedBulanTersangka, setSelectedBulanTersangka] =
        React.useState("Januari");
    const [currentIdentifikasiWajah, setCurrentIdentifikasiWajah] =
        React.useState([]);
    const [currentTersangka, setCurrentTersangka] = React.useState([]);

    useEffect(() => {
        setCurrentIdentifikasiWajah(
            identifikasi_wajah.filter(
                (data) =>
                    moment(data.created_at).format("MMMM") ===
                    selectedBulanIdentifikasiWajah
            )
        );
    }, [selectedBulanIdentifikasiWajah]);

    useEffect(() => {
        setCurrentTersangka(
            tersangka.filter(
                (data) =>
                    moment(data.created_at).format("MMMM") ===
                    selectedBulanTersangka
            )
        );
    }, [selectedBulanTersangka]);

    useEffect(() => {
        setCurrentTahunIdentifikasiWajah(
            identifikasi_wajah.filter(
                (data) =>
                    moment(data.created_at).format("YYYY") ===
                    selectedTahunIdentifikasiWajah
            )
        );
    }, [selectedTahunIdentifikasiWajah]);

    useEffect(() => {
        setCurrentTahunTersangka(
            tersangka.filter(
                (data) =>
                    moment(data.created_at).format("YYYY") ===
                    selectedTahunTersangka
            )
        );
    }, [selectedTahunTersangka]);

    return (
        <Layout>
            <div className="w-full p-2 flex gap-5">
                <div className="w-full p-2 flex flex-col gap-5">
                    <div className="w-full bg-green-400/90 rounded-md  flex flex-row gap-5">
                        <div className="bg-green-600 p-2 rounded-s-md flex items-center justify-center px-5">
                            <i className="fas fa-camera-retro text-[5rem] text-white"></i>
                        </div>
                        <div className="flex flex-col gap-2 text-white p-2 w-full">
                            <div className="w-full flex justify-between">
                                <h1 className=" drop-shadow-xl text-md font-semibold uppercase">
                                    Identifikasi Wajah
                                </h1>
                                <select
                                    className="p-2 bg-green-600 rounded-md text-white"
                                    onChange={(e) =>
                                        setSelectedBulanIdentifikasiWajah(
                                            e.target.value
                                        )
                                    }
                                >
                                    {bulan.map((data) => (
                                        <option value={data} key={data}>
                                            {data}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <h2 className=" drop-shadow-xl text-3xl font-extrabold underline">
                                {currentIdentifikasiWajah?.length}
                            </h2>
                            <p className=" drop-shadow-xl text-sm">
                                Pada senin, 12 Juli 2021
                            </p>
                        </div>
                    </div>
                    <div className="w-full bg-green-400/90 rounded-md  flex flex-col ">
                        <div className="flex-row flex p-2 relative mt-4">
                            <div className="flex flex-col gap-2 p-5 text-white">
                                <div className=" absolute right-0 -top-4 p-1">
                                    <select
                                        className="p-2 bg-green-600 rounded-md text-white"
                                        onChange={(e) =>
                                            setSelectedTahunIdentifikasiWajah(
                                                e.target.value
                                            )
                                        }
                                    >
                                        {tahun_identifikasi_wajah.map(
                                            (data) => (
                                                <option value={data} key={data}>
                                                    {data}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>
                                <h2 className=" drop-shadow-xl text-5xl font-extrabold ">
                                    {currentTahunIdentifikasiWajah?.length}
                                </h2>
                                <p className=" drop-shadow-xl text-md">
                                    Total Identifikasi Wajah pada tahun 2021
                                </p>
                            </div>
                            <div className="w-1/2 p-2 flex items-center justify-center">
                                <i className="fas fa-camera-retro text-[5rem] text-white text-opacity-60"></i>
                            </div>
                        </div>
                        <div className="w-full p-2 bg-green-500 rounded-b-md justify-center flex items-center">
                            <p className=" drop-shadow-xl text-sm text-white">
                                Detail pada tahun 2021
                            </p>
                            <div className="bg-white p-1 px-2 rounded-full ml-2 flex items-center justify-center">
                                <i className="fas fa-arrow-right text-xs text-gray-400 "></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full p-2 flex flex-col gap-5">
                    <div className="w-full bg-yellow-400/90 rounded-md  flex flex-row gap-5">
                        <div className="bg-yellow-600 p-2 rounded-s-md flex items-center justify-center px-5">
                            <i className="fas fa-user-tie text-[5rem] text-white"></i>
                        </div>
                        <div className="flex flex-col gap-2 text-white p-2 w-full">
                            <div className="w-full flex justify-between">
                                <h1 className=" drop-shadow-xl text-md font-semibold uppercase">
                                    Tersangka
                                </h1>
                                <select
                                    className="p-2 bg-yellow-600 rounded-md text-white"
                                    onChange={(e) =>
                                        setSelectedBulanTersangka(
                                            e.target.value
                                        )
                                    }
                                >
                                    {bulan.map((data) => (
                                        <option value={data} key={data}>
                                            {data}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <h2 className=" drop-shadow-xl text-2xl font-extrabold underline">
                                {currentTersangka?.length}
                            </h2>
                            <p className=" drop-shadow-xl text-sm">
                                Pada senin, 12 Juli 2021
                            </p>
                        </div>
                    </div>
                    <div className="w-full bg-yellow-400/90 rounded-md  flex flex-col ">
                        <div className="flex-row flex p-2 relative mt-4">
                            <div className="flex flex-col gap-2 p-5 text-white">
                                <div className=" absolute right-0 -top-4 p-1">
                                    <select
                                        className="p-2 bg-yellow-600 rounded-md text-white"
                                        onChange={(e) =>
                                            setSelectedTahunTersangka(
                                                e.target.value
                                            )
                                        }
                                    >
                                        {tahun_tersangka.map((data) => (
                                            <option value={data} key={data}>
                                                {data}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <h2 className=" drop-shadow-xl text-5xl font-extrabold ">
                                    {currentTahunTersangka?.length}
                                </h2>
                                <p className=" drop-shadow-xl text-md">
                                    Total Identifikasi Wajah pada tahun 2021
                                </p>
                            </div>
                            <div className="w-1/2 p-2 flex items-center justify-center">
                                <i className="fas fa-user-tie text-[5rem] text-white text-opacity-60"></i>
                            </div>
                        </div>
                        <div className="w-full p-2 bg-yellow-500 rounded-b-md justify-center flex items-center">
                            <p className=" drop-shadow-xl text-sm text-white">
                                Detail pada tahun 2021
                            </p>
                            <div className="bg-white p-1 px-2 rounded-full ml-2 flex items-center justify-center">
                                <i className="fas fa-arrow-right text-xs text-gray-400 "></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
