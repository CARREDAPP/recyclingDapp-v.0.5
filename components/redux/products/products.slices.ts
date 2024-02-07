import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { deleteProducts, getProducts, postImages, postProducts, updateProducts } from "./products.service"
import { STATUS } from "@/components/helpers/helpers";
import { IDELETECategory, IGETProducts, IPOSTProducts, IPostImages, IProducts, IUDATEProducts } from "@/types";


const initialState: {
    POST_PRODUCT: IPOSTProducts | null,
    GET_PRODUCT: IGETProducts | null
    UPDATE_PRODUCT: IUDATEProducts | null,
    DATA_PRODUCT: IProducts | null,
    SET_PRODUCTS: IProducts | null
    DELETE_PRODUCT: IDELETECategory | null
    POST_IMAGE: IPostImages | null
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
    status_img: {
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
    SET_PRODUCTS: null,
    DATA_PRODUCT: null,
    DELETE_PRODUCT: null,
    GET_PRODUCT: null,
    POST_PRODUCT: null,
    UPDATE_PRODUCT: null,
    POST_IMAGE: null,
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
    status_img: {
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

const postproduct = createAsyncThunk('products/add', postProducts);
const getproduct = createAsyncThunk('products/all', getProducts);
const updateproduct = createAsyncThunk('products/update', updateProducts);
const deleteproduct = createAsyncThunk('products/delete', deleteProducts);
const postImage = createAsyncThunk('products/image', postImages);

const productsService = createSlice({
    initialState: initialState,
    name: 'products',
    reducers: {
        setProductsUpdate: (state, { payload }) => {
            state.DATA_PRODUCT = payload;
        },
        setPostProductsIsSuccess: (state, { payload }) => {
            state.status_post.isSuccess = payload;
        },
        setPostProductsIsError: (state, { payload }) => {
            state.status_post.isError = payload;
        },
        setPostImageIsSuccess: (state, { payload }) => {
            state.status_img.isSuccess = payload;
        },
        setPostImageIsError: (state, { payload }) => {
            state.status_img.isError = payload;
        },
        setPatchProductsIsSuccess: (state, { payload }) => {
            state.status_update.isSuccess = payload;
        },
        setPatchProductsIsError: (state, { payload }) => {
            state.status_update.isError = payload;
        },
        setDeleteProductsIsSuccess: (state, { payload }) => {
            state.status_delete.isSuccess = payload;
        },
        setDeleteProductsIsError: (state, { payload }) => {
            state.status_delete.isError = payload;
        },

        serProductId: (state, { payload }) => {
            state.SET_PRODUCTS = payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(postproduct.pending, (state) => {
            state.status_post = STATUS.PENDING;
        }).addCase(postproduct.fulfilled, (state, { payload }) => {
            state.status_post = STATUS.SUCCESS;
            state.GET_PRODUCT = {
                msg: '',
                data: [
                    ...state.GET_PRODUCT?.data!, payload.data
                ]
            }
            state.message = payload.msg;
        }).addCase(postproduct.rejected, (state, { payload }) => {
            state.status_post = STATUS.ERROR;
            state.message = payload as string
        }).addCase(getproduct.pending, (state) => {
            state.status = STATUS.PENDING;
        }).addCase(getproduct.fulfilled, (state, { payload }) => {
            state.status = STATUS.SUCCESS;
            state.GET_PRODUCT = payload;

        }).addCase(getproduct.rejected, (state, { payload }) => {
            state.status = STATUS.ERROR;
            state.message = payload as string
        }).addCase(updateproduct.pending, (state) => {
            state.status_update = STATUS.PENDING;
        }).addCase(updateproduct.fulfilled, (state, { payload }) => {
            state.status_update = STATUS.SUCCESS;
            const index = state.GET_PRODUCT?.data.findIndex(item => item?.id === payload?.data.id);
            if (index !== -1) {
                state.GET_PRODUCT = {
                    ...state.GET_PRODUCT!,
                    msg: '',
                    data: [
                        ...state.GET_PRODUCT?.data.slice(0, index)!,
                        payload.data,
                        ...state.GET_PRODUCT?.data.slice(index! + 1)!
                    ]
                };
            }
            state.message = payload.msg;

        }).addCase(updateproduct.rejected, (state, { payload }) => {
            state.status_update = STATUS.ERROR;
            state.message = payload as string
        }).addCase(deleteproduct.pending, (state) => {
            state.status_delete = STATUS.PENDING;
        }).addCase(deleteproduct.fulfilled, (state, { payload }) => {
            state.status_delete = STATUS.SUCCESS;
            state.message = payload.msg
            const index = state.GET_PRODUCT?.data?.findIndex(r => r.id === payload?.data);
            state.GET_PRODUCT?.data.splice(index!, 1);
        }).addCase(deleteproduct.rejected, (state, { payload }) => {
            state.status_delete = STATUS.ERROR;
            state.message = payload as string
        }).addCase(postImage.pending, (state) => {
            state.status_img = STATUS.PENDING;
        }).addCase(postImage.fulfilled, (state, { payload }) => {
            state.status_img = STATUS.SUCCESS;
            state.message = payload.msg
        }).addCase(postImage.rejected, (state, { payload }) => {
            state.status_img = STATUS.ERROR;
            state.message = payload as string
        });
    },
});


export default productsService.reducer;
export const {
    setDeleteProductsIsError,
    setDeleteProductsIsSuccess,
    setPatchProductsIsError,
    setPatchProductsIsSuccess,
    setPostProductsIsError,
    setPostProductsIsSuccess,
    setProductsUpdate,
    serProductId,
    setPostImageIsError, setPostImageIsSuccess

} = productsService.actions;
export { postproduct, getproduct, updateproduct, deleteproduct, postImage }