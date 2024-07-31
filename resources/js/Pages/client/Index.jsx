import Layout from "@/Layouts/Layout";
import React from "react";

export default function Index({ title, auth, data }) {
    return (
        <Layout title={title} user={auth?.user}>
            <h1>Client</h1>
        </Layout>
    );
}