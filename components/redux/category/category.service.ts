import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { RootState } from "../store";
import { BASE_URL } from "@/components/helpers/helpers.api";
import UseRestartField from "@/hook/Use-restartField";
import { returnApiError } from "@/components/helpers/api.error.handler";

export const getCategorie: AsyncThunkPayloadCreator<IGETCategory> = async (_, thunkAPI) => {
    try {
        // const { auth: { profile } } = thunkAPI.getState() as RootState;
        const response: AxiosResponse<IGETCategory> = await axios.get(`${BASE_URL}category`, {
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

export const postCategorie: AsyncThunkPayloadCreator<IPOSTCategory, any> = async (payload, thunkAPI) => {
    try {
        // const { auth: { profile } } = thunkAPI.getState() as RootState;
        const { form, ...body } = payload;
        console.log(payload)
        const response: AxiosResponse<IPOSTCategory> = await axios.post(`${BASE_URL}category/add`, body, {
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

// export const updateUe: AsyncThunkPayloadCreator<IPatchUniteEnseignement, any> = async (payload, thunkAPI) => {
//     try {
//         const { auth: { profile } } = thunkAPI.getState() as RootState;
//         const { form, ...body } = payload;
//         const response: AxiosResponse<IPatchUniteEnseignement> = await axios.patch(`${BASE_API_URL}ue/update?id=${payload.id}`, body, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${profile?.token}`

//             }
//         });
//         UseRestartField(form);
//         return response.data;
//     } catch (error) {
//         return axios.isAxiosError(error)
//             ? thunkAPI.rejectWithValue(returnApiError(error))
//             : thunkAPI.rejectWithValue('Auth error')

//     }
// }

// export const deleteUe: AsyncThunkPayloadCreator<IPatchUniteEnseignement, any> = async (payload, thunkAPI) => {
//     try {
//         const { auth: { profile } } = thunkAPI.getState() as RootState;
//         const response: AxiosResponse<IPatchUniteEnseignement> = await axios.delete(`${BASE_API_URL}ue/delete?id=${payload.id}`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${profile?.token}`

//             }
//         });
//         return response.data;
//     } catch (error) {
//         return axios.isAxiosError(error)
//             ? thunkAPI.rejectWithValue(returnApiError(error))
//             : thunkAPI.rejectWithValue('Auth error')

//     }
// }