import InputError from "@/Components/ui/InputError";
import InputLabel from "@/Components/ui/InputLabel";
import TextInput from "@/Components/ui/TextInput";
import React, { useState, useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { PhotoView } from "react-photo-view";

export default function UpdateTersangka({ result, title }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        uuid: result?.uuid,
        user_id: result?.user_id,
        foto_depan: "",
        foto_kanan: "",
        foto_kiri: "",
        nama: "",
        ttl: "",
        alamat: "",
        perkara: "",
    });
    const [fotoDepanPreview, setFotoDepanPreview] = useState(null);
    const [fotoKananPreview, setFotoKananPreview] = useState(null);
    const [fotoKiriPreview, setFotoKiriPreview] = useState(null);

    useEffect(() => {
        if (result) {
            setData({
                uuid: result.uuid,
                user_id: result?.user_id,
                foto_depan: null,
                foto_kanan: null,
                foto_kiri: null,
                nama: result.nama,
                ttl: result.ttl,
                alamat: result.alamat,
                perkara: result.perkara,
            });
            if (result.foto_depan) {
                setFotoDepanPreview(
                    route("file.get", {
                        direktori: "tersangka",
                        role: result.user.role.name_role,
                        uuid: result.user.uuid,
                        disk: "foto-depan",
                        filename: result.foto_depan,
                    })
                );
            } else {
                setFotoDepanPreview(null);
            }

            if (result.foto_kanan) {
                setFotoKananPreview(
                    route("file.get", {
                        direktori: "tersangka",
                        role: result.user.role.name_role,
                        uuid: result.user.uuid,
                        disk: "foto-kanan",
                        filename: result.foto_kanan,
                    })
                );
            } else {
                setFotoKananPreview(null);
            }

            if (result.foto_kiri) {
                setFotoKiriPreview(
                    route("file.get", {
                        direktori: "tersangka",
                        role: result.user.role.name_role,
                        uuid: result.user.uuid,
                        disk: "foto-kiri",
                        filename: result.foto_kiri,
                    })
                );
            } else {
                setFotoKiriPreview(null);
            }
        }
    }, [result]);

    const handleAddRecord = (e) => {
        e.preventDefault();
        post(route("update-tersangka.update"), {
            onSuccess: () => window.my_modal_2.close(),
            onError: (e) => {
                console.log(e);
            },
        });
    };

    const handleFotoDepanChange = (e) => {
        const file = e.target.files[0];
        setData("foto_depan", file);

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setFotoDepanPreview(e.target.result);
            reader.readAsDataURL(file);
        } else {
            setFotoDepanPreview(null);
        }
    };

    const handleFotoKananChange = (e) => {
        const file = e.target.files[0];
        setData("foto_kanan", file);

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setFotoKananPreview(e.target.result);
            reader.readAsDataURL(file);
        } else {
            setFotoKananPreview(null);
        }
    };

    const handleFotoKiriChange = (e) => {
        const file = e.target.files[0];
        setData("foto_kiri", file);

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setFotoKiriPreview(e.target.result);
            reader.readAsDataURL(file);
        } else {
            setFotoKiriPreview(null);
        }
    };

    return (
        <dialog
            id="my_modal_2"
            className="modal backdrop-blur-sm backdrop-brightness-75"
        >
            <div className="modal-box w-full max-w-5xl overflow">
                <div className="w-full flex flex-col gap-5">
                    <div className="w-full flex flex-row justify-between items-center z-10">
                        <h1 className="text-2xl font-bold text-gray-500">
                            {title}
                        </h1>
                        <button
                            onClick={() => {
                                window.my_modal_2.close();
                            }}
                            className="text-2xl hover:text-gray-400 select-none"
                            aria-label="close modal"
                        >
                            <i className="fas fa-times text-sm"></i>
                        </button>
                    </div>
                    <div className="w-full flex flex-col gap-5">
                        <form
                            className="flex flex-col gap-5"
                            onSubmit={handleAddRecord}
                        >
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-row gap-5">
                                    <div className="flex flex-col gap-2 w-full">
                                        <InputLabel
                                            htmlFor="update_nama"
                                            value="Nama"
                                        />
                                        <TextInput
                                            id="update_nama"
                                            type="text"
                                            name="nama"
                                            value={data.nama}
                                            className="mt-1 block w-full"
                                            autoComplete="nama"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("nama", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.nama}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <div className="flex flex-col gap-2 w-full">
                                        <InputLabel
                                            htmlFor="update_ttl"
                                            value="Tempat/Tanggal Lahir"
                                        />
                                        <TextInput
                                            id="update_ttl"
                                            type="text"
                                            name="ttl"
                                            value={data.ttl}
                                            className="mt-1 block w-full"
                                            autoComplete="ttl"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("ttl", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.ttl}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <InputLabel
                                            htmlFor="update_alamat"
                                            value="Alamat"
                                        />
                                        <TextInput
                                            id="update_alamat"
                                            type="text"
                                            name="alamat"
                                            value={data.alamat}
                                            className="mt-1 block w-full"
                                            autoComplete="alamat"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "alamat",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.alamat}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <div className="flex flex-col gap-2 w-full">
                                        <InputLabel
                                            htmlFor="update_perkara"
                                            value="Perkara"
                                        />
                                        <TextInput
                                            id="update_perkara"
                                            type="text"
                                            name="perkara"
                                            value={data.perkara}
                                            className="mt-1 block w-full"
                                            autoComplete="perkara"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "perkara",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.perkara}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <div className="flex flex-col gap-2 w-full">
                                        <InputLabel
                                            htmlFor="foto_depan"
                                            value="Foto Depan"
                                        />
                                        <input
                                            id="foto_depan"
                                            type="file"
                                            accept="image/*"
                                            name="foto_depan"
                                            className="mt-1 block w-full"
                                            onChange={handleFotoDepanChange}
                                        />
                                        {fotoDepanPreview && (
                                            <PhotoView src={fotoDepanPreview}>
                                                <img
                                                    src={fotoDepanPreview}
                                                    alt="Foto Depan Preview"
                                                    className="mt-2 w-[15rem] object-cover"
                                                />
                                            </PhotoView>
                                        )}
                                        <InputError
                                            message={errors.foto_depan}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <InputLabel
                                            htmlFor="foto_kanan"
                                            value="Foto Kanan"
                                        />
                                        <input
                                            id="foto_kanan"
                                            type="file"
                                            accept="image/*"
                                            name="foto_kanan"
                                            className="mt-1 block w-full"
                                            onChange={handleFotoKananChange}
                                        />
                                        {fotoKananPreview && (
                                            <PhotoView src={fotoKananPreview}>
                                                <img
                                                    src={fotoKananPreview}
                                                    alt="Foto Kanan Preview"
                                                    className="mt-2 w-[15rem] object-cover"
                                                />
                                            </PhotoView>
                                        )}
                                        <InputError
                                            message={errors.foto_kanan}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <InputLabel
                                            htmlFor="foto_kiri"
                                            value="Foto Kiri"
                                        />
                                        <input
                                            id="foto_kiri"
                                            type="file"
                                            accept="image/*"
                                            name="foto_kiri"
                                            className="mt-1 block w-full"
                                            onChange={handleFotoKiriChange}
                                        />
                                        {fotoKiriPreview && (
                                            <PhotoView src={fotoKiriPreview}>
                                                <img
                                                    src={fotoKiriPreview}
                                                    alt="Foto Kiri Preview"
                                                    className="mt-2 w-[15rem] object-cover"
                                                />
                                            </PhotoView>
                                        )}
                                        <InputError
                                            message={errors.foto_kiri}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="btn bg-indigo-600/80 text-white"
                                    disabled={processing}
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </dialog>
    );
}
