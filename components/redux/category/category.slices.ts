import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getCategorie, postCategorie } from "./category.service"
import { STATUS } from "@/components/helpers/helpers";


const initialState: {
    POST_CATEGORY: IPOSTCategory | null,
    GET_CATEGORY: IGETCategory | null
    status_post: {
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
    POST_CATEGORY: null,
    GET_CATEGORY: null,
    status_post: {
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

const postCategories = createAsyncThunk('categorys/add', postCategorie);
const getCategories = createAsyncThunk('categorys/all', getCategorie);

const categoryService = createSlice({
    initialState: initialState,
    name: 'category',
    reducers: {},
    extraReducers(builder) {
        builder.addCase(postCategories.pending, (state) => {
            state.status_post = STATUS.PENDING;
        }).addCase(postCategories.fulfilled, (state, { payload }) => {
            state.status_post = STATUS.SUCCESS;
            state.GET_CATEGORY = {
                msg: '',
                data: [
                    ...state.GET_CATEGORY?.data!, payload.data
                ]
            }
        }).addCase(postCategories.rejected, (state, { payload }) => {
            state.status_post = STATUS.ERROR;
            state.message = payload as string
        }).addCase(getCategories.pending, (state) => {
            state.status = STATUS.PENDING;
        }).addCase(getCategories.fulfilled, (state, { payload }) => {
            state.status = STATUS.SUCCESS;
            state.GET_CATEGORY = payload;

        }).addCase(getCategories.rejected, (state, { payload }) => {
            state.status = STATUS.ERROR;
            state.message = payload as string
        })
    },
});


export default categoryService.reducer;
export { postCategories, getCategories }