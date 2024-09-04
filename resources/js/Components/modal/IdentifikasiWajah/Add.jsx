import InputError from "@/Components/ui/InputError";
import InputLabel from "@/Components/ui/InputLabel";
import TextInput from "@/Components/ui/TextInput";
import React from "react";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { PhotoView } from "react-photo-view";

export default function Add({ title }) {
    const { auth } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        tanggal_proses: "",
        dasar_rujukan: "",
        ident_polda_res: auth.user.wilayah.wilayah_hukum,
        operator: "",
        perkara: "",
        foto_target: "",
        foto_hasil_fr: "",
        demo_grafi: "",
        nama: "",
        nik: "",
    });
    const [fotoTargetPreview, setFotoTargetPreview] = useState(null);
    const [fotoHasilFrPreview, setFotoHasilFrPreview] = useState(null);
    const [fotoHasilDemoGrafiPreview, setFotoHasilDemoGrafiPreview] = useState(null);

    const handleAddRecord = (e) => {
        e.preventDefault();
        post(route("create-identifikasi-wajah.store"), {
            onSuccess: () => {
                window.my_modal_1.close();
                setFotoTargetPreview(null);
                setFotoHasilFrPreview(null);
                setFotoHasilDemoGrafiPreview(null);
                reset();
            },
            onError: (e) => {
                console.log(e);
            },
        });
    };

    const handleFotoTargetChange = (e) => {
        const file = e.target.files[0];
        setData("foto_target", file);

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setFotoTargetPreview(e.target.result);
            reader.readAsDataURL(file);
        } else {
            setFotoTargetPreview(null);
        }
    };

    const handleFotoHasilFrChange = (e) => {
        const file = e.target.files[0];
        setData("foto_hasil_fr", file);

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setFotoHasilFrPreview(e.target.result);
            reader.readAsDataURL(file);
        } else {
            setFotoHasilFrPreview(null);
        }
    };

    const handleDataDemoGrafiChange = (e) => {
        const file = e.target.files[0];
        setData("demo_grafi", file);

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) =>
                setFotoHasilDemoGrafiPreview(e.target.result);
            reader.readAsDataURL(file);
        } else {
            setFotoHasilDemoGrafiPreview(null);
        }
    };

    return (
        <dialog
            id="my_modal_1"
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
                                            htmlFor="tanggal_proses"
                                            value="Tanggal Proses"
                                        />
                                        <TextInput
                                            id="tanggal_proses"
                                            type="date"
                                            name="tanggal_proses"
                                            value={data.tanggal_proses}
                                            className="mt-1 block w-full"
                                            autoComplete="tanggal_proses"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "tanggal_proses",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.tanggal_proses}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <InputLabel
                                            htmlFor="dasar_rujukan"
                                            value="Dasar Rujukan"
                                        />
                                        <TextInput
                                            id="dasar_rujukan"
                                            type="text"
                                            name="dasar_rujukan"
                                            value={data.dasar_rujukan}
                                            className="mt-1 block w-full"
                                            autoComplete="dasar_rujukan"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "dasar_rujukan",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.dasar_rujukan}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <InputLabel
                                            htmlFor="ident_polda_res"
                                            value="Ident Polda Res"
                                        />
                                        <TextInput
                                            id="ident_polda_res"
                                            type="text"
                                            name="ident_polda_res"
                                            value={data.ident_polda_res}
                                            className="mt-1 block w-full"
                                            autoComplete="ident_polda_res"
                                            readOnly
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "ident_polda_res",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.ident_polda_res}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <div className="flex flex-col gap-2 w-full">
                                        <InputLabel
                                            htmlFor="operator"
                                            value="Operator"
                                        />
                                        <TextInput
                                            id="operator"
                                            type="text"
                                            name="operator"
                                            value={data.operator}
                                            className="mt-1 block w-full"
                                            autoComplete="operator"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "operator",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.operator}
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
                                        <InputLabel htmlFor="nik" value="NIK" />
                                        <TextInput
                                            id="nik"
                                            type="text"
                                            name="nik"
                                            value={data.nik}
                                            className="mt-1 block w-full"
                                            autoComplete="nik"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("nik", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.nik}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-5">
                                <div className="flex flex-col gap-2 w-full">
                                    <InputLabel
                                        htmlFor="foto_target"
                                        value="Foto Target"
                                    />
                                    <input
                                        id="foto_target"
                                        type="file"
                                        accept="image/*"
                                        name="foto_target"
                                        className="mt-1 block w-full"
                                        onChange={handleFotoTargetChange}
                                    />
                                    {fotoTargetPreview && (
                                        <PhotoView src={fotoTargetPreview}>
                                            <img
                                                src={fotoTargetPreview}
                                                alt="Foto Target Preview"
                                                className="mt-2 w-[15rem] object-cover"
                                            />
                                        </PhotoView>
                                    )}
                                    <InputError
                                        message={errors.foto_target}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <InputLabel
                                        htmlFor="foto_hasil_fr"
                                        value="Foto Hasil FR"
                                    />
                                    <input
                                        id="foto_hasil_fr"
                                        type="file"
                                        accept="image/*"
                                        name="foto_hasil_fr"
                                        className="mt-1 block w-full"
                                        onChange={handleFotoHasilFrChange}
                                    />
                                    {fotoHasilFrPreview && (
                                        <PhotoView src={fotoHasilFrPreview}>
                                            <img
                                                src={fotoHasilFrPreview}
                                                alt="Foto Hasil FR Preview"
                                                className="mt-2 w-[15rem] object-cover"
                                            />
                                        </PhotoView>
                                    )}
                                    <InputError
                                        message={errors.foto_hasil_fr}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <InputLabel
                                        htmlFor="demo_grafi"
                                        value="Data Demo Grafi"
                                    />
                                    <input
                                        id="demo_grafi"
                                        type="file"
                                        accept="image/*"
                                        name="demo_grafi"
                                        className="mt-1 block w-full"
                                        onChange={handleDataDemoGrafiChange}
                                    />
                                    {fotoHasilDemoGrafiPreview && (
                                        <PhotoView src={fotoHasilDemoGrafiPreview}>
                                            <img
                                                src={fotoHasilDemoGrafiPreview}
                                                alt="Data Demo Grafi Preview"
                                                className="mt-2 w-[15rem] object-cover"
                                            />
                                        </PhotoView>
                                    )}
                                    <InputError
                                        message={errors.demo_grafi}
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
