import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Layout({ children }) {
    const { auth, title } = usePage().props;
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            {title && <Head title={title} />}
            <div className="h-screen w-full overflow-hidden">
                <div className="w-full h-full pb-20 flex">
                    <Sidebar isSidebarOpen={isSidebarOpen} user={auth.user} />
                    <div className="w-full">
                        <Header
                            user={auth.user}
                            toggleSidebar={toggleSidebar}
                            isSidebarOpen={isSidebarOpen}
                        />
                        <main
                            className={` h-full pb-20 overflow-auto bg-blue-gray-50 w-full p-4 md:p-8 ${
                                isSidebarOpen ? "blur-sm  brightness-50 " : ""
                            }`}
                        >
                            {children}
                        </main>
                        {/* <footer className="w-full h-7 bg-white flex justify-center items-center">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} - INDAH
                        </p>
                    </footer> */}
                    </div>
                </div>
            </div>
        </>
    );
}
