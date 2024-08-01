import Layout from "@/Layouts/Layout";
import React from "react";
import parse from "html-react-parser";
import "react-quill/dist/quill.snow.css";

export default function SOPPemotretanBarangBukti({ data }) {
    return (
        <Layout>
            <div className="w-full bg-white rounded-md p-2">
                <div className="ql-editor ql">
                    {parse(data?.deskripsi || "")}
                </div>
            </div>
        </Layout>
    );
}
