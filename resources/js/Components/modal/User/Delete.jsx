import { useForm } from "@inertiajs/react";
import React from "react";
import { useEffect } from "react";

export default function Delete({ title, results }) {
    const {
        data,
        setData,
        delete: destroy,
        processing,
        errors,
    } = useForm({
        id: results?.id,
    });
    useEffect(() => {
        setData({
            id: results?.id,
        });
    }, [results]);

    const submit = (e) => {
        e.preventDefault();
        destroy(route("delete-user.destroy"), {
            onSuccess: () => {
                window.my_modal_3.close();
            },
        });
    };
    return (
        <dialog
            id="my_modal_3"
            className="modal backdrop-blur-sm backdrop-brightness-75"
        >
            <div className="modal-box w-full max-w-md overflow">
                <div className=" w-full flex flex-col gap-5">
                    <div className="w-full flex flex-row justify-between items-center  z-10">
                        <h1 className="text-2xl font-bold text-gray-500">
                            {title}
                        </h1>
                        <button
                            onClick={() => {
                                window.my_modal_3.close();
                            }}
                            className="text-2xl hover:text-gray-400 select-none"
                            aria-label="close modal"
                        >
                            <i className="fas fa-times text-sm"></i>
                        </button>
                    </div>
                    <div className=" w-full flex flex-col gap-5">
                        <h1 className="text-lg font-bold text-gray-500">
                            Apakah anda yakin ingin menghapus data ini?
                        </h1>
                        <button
                            onClick={submit}
                            className="btn bg-red-500 text-white"
                        >
                            Hapus
                        </button>
                    </div>
                </div>
            </div>
        </dialog>
    );
}
