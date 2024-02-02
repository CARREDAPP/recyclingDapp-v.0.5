import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { deleteCategory, getCategorie, postCategorie, updateCategory } from "./category.service"
import { STATUS } from "@/components/helpers/helpers";
import { ICategory, IDELETECategory, IGETCategory, IPOSTCategory, IUPDATECategory } from "@/types";


const initialState: {
    POST_CATEGORY: IPOSTCategory | null,
    GET_CATEGORY: IGETCategory | null
    UPDATE_CATEGORY: IUPDATECategory | null,
    DATA_CATEGORY: ICategory | null,
    DELETE_CATEGORY: IDELETECategory | null
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
    POST_CATEGORY: null,
    GET_CATEGORY: null,
    UPDATE_CATEGORY: null,
    DATA_CATEGORY: null,
    DELETE_CATEGORY: null,
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

const postCategories = createAsyncThunk('categorys/add', postCategorie);
const getCategories = createAsyncThunk('categorys/all', getCategorie);
const updateCategories = createAsyncThunk('categorys/update', updateCategory);
const deleteCategories = createAsyncThunk('categorys/delete', deleteCategory);

const categoryService = createSlice({
    initialState: initialState,
    name: 'category',
    reducers: {
        setCategoryUpdate: (state, { payload }) => {
            state.DATA_CATEGORY = payload;
        },
        setPostCategoryIsSuccess: (state, { payload }) => {
            state.status_post.isSuccess = payload;
        },
        setPostCategoryIsError: (state, { payload }) => {
            state.status_post.isError = payload;
        },
        setPatchCategoryIsSuccess: (state, { payload }) => {
            state.status_update.isSuccess = payload;
        },
        setPatchCategoryIsError: (state, { payload }) => {
            state.status_update.isError = payload;
        },
        setDeleteCategoryIsSuccess: (state, { payload }) => {
            state.status_delete.isSuccess = payload;
        },
        setDeleteCategoryIsError: (state, { payload }) => {
            state.status_delete.isError = payload;
        }
    },
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
            state.message = payload.msg;
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
        }).addCase(updateCategories.pending, (state) => {
            state.status_update = STATUS.PENDING;
        }).addCase(updateCategories.fulfilled, (state, { payload }) => {
            state.status_update = STATUS.SUCCESS;
            const index = state.GET_CATEGORY?.data.findIndex(item => item?.id === payload?.data.id);
            if (index !== -1) {
                state.GET_CATEGORY = {
                    ...state.GET_CATEGORY!,
                    msg: '',
                    data: [
                        ...state.GET_CATEGORY?.data.slice(0, index)!,
                        payload.data,
                        ...state.GET_CATEGORY?.data.slice(index! + 1)!
                    ]
                };
            }
            state.message = payload.msg;

        }).addCase(updateCategories.rejected, (state, { payload }) => {
            state.status_update = STATUS.ERROR;
            state.message = payload as string
        }).addCase(deleteCategories.pending, (state) => {
            state.status_delete = STATUS.PENDING;
        }).addCase(deleteCategories.fulfilled, (state, { payload }) => {
            state.status_delete = STATUS.SUCCESS;
            state.message = payload.msg
            const index = state.GET_CATEGORY?.data?.findIndex(r => r.id === payload?.data);
            state.GET_CATEGORY?.data.splice(index!, 1);
        }).addCase(deleteCategories.rejected, (state, { payload }) => {
            state.status_delete = STATUS.ERROR;
            state.message = payload as string
        });
    },
});


export default categoryService.reducer;
export const {
    setCategoryUpdate, setDeleteCategoryIsError,
    setDeleteCategoryIsSuccess,
    setPostCategoryIsError, setPostCategoryIsSuccess,
    setPatchCategoryIsError, setPatchCategoryIsSuccess
} = categoryService.actions;
export { postCategories, getCategories, updateCategories, deleteCategories }