import Layout from "@/Layouts/Layout";
import React from "react";

export default function Index({ auth, tersangka, identifikasi_wajah }) {
    return (
        <Layout>
            <span className="text-extrabold text-2xl">
                {" "}
                🙌 Selamat {auth.user.name} datang di dashboard
            </span>
            <div className="w-full flex flex-row justify-between gap-5 py-5">
                <div className="bg-indigo-500/80 w-full flex flex-col rounded p-2 gap-3">
                    <h1 className="text-center font-semibold text-lg text-white">
                        Identifikasi wajah
                    </h1>
                    <div className="border-t border-white"></div>
                    <h2 className="text-center font-semibold text-4xl text-white">
                        {identifikasi_wajah?.length}
                    </h2>
                </div>
                <div className="bg-indigo-500/80 w-full flex flex-col rounded p-2 gap-3">
                    <h1 className="text-center font-semibold text-lg text-white">
                        Tersangka
                    </h1>
                    <div className="border-t border-white"></div>
                    <h2 className="text-center font-semibold text-4xl text-white">
                        {tersangka?.length}
                    </h2>
                </div>
            </div>
        </Layout>
    );
}
