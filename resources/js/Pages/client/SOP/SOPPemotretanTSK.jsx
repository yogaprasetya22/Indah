import Layout from "@/Layouts/Layout";
import React from "react";
import parse from "html-react-parser";
import { usePage } from "@inertiajs/react";
// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

export default function SOPPemotretanTSK({ data }) {
    const { title } = usePage().props;
    return (
        <Layout>
            <div className="w-full bg-white rounded-md p-2">
                <div className="ql-editor ql">
                    {data?.deskripsi ? (
                        <FroalaEditorView model={model} />
                    ) : (
                        parse(
                            `<p className="text-center text-xl font-semibold">${title} belum di edit</p>`
                        )
                    )}
                </div>
            </div>
        </Layout>
    );
}
