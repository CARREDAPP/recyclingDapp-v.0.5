import { returnApiError } from "@/components/helpers/api.error.handler";
import { BASE_URL } from "@/components/helpers/helpers.api";
import { IDetailsEntre } from "@/types";
import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { RootState } from "../store";

export const postSupply: AsyncThunkPayloadCreator<IDetailsEntre, any> = async (payload, thunkAPI) => {
    try {
        const { createUser: { PROFILE } } = thunkAPI.getState() as RootState;
        const response: AxiosResponse<IDetailsEntre> = await axios.post(`${BASE_URL}supply/add`, payload, {
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