import { returnApiError } from "@/components/helpers/api.error.handler";
import { BASE_URL } from "@/components/helpers/helpers.api";
import { IGETEntreprise, IPOSTEntreprise } from "@/types";
import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import UseRestartField from "@/hook/Use-restartField";
import { RootState } from "../store";

export const postCompany: AsyncThunkPayloadCreator<IPOSTEntreprise, any> = async (payload, thunkAPI) => {
    try {
        const { form, ...body } = payload;
        const response: AxiosResponse<IPOSTEntreprise> = await axios.post(`${BASE_URL}/entreprise/add`, body, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        UseRestartField(form);
        return response.data;
    } catch (error) {
        return axios.isAxiosError(error)
            ? thunkAPI.rejectWithValue(returnApiError(error))
            : thunkAPI.rejectWithValue('Auth error')

    }
}

export const getCompany: AsyncThunkPayloadCreator<IGETEntreprise> = async (payload, thunkAPI) => {
    try {
        const { createUser: { PROFILE } } = thunkAPI.getState() as RootState;
        const response: AxiosResponse<IGETEntreprise> = await axios.get(`${BASE_URL}/entreprise`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${PROFILE?.token}`
            }
        })
        return response.data;
    } catch (error) {
        return axios.isAxiosError(error)
            ? thunkAPI.rejectWithValue(returnApiError(error))
            : thunkAPI.rejectWithValue('Auth error')

    }
}


export const updateImageCompany: AsyncThunkPayloadCreator<IPOSTEntreprise, any> = async (payload, thunkAPI) => {
    try {
        const { createUser: { PROFILE } } = thunkAPI.getState() as RootState;
        const response: AxiosResponse<IPOSTEntreprise> = await axios.patchForm(`${BASE_URL}/entreprise/image`, payload, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${PROFILE?.token}`
            }
        })
        return response.data;
    } catch (error) {
        return axios.isAxiosError(error)
            ? thunkAPI.rejectWithValue(returnApiError(error))
            : thunkAPI.rejectWithValue('Auth error')

    }
}