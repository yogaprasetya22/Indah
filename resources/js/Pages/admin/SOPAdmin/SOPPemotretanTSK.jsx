import Layout from "@/Layouts/Layout";
import React, { useState, useRef, useMemo, useEffect } from "react";
import parse from "html-react-parser";
import { router, usePage } from "@inertiajs/react";
import FroalaEditor from "react-froala-wysiwyg";
import Froalaeditor from "froala-editor";
// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

export default function SOPPemotretanTSK({ data }) {
    const { title } = usePage().props;
    const [model, setModel] = useState(data?.deskripsi || "");

    const handleSumbit = () => {
        router.post(route("admin.create-sop-pemotretan-tsk"), {
            value: model,
        });
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
                    <form method="dialog" className="froala-font">
                        <FroalaEditor
                            tag="textarea"
                            model={model}
                            onModelChange={setModel}
                            config={{
                                enter: Froalaeditor.ENTER_BR,
                                tableStyles: {
                                    "no-border": "No border",
                                },
                                useClasses: false,
                                attribution: false,
                                toolbarSticky: false,
                                charCounterCount: false,
                                fontFamilySelection: true,
                                fontSizeSelection: true,
                                paragraphFormatSelection: true,
                                heightMin: 300,
                                heightMax: 450,
                                linkInsertButtons: [],
                                toolbarButtons: [
                                    "bold",
                                    "italic",
                                    "underline",
                                    "strikeThrough",
                                    "fontFamily",
                                    "fontSize",
                                    "textColor",
                                    "paragraphFormat",
                                    "lineHeight",
                                    "align",
                                    "formatOL",
                                    "formatUL",
                                    "outdent",
                                    "indent",
                                    "leftToRight",
                                    "rightToLeft",
                                    "insertLink",
                                    "insertImage",
                                    "insertTable",
                                    "emoticons",
                                    "personalize",
                                    "insertButton",
                                    "insertHR",
                                    "undo",
                                    "redo",
                                    "fullscreen",
                                    "html",
                                ],
                                linkList: [],
                                events: {
                                    initialized: function () {
                                        replyEditor = this;
                                    },
                                    blur: () => {
                                        console.log(replyEditor.html.get(true));
                                    },
                                    "image.beforeUpload": function (files) {
                                        var editor = this;
                                        if (files.length) {
                                            // Create a File Reader.
                                            var reader = new FileReader();
                                            // Set the reader to insert images when they are loaded.
                                            reader.onload = function (e) {
                                                var result = e.target.result;
                                                editor.image.insert(
                                                    result,
                                                    null,
                                                    null,
                                                    editor.image.get()
                                                );
                                            };
                                            // Read image as base64.
                                            reader.readAsDataURL(files[0]);
                                        }
                                        editor.popups.hideAll();
                                        // Stop default upload chain.
                                        return false;
                                    },
                                },
                            }}
                        />
                        <button
                            className="absolute bottom-2 right-2 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleSumbit}
                        >
                            Simpan ke database
                        </button>
                    </form>
                </div>
            </dialog>

            <div className="w-full bg-white rounded-md p-2 px-10">
                {data?.deskripsi ? (
                    <FroalaEditorView model={model} />
                ) : (
                    parse(
                        `<p className="text-center text-xl font-semibold">${title} belum di edit</p>`
                    )
                )}
            </div>
        </Layout>
    );
}
