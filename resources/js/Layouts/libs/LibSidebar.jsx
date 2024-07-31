import { validateRole } from "@/Components/Example";

export const MenuDashboardValidate = (user) => {
    const MenuAdminDashboard = [
        {
            name: "Dashboard",
            url: `/${validateRole(user?.role_id)}`,
            icon: "fas fa-th-large",
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
