export const STATUS = {
    PENDING: {
        isLoading: true,
        isSuccess: false,
        isError: false,
    },
    SUCCESS: {
        isLoading: false,
        isSuccess: true,
        isError: false,
    },
    ERROR: {
        isLoading: false,
        isSuccess: false,
        isError: true,
    },
};


export function getYear(date1: any, date2: any) {
    var d1: any = new Date(date1);
    var d2: any = new Date(date2);
    var difference = Math.abs(d1 - d2);
    var differenceEnAnnees = difference / (1000 * 60 * 60 * 24 * 365.25);
    return Math.round(differenceEnAnnees);
}

