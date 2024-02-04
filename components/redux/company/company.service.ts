import { returnApiError } from "@/components/helpers/api.error.handler";
import { BASE_URL } from "@/components/helpers/helpers.api";
import { IPOSTEntreprise } from "@/types";
import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import UseRestartField from "@/hook/Use-restartField";

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