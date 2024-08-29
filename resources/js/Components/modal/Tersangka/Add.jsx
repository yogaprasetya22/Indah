import InputError from "@/Components/ui/InputError";
import InputLabel from "@/Components/ui/InputLabel";
import TextInput from "@/Components/ui/TextInput";
import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { PhotoView } from "react-photo-view";

export default function Add({ title }) {
    const { props } = usePage();
    const { data, setData, post, processing, errors, reset } = useForm({
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

    const handleAddRecord = (e) => {
        e.preventDefault();
        post(route("create-tersangka.store"), {
            onSuccess: () => {
                window.my_modal_1.close();
                setFotoDepanPreview(null)
                setFotoKananPreview(null)
                setFotoKiriPreview(null)
                reset();
            },
            onError: (e) => console.log(e),
        });
    };

    const handleFotoChange = (e, type) => {
        const file = e.target.files[0];
        setData(type, file);

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                switch (type) {
                    case "foto_depan":
                        setFotoDepanPreview(e.target.result);
                        break;
                    case "foto_kanan":
                        setFotoKananPreview(e.target.result);
                        break;
                    case "foto_kiri":
                        setFotoKiriPreview(e.target.result);
                        break;
                    default:
                        break;
                }
            };
            reader.readAsDataURL(file);
        } else {
            switch (type) {
                case "foto_depan":
                    setFotoDepanPreview(null);
                    break;
                case "foto_kanan":
                    setFotoKananPreview(null);
                    break;
                case "foto_kiri":
                    setFotoKiriPreview(null);
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <dialog
            id="my_modal_1"
            className="modal backdrop-blur-sm backdrop-brightness-75"
        >
            <div className="modal-box w-full max-w-6xl overflow">
                <div className="w-full flex flex-col gap-5">
                    <div className="w-full flex flex-row justify-between items-center z-10">
                        <h1 className="text-2xl font-bold text-gray-500">
                            {title}
                        </h1>
                        <button
                            onClick={() => {
                                window.my_modal_1.close();
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
                                            htmlFor="nama"
                                            value="Nama"
                                        />
                                        <TextInput
                                            id="nama"
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
                                    <div className="flex flex-col gap-2 w-full">
                                        <InputLabel
                                            htmlFor="ttl"
                                            value="Tempat/Tanggal Lahir"
                                        />
                                        <TextInput
                                            id="ttl"
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
                                </div>
                                <div className="flex flex-row gap-5">
                                    <div className="flex flex-col gap-2 w-full">
                                        <InputLabel
                                            htmlFor="alamat"
                                            value="Alamat"
                                        />
                                        <TextInput
                                            id="alamat"
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
                                    <div className="flex flex-col gap-2 w-full">
                                        <InputLabel
                                            htmlFor="perkara"
                                            value="Perkara"
                                        />
                                        <TextInput
                                            id="perkara"
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
                                        onChange={(e) =>
                                            handleFotoChange(e, "foto_depan")
                                        }
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
                                        onChange={(e) =>
                                            handleFotoChange(e, "foto_kanan")
                                        }
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
                                        onChange={(e) =>
                                            handleFotoChange(e, "foto_kiri")
                                        }
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
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="btn bg-indigo-600/80 text-white"
                                    disabled={processing}
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </dialog>
    );
}
