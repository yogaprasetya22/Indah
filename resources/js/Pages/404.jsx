import { validateHrefinRole } from "@/Components/Example";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Fail({ auth }) {
    
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="text-xl text-gray-600">
                    Halaman tidak dapat diakses
                </p>
                <br />
                <Link
                    href={validateHrefinRole(auth?.user.role_id)}
                    className="btn btn-primary"
                >
                    kembali ke halaman
                </Link>
            </div>
        </div>
    );
}
