import Cookies from "js-cookie"

export const getCookies = (value: any) => Cookies.get(value);
export const setCookies = (key: string, value: any,) => Cookies.set(key, value);
export const removeCookies = (value: any) => Cookies.remove(value);