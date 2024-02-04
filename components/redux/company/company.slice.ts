import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { STATUS } from "@/components/helpers/helpers";
import { ICategory, IDELETECategory, IEntreprise, IGETCategory, IGETEntreprise, IPOSTCategory, IUPDATECategory, IUPDATEEntreprise } from "@/types";
import { postCompany } from "./company.service";


const initialState: {
    POST_COMPANY: IPOSTCategory | null,
    GET_COMPANY: IGETEntreprise | null
    UPDATE_COMPANY: IUPDATEEntreprise | null,
    DATA_COMPANY: IEntreprise | null,
    DELETE_COMPANY: IUPDATEEntreprise | null
    status_post: {
        isLoading: boolean,
        isSuccess: boolean,
        isError: boolean,
    },
    status_update: {
        isLoading: boolean,
        isSuccess: boolean,
        isError: boolean,
    },
    status_delete: {
        isLoading: boolean,
        isSuccess: boolean,
        isError: boolean,
    },
    status: {
        isLoading: boolean,
        isSuccess: boolean,
        isError: boolean,
    },
    message: string | null,
} = {
    DATA_COMPANY: null,
    DELETE_COMPANY: null,
    GET_COMPANY: null,
    POST_COMPANY: null,
    UPDATE_COMPANY: null,
    status_post: {
        isLoading: false,
        isSuccess: false,
        isError: false,
    },
    status_update: {
        isLoading: false,
        isSuccess: false,
        isError: false,
    },
    status_delete: {
        isLoading: false,
        isSuccess: false,
        isError: false,
    },
    status: {
        isLoading: false,
        isSuccess: false,
        isError: false,
    },
    message: null
}
const postEntreprises = createAsyncThunk('company/add', postCompany);

const companySlice = createSlice({
    initialState,
    name: 'company',
    reducers: {
        setCompanyIsSuccess: (state, { payload }) => {
            state.status_post.isError = payload;
        },
        setCompanyIsError: (state, { payload }) => {
            state.status_post.isError = payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(postEntreprises.pending, (state) => {
            state.status_post = STATUS.PENDING;
        }).addCase(postEntreprises.fulfilled, (state, { payload }) => {
            state.status_post = STATUS.SUCCESS;
            state.message = payload.msg
        }).addCase(postEntreprises.rejected, (state, { payload }) => {
            state.status_post = STATUS.ERROR;
            state.message = payload as string;
        })
    },
})


export default companySlice.reducer;
export { postEntreprises }
export const { setCompanyIsError, setCompanyIsSuccess } = companySlice.actions