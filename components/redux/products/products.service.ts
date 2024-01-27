import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { RootState } from "../store";
import { BASE_URL } from "@/components/helpers/helpers.api";
import UseRestartField from "@/hook/Use-restartField";
import { returnApiError } from "@/components/helpers/api.error.handler";

export const getProducts: AsyncThunkPayloadCreator<IGETProducts> = async (_, thunkAPI) => {
    try {
        // const { auth: { profile } } = thunkAPI.getState() as RootState;
        const response: AxiosResponse<IGETProducts> = await axios.get(`${BASE_URL}products`, {
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${profile?.token}`

            }
        })
        return response.data;
    } catch (error) {
        return axios.isAxiosError(error)
            ? thunkAPI.rejectWithValue(returnApiError(error))
            : thunkAPI.rejectWithValue('Auth error')

    }
}

export const postProducts: AsyncThunkPayloadCreator<IPOSTProducts, any> = async (payload, thunkAPI) => {
    try {
        // const { auth: { profile } } = thunkAPI.getState() as RootState;
        const { form, ...body } = payload;
        console.log(payload)
        const response: AxiosResponse<IPOSTProducts> = await axios.post(`${BASE_URL}products/add`, body, {
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${profile?.token}`

            }
        });
        UseRestartField(form);
        return response.data;
    } catch (error) {
        return axios.isAxiosError(error)
            ? thunkAPI.rejectWithValue(returnApiError(error))
            : thunkAPI.rejectWithValue('Auth error')

    }
}

export const updateProducts: AsyncThunkPayloadCreator<IUDATEProducts, any> = async (payload, thunkAPI) => {
    try {
        // const { auth: { profile } } = thunkAPI.getState() as RootState;
        const { form, ...body } = payload;
        const response: AxiosResponse<IUDATEProducts> = await axios.patch(`${BASE_URL}products/update?id=${payload.id}`, body, {
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${profile?.token}`

            }
        });
        UseRestartField(form);
        return response.data;
    } catch (error) {
        return axios.isAxiosError(error)
            ? thunkAPI.rejectWithValue(returnApiError(error))
            : thunkAPI.rejectWithValue('Auth error')

    }
}

export const deleteProducts: AsyncThunkPayloadCreator<any, any> = async (payload, thunkAPI) => {
    try {
        // const { auth: { profile } } = thunkAPI.getState() as RootState;
        const response: AxiosResponse<any> = await axios.delete(`${BASE_URL}products/delete?id=${payload.id}`, {
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${profile?.token}`

            }
        });
        console.log(response.data)
        return response.data;
    } catch (error) {
        return axios.isAxiosError(error)
            ? thunkAPI.rejectWithValue(returnApiError(error))
            : thunkAPI.rejectWithValue('Auth error')

    }
}