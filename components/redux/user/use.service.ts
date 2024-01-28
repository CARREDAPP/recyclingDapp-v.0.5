import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { RootState } from "../store";
import { BASE_URL } from "@/components/helpers/helpers.api";
import UseRestartField from "@/hook/Use-restartField";
import { returnApiError } from "@/components/helpers/api.error.handler";
import { IAuthUser, IBLOCKUser, IGETUser, IPOSTUser, IUPDATEUser } from "@/types";

export const getUser: AsyncThunkPayloadCreator<IGETUser> = async (_, thunkAPI) => {
    try {
        // const { auth: { profile } } = thunkAPI.getState() as RootState;
        const response: AxiosResponse<IGETUser> = await axios.get(`${BASE_URL}user`, {
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

export const postUser: AsyncThunkPayloadCreator<IPOSTUser, any> = async (payload, thunkAPI) => {
    try {
        // const { auth: { profile } } = thunkAPI.getState() as RootState;
        const { form, ...body } = payload;
        console.log(payload)
        const response: AxiosResponse<IPOSTUser> = await axios.post(`${BASE_URL}user/add`, body, {
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

export const updateUser: AsyncThunkPayloadCreator<IUPDATEUser, any> = async (payload, thunkAPI) => {
    try {
        // const { auth: { profile } } = thunkAPI.getState() as RootState;
        const { form, ...body } = payload;
        const response: AxiosResponse<IUPDATEUser> = await axios.patch(`${BASE_URL}user/update?id=${payload.id}`, body, {
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

export const blocUser: AsyncThunkPayloadCreator<IBLOCKUser, any> = async (payload, thunkAPI) => {
    try {
        // const { auth: { profile } } = thunkAPI.getState() as RootState;
        const { form, ...body } = payload;
        const response: AxiosResponse<IBLOCKUser> = await axios.patch(`${BASE_URL}user/block?id=${payload.id}`, {
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${profile?.token}`

            }
        });
        return response.data;
    } catch (error) {
        return axios.isAxiosError(error)
            ? thunkAPI.rejectWithValue(returnApiError(error))
            : thunkAPI.rejectWithValue('Auth error')

    }
}

export const deleteUser: AsyncThunkPayloadCreator<any, any> = async (payload, thunkAPI) => {
    try {
        // const { auth: { profile } } = thunkAPI.getState() as RootState;
        const response: AxiosResponse<any> = await axios.delete(`${BASE_URL}user/delete?id=${payload.id}`, {
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${profile?.token}`

            }
        });
        return response.data;
    } catch (error) {
        return axios.isAxiosError(error)
            ? thunkAPI.rejectWithValue(returnApiError(error))
            : thunkAPI.rejectWithValue('Auth error')

    }
}

export const authUser: AsyncThunkPayloadCreator<IAuthUser, any> = async (payload, thunkAPI) => {
    try {
        const response: AxiosResponse<IAuthUser> = await axios.post(`${BASE_URL}user/auth`, payload, {
            headers: {
                "Content-Type": "application/json",
            }
        });
        return response.data;
    } catch (error) {
        return axios.isAxiosError(error)
            ? thunkAPI.rejectWithValue(returnApiError(error))
            : thunkAPI.rejectWithValue('Auth error')

    }
}