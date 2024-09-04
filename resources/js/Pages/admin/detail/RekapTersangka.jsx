import React, { useState, useEffect } from "react";
import moment from "moment/moment";
moment.locale("id");
import "moment/locale/id";
import { Head } from "@inertiajs/react";

export default function RekapTersangka({ data, tahun, wilayah, bulan }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const imagePromises = data.map((item) => {
            return Promise.all([
                (new Image().src = route("file.get", {
                    direktori: "tersangka",
                    role: item.user.role.name_role,
                    uuid: item.user.uuid,
                    disk: "foto-kanan",
                    filename: item?.foto_kanan,
                })),
                (new Image().src = route("file.get", {
                    direktori: "tersangka",
                    role: item.user.role.name_role,
                    uuid: item.user.uuid,
                    disk: "foto-kiri",
                    filename: item?.foto_kiri,
                })),
                (new Image().src = route("file.get", {
                    direktori: "tersangka",
                    role: item.user.role.name_role,
                    uuid: item.user.uuid,
                    disk: "foto-depan",
                    filename: item?.foto_depan,
                })),
            ]);
        });

        Promise.all(imagePromises).then(() => {
            setIsLoading(false);
        });
    }, [data]);

    const [print, setPrint] = useState(true);
    useEffect(() => {
        if (!print) {
            window.print();
        }
        setTimeout(() => {
            setPrint(true);
        }, 1500);
    }, [print]);

    return (
        <div className=" space-y-5">
            <Head
                title={`Rekap Tersangka ${tahun}${wilayah ? "-" : ""}${
                    wilayah ? wilayah : ""
                }${bulan ? "-" : ""}${bulan ? bulan : ""}`}
            />
            {isLoading ? (
                <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <>
                    {print && (
                        <div className="w-full bg-gray-200 flex justify-end p-2">
                            <button
                                onClick={() => {
                                    setPrint(false);
                                }}
                                className="btn bg-green-500 text-white"
                            >
                                Print
                            </button>
                        </div>
                    )}
                </>
            )}
            {wilayah && (
                <div className=" flex justify-start flex-col w-auto max-w-[40%] pl-5 mt-5 gap-2">
                    <h1 className="text-lg text-wrap text-center uppercase font-extrabold ">
                        {wilayah ? ` ${wilayah}` : ""}
                    </h1>
                    <div className="border-b border-black w-full"></div>
                </div>
            )}
            <div className="w-full flex flex-col items-center gap-2 ">
                <h1 className="text-center text-lg underline underline-offset-8 uppercase font-extrabold ">
                    Rekap Tersangka
                </h1>{" "}
            </div>
            <div className=" flex flex-col gap-5 rounded-xl px-10">
                <div className="overflow-x-auto overflow-table ">
                    <table className="table lg:table-xs 2xl:table-md ">
                        <thead className="border border-black bg-gray-300">
                            <tr className="font-bold text-lg text-black">
                                <th className="uppercase text-[10px] text-center border-r border-black ">
                                    No
                                </th>
                                <th className="uppercase text-[10px] text-center border-r border-black ">
                                    Foto Depan
                                </th>
                                <th className="uppercase text-[10px] text-center border-r border-black ">
                                    Foto Kanan
                                </th>
                                <th className="uppercase text-[10px] text-center border-r border-black ">
                                    Foto Kiri
                                </th>
                                <th className="uppercase text-[10px] text-center border-r border-black ">
                                    Nama
                                </th>
                                <th className="uppercase text-[10px] text-center border-r border-black ">
                                    TTL
                                </th>
                                <th className="uppercase text-[10px] text-center border-r border-black ">
                                    Alamat
                                </th>
                                <th className="uppercase text-[10px] text-center border-r border-black ">
                                    Perkara
                                </th>
                                <th className="uppercase text-[10px] text-center border-r border-black ">
                                    TGL UPLOAD{" "}
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border border-black bg-gray-300">
                            <tr>
                                <td className="text-center text-md font-extrabold max-w-[6rem] border border-black max-h-[6rem] break-words">
                                    (1)
                                </td>
                                <td className="text-center text-md font-extrabold max-w-[6rem] border border-black">
                                    (2)
                                </td>
                                <td className="text-center text-md font-extrabold max-w-[6rem] border border-black max-h-[6rem] break-words">
                                    (3)
                                </td>
                                <td className="text-center text-md font-extrabold max-w-[6rem] border border-black">
                                    (4)
                                </td>
                                <td className="text-center text-md font-extrabold max-w-[6rem] border border-black">
                                    (5)
                                </td>
                                <td className="text-center text-md font-extrabold max-w-[6rem] border border-black">
                                    (6)
                                </td>
                                <td className="text-center text-md font-extrabold max-w-[6rem] border border-black max-h-[6rem] break-words">
                                    (7)
                                </td>
                                <td className="text-center text-md font-extrabold max-w-[6rem] border border-black max-h-[6rem] break-words">
                                    (8)
                                </td>
                                <td className="text-center text-md font-extrabold max-w-[6rem] border border-black max-h-[6rem] break-words">
                                    (9)
                                </td>
                            </tr>
                        </tbody>
                        <tbody className="border border-black">
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td className="text-center text-xs max-w-[6rem] border border-black max-h-[6rem] break-words">
                                        {index + 1}
                                    </td>
                                    <td className="text-center text-xs max-w-[6rem] border border-black">
                                        <img
                                            src={route("file.get", {
                                                direktori: "tersangka",
                                                role: item.user.role.name_role,
                                                uuid: item.user.uuid,
                                                disk: "foto-depan",
                                                filename: item?.foto_depan,
                                            })}
                                            alt="Belum ke render coba reload"
                                            className="w-[4rem] max-h-[4rem] object-cover rounded mx-auto"
                                        />
                                    </td>
                                    <td className="text-center text-xs max-w-[6rem] border border-black">
                                        <img
                                            src={route("file.get", {
                                                direktori: "tersangka",
                                                role: item.user.role.name_role,
                                                uuid: item.user.uuid,
                                                disk: "foto-kanan",
                                                filename: item?.foto_kanan,
                                            })}
                                            alt="Belum ke render coba reload"
                                            className="w-[4rem] max-h-[4rem] object-cover rounded mx-auto"
                                        />
                                    </td>
                                    <td className="text-center text-xs max-w-[6rem] border border-black">
                                        <img
                                            src={route("file.get", {
                                                direktori: "tersangka",
                                                role: item.user.role.name_role,
                                                uuid: item.user.uuid,
                                                disk: "foto-kiri",
                                                filename: item?.foto_kiri,
                                            })}
                                            alt="Belum ke render coba reload"
                                            className="w-[4rem] max-h-[4rem] object-cover rounded mx-auto"
                                        />
                                    </td>
                                    <td className="text-center text-xs max-w-[6rem] border border-black">
                                        {item?.nama}
                                    </td>
                                    <td className="text-center text-xs max-w-[6rem] border border-black">
                                        {item?.ttl}
                                    </td>
                                    <td className="text-center text-xs max-w-[6rem] border border-black">
                                        {item?.alamat}
                                    </td>
                                    <td className="text-center text-xs max-w-[6rem] border border-black">
                                        {item?.perkara}
                                    </td>
                                    <td className="text-center text-xs max-w-[6rem] border border-black">
                                        {moment(item?.created_at).format("LL")}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
