export const returnApiError = (error: any) => {
    if (Array.isArray(error?.response?.data?.msg))
        return error?.response?.data.msg[0];
    if (
        typeof error?.response?.data === 'object' &&
        !Array.isArray(error?.response?.data?.msg)
    )
        return error.response?.data.msg;
    return error.msg;
};
