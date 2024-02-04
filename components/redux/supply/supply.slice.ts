import { IDetailsEntre, IGetSupply } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSupply, postSupply } from "./supply.service";
import { STATUS } from "@/components/helpers/helpers";

const initialState: {
    PANIER_ENTREE: IDetailsEntre[],
    GET_SUPPLY: IGetSupply | null,
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
    GET_SUPPLY: null,
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
const postSupplyDetails = createAsyncThunk('supply/add', postSupply);
const getSupplyDetails = createAsyncThunk('supply/get', getSupply);


const supplySlices = createSlice({
    initialState,
    name: 'supply',
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
        builder.addCase(postSupplyDetails.pending, (state) => {
            state.is_status_post = STATUS.PENDING;
        }).addCase(postSupplyDetails.fulfilled, (state, { payload }) => {
            state.is_status_post = STATUS.SUCCESS;
            state.message = payload.msg;
        }).addCase(postSupplyDetails.rejected, (state, { payload }) => {
            state.is_status_post = STATUS.ERROR;
            state.message = payload as string;
        }).addCase(getSupplyDetails.pending, (state) => {
            state.is_status = STATUS.PENDING;
        }).addCase(getSupplyDetails.fulfilled, (state, { payload }) => {
            state.is_status = STATUS.SUCCESS;
            state.message = payload.msg;
            state.GET_SUPPLY = payload
        }).addCase(getSupplyDetails.rejected, (state, { payload }) => {
            state.is_status = STATUS.ERROR;
            state.message = payload as string;
        })
    },
});


export default supplySlices.reducer;
export const { addPanier, cleanAll, decrement, increment, remove, updateCart, setErrorSupply, setSuccesSupply } = supplySlices.actions;
export { postSupplyDetails, getSupplyDetails };