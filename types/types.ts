import { returnApiError } from '@/components/helpers/api.error.handler';
import axios from 'axios';
import { HTMLAttributes } from 'react';

export type Theme = 'default' | 'auto' | 'dark';

export interface HTMLInputProps extends HTMLAttributes<HTMLInputElement> {
    type?: string;
    label: string;
    name: string;
    value: unknown;
    error: string | boolean;
    full?: boolean;
    required?: boolean;
    inputLabel?: string;
    linkInput?: string;
    errorMessage?: string;
}
export const API_URL = process.env.NEXT_PUBLIC_API_COINGE;

export const contract = {
    type: process.env.NEXT_PUBLIC_TYPES_SCRIPT,
    address: process.env.NEXT_PUBLIC_ADRESS_CONTRAT,
    script: process.env.NEXT_PUBLIC_SCRIPT
}

export const fromLovelace = (lovelace: string) => parseInt(lovelace) / 1000000;
export const fromStr = (str: string) => Buffer.from(str, "utf-8");
export const toHex = (bytes: any) => Buffer.from(bytes).toString("hex");
export const subString = (value: any) => value?.substring(0, 9) + "..." + value?.substring(value?.length - 10, value?.length);
export const toLovelace = (amount: string): string => {
    const lovelaceAmount = parseFloat(amount) * 1000000;

    return lovelaceAmount.toString();
}

export const errorHelpers = (error: any, thunkAPI: any) => {
    return axios.isAxiosError(error)
        ? thunkAPI.rejectWithValue(returnApiError(error))
        : thunkAPI.rejectWithValue('Auth error')
}

