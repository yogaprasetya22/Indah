import Layout from "@/Layouts/Layout";
import React from "react";
import parse from "html-react-parser";
import "react-quill/dist/quill.snow.css";
import { usePage } from "@inertiajs/react";

export default function SOPPemotretanTKP({ data }) {
    const { title } = usePage().props;
    return (
        <Layout>
            <div className="w-full bg-white rounded-md p-2">
                <div className="ql-editor ql">
                    {data?.deskripsi
                        ? parse(data?.deskripsi)
                        : parse(
                              `<p className="text-center text-xl font-semibold">${title} belum di edit</p>`
                          )}
                </div>
            </div>
        </Layout>
    );
}
