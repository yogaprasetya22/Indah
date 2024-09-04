import InputError from "@/Components/ui/InputError";
import InputLabel from "@/Components/ui/InputLabel";
import TextInput from "@/Components/ui/TextInput";
import React from "react";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function UpdateUser({ results, title }) {
    const { wilayah, role } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        id: "",
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        wilayah_id: "",
        role_id: "",
    });

    useEffect(() => {
        setData({
            id: results?.id,
            name: results?.name,
            email: results?.email,
            wilayah_id: results?.wilayah_id,
            role_id: results?.role_id,
        });
    }, [results]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.role_id == 1) {
            post(route("admin.update-user.update"), {
                onStart: () => {
                    if (data.password !== data.password_confirmation) {
                        errors.password =
                            "Password dan Password Confirmation tidak sama";
                        errors.password_confirmation =
                            "Password dan Password Confirmation tidak sama";

                        return () => {
                            reset("password", "password_confirmation");
                        };
                    }
                },
                onSuccess: () => window.my_modal_1.close(),
                onError: (e) => {
                    console.log(e);
                },
            });
        } else {
            post(route("update-user.update"), {
                onStart: () => {
                    if (data.password !== data.password_confirmation) {
                        errors.password =
                            "Password dan Password Confirmation tidak sama";
                        errors.password_confirmation =
                            "Password dan Password Confirmation tidak sama";

                        return () => {
                            reset("password", "password_confirmation");
                        };
                    }
                },
                onSuccess: () => window.my_modal_1.close(),
                onError: (e) => {
                    console.log(e);
                },
            });
        }
    };

    return (
        <dialog
            id="my_modal_2"
            className="modal backdrop-blur-sm backdrop-brightness-75"
        >
            <div className="modal-box w-full max-w-5xl overflow">
                <div className="w-full flex flex-col gap-5">
                    <div className="w-full flex flex-row justify-between items-center z-10">
                        <h1 className="text-2xl font-bold text-gray-500">
                            {title}
                        </h1>
                        <button
                            onClick={() => {
                                window.my_modal_2.close();
                            }}
                            className="text-2xl hover:text-gray-400 select-none"
                            aria-label="close modal"
                        >
                            <i className="fas fa-times text-sm"></i>
                        </button>
                    </div>
                    <div className="w-full flex flex-col gap-5">
                        <form
                            className="flex flex-col gap-5"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-row gap-5">
                                    <div className="flex flex-col gap-2 w-full">
                                        <InputLabel
                                            htmlFor="update_name"
                                            value="Name"
                                        />
                                        <TextInput
                                            id="update_name"
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            className="mt-1 block w-full"
                                            autoComplete="name"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <div className="flex flex-col gap-2 w-full">
                                        <InputLabel
                                            htmlFor="update_email"
                                            value="Email"
                                        />
                                        <TextInput
                                            id="update_email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="mt-1 block w-full"
                                            autoComplete="email"
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.email}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <div className="flex flex-col gap-2 w-full">
                                        <InputLabel
                                            htmlFor="update_password"
                                            value="Password"
                                        />
                                        <TextInput
                                            id="update_password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            className="mt-1 block w-full"
                                            autoComplete="new-password"
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.password}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <InputLabel
                                            htmlFor="update_password_confirmation"
                                            value="Confirm Password"
                                        />
                                        <TextInput
                                            id="update_password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            className="mt-1 block w-full"
                                            autoComplete="new-password"
                                            onChange={(e) =>
                                                setData(
                                                    "password_confirmation",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={
                                                errors.password_confirmation
                                            }
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <div className="flex flex-col gap-2 w-full">
                                        <InputLabel
                                            htmlFor="role_id"
                                            value="Role"
                                        />
                                        {
                                            <select
                                                id="role_id"
                                                name="role_id"
                                                value={data.role_id}
                                                className="mt-1 block w-full"
                                                onChange={(e) =>
                                                    setData(
                                                        "role_id",
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="" disabled>
                                                    Pilih Role
                                                </option>
                                                {role.map((item) => (
                                                    <option
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.name_role}
                                                    </option>
                                                ))}
                                            </select>
                                        }
                                        <InputError
                                            message={errors.role_id}
                                            className="mt-2"
                                        />
                                    </div>
                                    {data?.role_id == 1 ? null : (
                                        <>
                                            {data?.role_id == 2 ? (
                                                <div className="flex flex-col gap-2 w-full">
                                                    <InputLabel
                                                        htmlFor="wilayah_id"
                                                        value="Wilayah"
                                                    />
                                                    {
                                                        <select
                                                            id="wilayah_id"
                                                            name="wilayah_id"
                                                            value={35}
                                                            className="mt-1 block w-full"
                                                            onChange={(e) =>
                                                                setData(
                                                                    "wilayah_id",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        >
                                                            {wilayah.map(
                                                                (item) => (
                                                                    <option
                                                                        key={
                                                                            item.id
                                                                        }
                                                                        disabled={
                                                                            item.id ==
                                                                            35
                                                                                ? false
                                                                                : true
                                                                        }
                                                                        value={
                                                                            item.id
                                                                        }
                                                                    >
                                                                        {
                                                                            item.nama
                                                                        }
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    }
                                                    <InputError
                                                        message={
                                                            errors.wilayah_id
                                                        }
                                                        className="mt-2"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="flex flex-col gap-2 w-full">
                                                    <InputLabel
                                                        htmlFor="wilayah_id"
                                                        value="Wilayah"
                                                    />
                                                    {
                                                        <select
                                                            id="wilayah_id"
                                                            name="wilayah_id"
                                                            value={
                                                                data.wilayah_id
                                                            }
                                                            className="mt-1 block w-full"
                                                            onChange={(e) =>
                                                                setData(
                                                                    "wilayah_id",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        >
                                                            <option
                                                                value=""
                                                                disabled
                                                            >
                                                                Pilih Wilayah
                                                            </option>
                                                            {wilayah.map(
                                                                (item) => (
                                                                    <option
                                                                        key={
                                                                            item.id
                                                                        }
                                                                        disabled={
                                                                            item.id ==
                                                                            35
                                                                                ? true
                                                                                : false
                                                                        }
                                                                        value={
                                                                            item.id
                                                                        }
                                                                    >
                                                                        {
                                                                            item.nama
                                                                        }
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    }
                                                    <InputError
                                                        message={
                                                            errors.wilayah_id
                                                        }
                                                        className="mt-2"
                                                    />
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="btn bg-green-600/80 text-white"
                                    disabled={processing}
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </dialog>
    );
}
