import { IAuthUser, IBLOCKUser, IDELETEUser, IGETUser, IPOSTUser, IUPDATEUser, IUser } from "@/types"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authUser, blocUser, deleteUser, getUser, postUser, updateUser } from "./use.service";
import { STATUS } from "@/components/helpers/helpers";
import { getCookies, removeCookies, setCookies } from "@/utils/Cookies-server";

const initialState: {
    POST_USER: IPOSTUser | null,
    GET_USER: IGETUser | null
    UPDATE_USER: IUPDATEUser | null,
    DATA_USER: IUser | null,
    DELETE_USER: IDELETEUser | null,
    BLOCK_USER: IBLOCKUser | null,
    PROFILE: IAuthUser | null,
    status_post: {
        isLoading: boolean,
        isSuccess: boolean,
        isError: boolean,
    },
    status_block: {
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
    status_auth: {
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
    BLOCK_USER: null,
    PROFILE: typeof window !== 'undefined'
        ? getCookies('session-user') && JSON.parse(getCookies('session-user')!)
        : null,

    status_post: {
        isLoading: false,
        isSuccess: false,
        isError: false,
    },
    status_block: {
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
    status_auth: {
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
const blockuser = createAsyncThunk('user/block', blocUser);
const authuser = createAsyncThunk('user/auth/login', authUser);

const userService = createSlice({
    initialState,
    name: 'user/user-service',
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
        },
        logoutUser: (state) => {
            removeCookies('session-user');
            state.PROFILE = null;
            window.location.replace('/');
        },
        loadUserData: (state, { payload }: { payload: typeof initialState.PROFILE }) => {
            state.PROFILE = payload;
        },
        setUserIsSuccess: (state, { payload }) => {
            state.status_post.isSuccess = payload;
        },
        setUserIsError: (state, { payload }) => {
            state.status_post.isError = payload;
        },

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
        }).addCase(blockuser.pending, (state) => {
            state.status_block = STATUS.PENDING;
        }).addCase(blockuser.fulfilled, (state, { payload }) => {
            state.status_block = STATUS.SUCCESS;
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

        }).addCase(blockuser.rejected, (state, { payload }) => {
            state.status_block = STATUS.ERROR;
            state.message = payload as string
        }).addCase(authuser.pending, (state) => {
            state.status_auth = STATUS.PENDING;
        }).addCase(authuser.fulfilled, (state, { payload }) => {
            state.PROFILE = payload;
            setCookies('session-user', JSON?.stringify(payload));
            state.status_auth = STATUS.SUCCESS;
            state.message = payload.msg;
        }).addCase(authuser.rejected, (state, { payload }) => {
            state.status_auth = STATUS.ERROR;
            state.message = payload as string
        });
    },
});


export default userService.reducer;
export const {
    setDeleteUserIsError,
    setDeleteUserIsSuccess,
    setPatchUserIsError,
    setPatchUserIsSuccess,
    setPostUserIsError,
    setPostUserIsSuccess,
    setUserUpdate,
    loadUserData,
    logoutUser,
    setUserIsError,
    setUserIsSuccess,

} = userService.actions;
export { postuser, getuser, updateuser, deleteuser, blockuser, authuser }

