export const validateRole = (role) => {
    switch (role) {
        case 1:
            return "admin";
        case 2:
            return "pusinafis";
        case 3:
            return "polda";
        case 4:
            return "polres";
    }
};

export const validateHeader = (role) => {
    switch (role) {
        case 1:
            return "admin";
        case 2:
            return "pusinafis";
        case 3:
            return "polda";
        case 4:
            return "polres";
    }
};

export const validateHrefinRole = (role) => {
    switch (role) {
        case 1:
            return "/admin";
        case 2:
            return "/pusinafis";
        case 3:
            return "/polda";
        case 4:
            return "/polres";
    }
};
