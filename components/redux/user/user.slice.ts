import { IDELETEUser, IGETUser, IPOSTUser, IUPDATEUser, IUser } from "@/types"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteUser, getUser, postUser, updateUser } from "./use.service";
import { STATUS } from "@/components/helpers/helpers";

const initialState: {
    POST_USER: IPOSTUser | null,
    GET_USER: IGETUser | null
    UPDATE_USER: IUPDATEUser | null,
    DATA_USER: IUser | null,
    DELETE_USER: IDELETEUser | null,
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
    DATA_USER: null,
    DELETE_USER: null,
    GET_USER: null,
    POST_USER: null,
    UPDATE_USER: null,
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
const postuser = createAsyncThunk('user/add', postUser);
const getuser = createAsyncThunk('user/all', getUser);
const updateuser = createAsyncThunk('user/update', updateUser);
const deleteuser = createAsyncThunk('user/delete', deleteUser);

const productsService = createSlice({
    initialState,
    name: 'user',
    reducers: {
        setUserUpdate: (state, { payload }) => {
            state.DATA_USER = payload;
        },
        setPostUserIsSuccess: (state, { payload }) => {
            state.status_post.isSuccess = payload;
        },
        setPostUserIsError: (state, { payload }) => {
            state.status_post.isError = payload;
        },
        setPatchUserIsSuccess: (state, { payload }) => {
            state.status_update.isSuccess = payload;
        },
        setPatchUserIsError: (state, { payload }) => {
            state.status_update.isError = payload;
        },
        setDeleteUserIsSuccess: (state, { payload }) => {
            state.status_delete.isSuccess = payload;
        },
        setDeleteUserIsError: (state, { payload }) => {
            state.status_delete.isError = payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(postuser.pending, (state) => {
            state.status_post = STATUS.PENDING;
        }).addCase(postuser.fulfilled, (state, { payload }) => {
            state.status_post = STATUS.SUCCESS;
            state.GET_USER = {
                msg: '',
                data: [
                    ...state.GET_USER?.data!, payload.data
                ]
            }
            state.message = payload.msg;
        }).addCase(postuser.rejected, (state, { payload }) => {
            state.status_post = STATUS.ERROR;
            state.message = payload as string
        }).addCase(getuser.pending, (state) => {
            state.status = STATUS.PENDING;
        }).addCase(getuser.fulfilled, (state, { payload }) => {
            state.status = STATUS.SUCCESS;
            state.GET_USER = payload;

        }).addCase(getuser.rejected, (state, { payload }) => {
            state.status = STATUS.ERROR;
            state.message = payload as string
        }).addCase(updateuser.pending, (state) => {
            state.status_update = STATUS.PENDING;
        }).addCase(updateuser.fulfilled, (state, { payload }) => {
            state.status_update = STATUS.SUCCESS;
            const index = state.GET_USER?.data.findIndex(item => item?.id === payload?.data.id);
            if (index !== -1) {
                state.GET_USER = {
                    ...state.GET_USER!,
                    msg: '',
                    data: [
                        ...state.GET_USER?.data.slice(0, index)!,
                        payload.data,
                        ...state.GET_USER?.data.slice(index! + 1)!
                    ]
                };
            }
            state.message = payload.msg;

        }).addCase(updateuser.rejected, (state, { payload }) => {
            state.status_update = STATUS.ERROR;
            state.message = payload as string
        }).addCase(deleteuser.pending, (state) => {
            state.status_delete = STATUS.PENDING;
        }).addCase(deleteuser.fulfilled, (state, { payload }) => {
            state.status_delete = STATUS.SUCCESS;
            state.message = payload.msg
            const index = state.GET_USER?.data?.findIndex(r => r.id === payload?.data);
            state.GET_USER?.data.splice(index!, 1);
        }).addCase(deleteuser.rejected, (state, { payload }) => {
            state.status_delete = STATUS.ERROR;
            state.message = payload as string
        });
    },
});


export default productsService.reducer;
export const {
    setDeleteUserIsError,
    setDeleteUserIsSuccess,
    setPatchUserIsError,
    setPatchUserIsSuccess,
    setPostUserIsError,
    setPostUserIsSuccess,
    setUserUpdate

} = productsService.actions;
export { postuser, getuser, updateuser, deleteuser }

