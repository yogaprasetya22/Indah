import { validateRole } from "@/Components/Example";

export const MenuDashboardValidate = (user) => {
    const MenuAdminDashboard = [
        {
            name: "Dashboard",
            url: `/${validateRole(user?.role_id)}`,
            icon: "fas fa-th-large",
        },
        {
            name: "Identifikasi Wajah",
            url: `/${validateRole(user?.role_id)}/identifikasi-wajah`,
            icon: "fas fa-camera-retro",
        },
        {
            name: "Tersangka",
            url: `/${validateRole(user?.role_id)}/tersangka`,
            icon: "fas fa-user-tie",
        },
        {
            name: "SOP",
            dropdown: [
                {
                    name: "SOP Pemotretan TKP",
                    url: `/${validateRole(user?.role_id)}/sop-pemotretan-tkp`,
                    icon: "fas fa-file-alt",
                },
                {
                    name: "SOP Pemotretan Barang Bukti",
                    url: `/${validateRole(
                        user?.role_id
                    )}/sop-pemotretan-barang-bukti`,
                    icon: "fas fa-file-alt",
                },
                {
                    name: "SOP Pemotretan TSK",
                    url: `/${validateRole(user?.role_id)}/sop-pemotretan-tsk`,
                    icon: "fas fa-file-alt",
                },
                {
                    name: "SOP Identifikasi Wajah",
                    url: `/${validateRole(
                        user?.role_id
                    )}/sop-identifikasi-wajah`,
                    icon: "fas fa-file-alt",
                },
                {
                    name: "SOP Rekontruksi Wajah",
                    url: `/${validateRole(
                        user?.role_id
                    )}/sop-rekontruksi-wajah`,
                    icon: "fas fa-file-alt",
                },
            ],
            icon: "fas fa-file-alt",
        },
    ];

    const MenuPusinafis = [
        {
            name: "Dashboard",
            url: `/${validateRole(user?.role_id)}`,
            icon: "fas fa-th-large",
        },
        {
            name: "Identifikasi Wajah",
            url: `/${validateRole(user?.role_id)}/identifikasi-wajah`,
            icon: "fas fa-camera-retro",
        },
        {
            name: "Tersangka",
            url: `/${validateRole(user?.role_id)}/tersangka`,
            icon: "fas fa-user-tie",
        },
        {
            name: "SOP",
            dropdown: [
                {
                    name: "SOP Pemotretan TKP",
                    url: `/${validateRole(user?.role_id)}/sop-pemotretan-tkp`,
                    icon: "fas fa-file-alt",
                },
                {
                    name: "SOP Pemotretan Barang Bukti",
                    url: `/${validateRole(
                        user?.role_id
                    )}/sop-pemotretan-barang-bukti`,
                    icon: "fas fa-file-alt",
                },
                {
                    name: "SOP Pemotretan TSK",
                    url: `/${validateRole(user?.role_id)}/sop-pemotretan-tsk`,
                    icon: "fas fa-file-alt",
                },
                {
                    name: "SOP Identifikasi Wajah",
                    url: `/${validateRole(
                        user?.role_id
                    )}/sop-identifikasi-wajah`,
                    icon: "fas fa-file-alt",
                },
                {
                    name: "SOP Rekontruksi Wajah",
                    url: `/${validateRole(
                        user?.role_id
                    )}/sop-rekontruksi-wajah`,
                    icon: "fas fa-file-alt",
                },
            ],
            icon: "fas fa-file-alt",
        },
    ];
    const MenuPolda = [
        {
            name: "Dashboard",
            url: `/${validateRole(user?.role_id)}`,
            icon: "fas fa-th-large",
        },
        {
            name: "Identifikasi Wajah",
            url: `/${validateRole(user?.role_id)}/identifikasi-wajah`,
            icon: "fas fa-camera-retro",
        },
        {
            name: "Tersangka",
            url: `/${validateRole(user?.role_id)}/tersangka`,
            icon: "fas fa-user-tie",
        },
        {
            name: "SOP",
            dropdown: [
                {
                    name: "SOP Pemotretan TKP",
                    url: `/${validateRole(user?.role_id)}/sop-pemotretan-tkp`,
                    icon: "fas fa-file-alt",
                },
                {
                    name: "SOP Pemotretan Barang Bukti",
                    url: `/${validateRole(
                        user?.role_id
                    )}/sop-pemotretan-barang-bukti`,
                    icon: "fas fa-file-alt",
                },
                {
                    name: "SOP Pemotretan TSK",
                    url: `/${validateRole(user?.role_id)}/sop-pemotretan-tsk`,
                    icon: "fas fa-file-alt",
                },
                {
                    name: "SOP Identifikasi Wajah",
                    url: `/${validateRole(
                        user?.role_id
                    )}/sop-identifikasi-wajah`,
                    icon: "fas fa-file-alt",
                },
                {
                    name: "SOP Rekontruksi Wajah",
                    url: `/${validateRole(
                        user?.role_id
                    )}/sop-rekontruksi-wajah`,
                    icon: "fas fa-file-alt",
                },
            ],
            icon: "fas fa-file-alt",
        },
    ];
    const MenuPolres = [
        {
            name: "Dashboard",
            url: `/${validateRole(user?.role_id)}`,
            icon: "fas fa-th-large",
        },
        {
            name: "Identifikasi Wajah",
            url: `/${validateRole(user?.role_id)}/identifikasi-wajah`,
            icon: "fas fa-camera-retro",
        },
        {
            name: "Tersangka",
            url: `/${validateRole(user?.role_id)}/tersangka`,
            icon: "fas fa-user-tie",
        },
        {
            name: "SOP",
            dropdown: [
                {
                    name: "SOP Pemotretan TKP",
                    url: `/${validateRole(user?.role_id)}/sop-pemotretan-tkp`,
                    icon: "fas fa-file-alt",
                },
                {
                    name: "SOP Pemotretan Barang Bukti",
                    url: `/${validateRole(
                        user?.role_id
                    )}/sop-pemotretan-barang-bukti`,
                    icon: "fas fa-file-alt",
                },
                {
                    name: "SOP Pemotretan TSK",
                    url: `/${validateRole(user?.role_id)}/sop-pemotretan-tsk`,
                    icon: "fas fa-file-alt",
                },
                {
                    name: "SOP Identifikasi Wajah",
                    url: `/${validateRole(
                        user?.role_id
                    )}/sop-identifikasi-wajah`,
                    icon: "fas fa-file-alt",
                },
                {
                    name: "SOP Rekontruksi Wajah",
                    url: `/${validateRole(
                        user?.role_id
                    )}/sop-rekontruksi-wajah`,
                    icon: "fas fa-file-alt",
                },
            ],
            icon: "fas fa-file-alt",
        },
    ];

    switch (user?.role_id) {
        case 1:
            return MenuAdminDashboard;
        case 2:
            return MenuPusinafis;
        case 3:
            return MenuPolda;
        case 4:
            return MenuPolres;
    }
};
