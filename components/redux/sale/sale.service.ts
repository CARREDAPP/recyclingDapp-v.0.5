import { returnApiError } from "@/components/helpers/api.error.handler";
import { BASE_URL } from "@/components/helpers/helpers.api";
import { IGetVentes } from "@/types";
import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { RootState } from "../store";

export const getSale: AsyncThunkPayloadCreator<IGetVentes> = async (payload, thunkAPI) => {
    try {
        const { createUser: { PROFILE } } = thunkAPI.getState() as RootState;
        const response: AxiosResponse<IGetVentes> = await axios.get(`${BASE_URL}sale`, {
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