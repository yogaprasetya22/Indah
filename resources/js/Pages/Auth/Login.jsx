import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/ui/InputError";
import InputLabel from "@/Components/ui/InputLabel";
import PrimaryButton from "@/Components/ui/PrimaryButton";
import TextInput from "@/Components/ui/TextInput";
import Checkbox from "@/Components/ui/Checkbox";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <>
            <Head title="Contact Us" />

            <section
                className="w-full text-gray-900 py-36 bg-center bg-cover bg-no-repeat h-screen"
                style={{
                    backgroundImage: "url('bg.jpg')",
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                    <div className="lg:w-3/6 lg:pr-0 pr-0 -mt-[8.5rem]">
                        <h1 className="font-extrabold text-5xl text-indigo-500 text-shadow">
                            INDAH
                        </h1>
                        <p className="leading-relaxed mt-4 text-indigo-500 text-shadow">
                            Aplikasi Sistem Inafis Data Wajah (INDAH) adalah
                            aplikasi yang digunakan untuk memudahkan oleh
                            personal pusinafis dan identifikasi jajaran
                            kewilayahan guna mewujudkan pengelolaan data ungkap
                            identitas melalui raut wajah yang akurat dan
                            akuntabel.
                        </p>
                    </div>
                    <div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-50 p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md">
                        {status && (
                            <div className="mb-4 font-medium text-sm text-green-600">
                                {status}
                            </div>
                        )}
                        <center>
                            <h1 className="font-medium text-2xl text-gray-900">
                                Login
                            </h1>

                            <p className="text-gray-600 mt-2">
                                Log in to your account
                            </p>
                        </center>
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="block mt-4">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked
                                            )
                                        }
                                    />
                                    <span className="ml-2 text-sm text-gray-600">
                                        Remember me
                                    </span>
                                </label>
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton
                                    className="ml-4"
                                    disabled={processing}
                                >
                                    Log in
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
