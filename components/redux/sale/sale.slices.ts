import { IDetailsEntre, IGetVentes } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "@/components/helpers/helpers";
import { getSale } from "./sale.service";

const initialState: {
    PANIER_ENTREE: IDetailsEntre[],
    GET_SALE: IGetVentes | null,
    is_status_post: {
        isLoading: boolean,
        isSuccess: boolean,
        isError: boolean,
    },
    is_status: {
        isLoading: boolean,
        isSuccess: boolean,
        isError: boolean,
    },
    message: string | null,

} = {
    PANIER_ENTREE: [],
    GET_SALE: null,
    is_status_post: {
        isLoading: false,
        isSuccess: false,
        isError: false,
    },
    is_status: {
        isLoading: false,
        isSuccess: false,
        isError: false,
    },
    message: null
}
const getSaleDetails = createAsyncThunk('sale/get', getSale);


const saleSlices = createSlice({
    initialState,
    name: 'sale',
    reducers: {
        addPanier: (state, { payload }) => {
            const existed = state?.PANIER_ENTREE.find((items) => items?.products?.id === payload?.id);
            if (!existed) {
                state?.PANIER_ENTREE?.push(
                    {
                        ...payload,
                        products: { designation: payload?.designation, id: payload?.id },
                        quantity: payload.quantity,
                        price: payload.price,
                    }
                );
            } else {
                const index = state?.PANIER_ENTREE?.findIndex((item) => item?.products?.id === payload?.id);
                state?.PANIER_ENTREE?.splice(index!, 1, {
                    ...state?.PANIER_ENTREE[index!],
                    quantity: payload.quantity,
                    price: payload.price,
                });
            }
        },
        increment: (state, { payload }) => {
            const index = state?.PANIER_ENTREE.findIndex(
                (item) => item?.products?.id === payload?.id);
            state?.PANIER_ENTREE?.splice(index, 1, {
                ...state?.PANIER_ENTREE[index],
                quantity: state?.PANIER_ENTREE[index]?.quantity! + 1
            });
        },
        cleanAll: (state) => {
            if (state && state?.PANIER_ENTREE) {
                state?.PANIER_ENTREE.splice(0, state?.PANIER_ENTREE.length);
            }
        },
        decrement: (state, { payload }) => {
            if (payload?.quantity >= 1) {
                const index = state?.PANIER_ENTREE.findIndex((item) => item?.products?.id === payload?.id);
                state?.PANIER_ENTREE.splice(index, 1, {
                    ...state?.PANIER_ENTREE[index],
                    quantity: state?.PANIER_ENTREE[index]?.quantity! - 1,
                });
            }
        },
        remove: (state, { payload }) => {
            const index = state?.PANIER_ENTREE.findIndex((item) => item?.products?.id === payload?.id);
            state?.PANIER_ENTREE?.splice(index, 1);
        },

        updateCart: (state, { payload }) => {
            const index = state?.PANIER_ENTREE.findIndex(item => item?.products?.id === payload?.value?.id);
            if (index !== -1) {
                state.PANIER_ENTREE[index] = {
                    ...state?.PANIER_ENTREE[index],
                    quantity: payload.value.quantity,
                    price: payload.value.price
                };
            }
        },
        setSuccesSupply: (state, { payload }) => {
            state.is_status_post.isSuccess = payload;
        },
        setErrorSupply: (state, { payload }) => {
            state.is_status_post.isError = payload;
        },


    },
    extraReducers(builder) {
        builder.addCase(getSaleDetails.pending, (state) => {
            state.is_status = STATUS.PENDING;
        }).addCase(getSaleDetails.fulfilled, (state, { payload }) => {
            state.is_status = STATUS.SUCCESS;
            state.message = payload.msg;
            state.GET_SALE = payload
        }).addCase(getSaleDetails.rejected, (state, { payload }) => {
            state.is_status = STATUS.ERROR;
            state.message = payload as string;
        })
    },
});


export default saleSlices.reducer;
export const { addPanier, cleanAll, decrement, increment, remove, updateCart, setErrorSupply, setSuccesSupply } = saleSlices.actions;
export { getSaleDetails };