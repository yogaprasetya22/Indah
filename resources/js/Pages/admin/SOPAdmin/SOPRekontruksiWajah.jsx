import Layout from "@/Layouts/Layout";
import React from "react";
import parse from "html-react-parser";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "@/Components/EditorToolbar";
import { router } from "@inertiajs/react";

export default function SOPRekontruksiWajah({ data }) {
    const [value, setValue] = React.useState(data?.deskripsi || "");
    const handleSumbit = () => {
        router.post(route("admin.create-sop-rekontruksi-wajah"), { value });
    };
    return (
        <Layout>
            <div className="fixed bottom-0 right-0 p-10 z-50 flex flex-col gap-2">
                <div className="flex justify-end">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => window.my_modal_1.show()}
                    >
                        Edit
                    </button>
                </div>
            </div>
            <dialog id="my_modal_1" className="modal backdrop-blur-sm ">
                <button
                    className=" btn btn-sm bg-gray-500/80 text-white btn-circle btn-ghost absolute right-2 top-2"
                    onClick={() => window.my_modal_1.close()}
                >
                    ✕
                </button>
                <div className="modal-box max-w-7xl overflow rounded-md">
                    <form method="dialog">
                        <div className="w-full bg-white rounded-md">
                            <div className=" sticky -top-6 z-40 bg-white">
                                <EditorToolbar />
                                <div className="flex justify-end absolute top-0 right-0 z-50 p-1">
                                    <button
                                        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={handleSumbit}
                                    >
                                        Simpan ke database
                                    </button>
                                </div>
                            </div>
                            <ReactQuill
                                theme="snow"
                                modules={modules}
                                formats={formats}
                                value={value}
                                onChange={setValue}
                                placeholder="Tulis SOP Identifikasi Wajah disini..."
                            />
                        </div>
                    </form>
                </div>
            </dialog>

            <div className="w-full bg-white rounded-md p-2">
                <div className="ql-editor ql">
                    {parse(data?.deskripsi || "")}
                </div>
            </div>
        </Layout>
    );
}
