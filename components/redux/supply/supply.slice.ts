import { IDetailsEntre } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
    PANIER_ENTREE: IDetailsEntre[],
    is_status_post: {
        isLoading: boolean,
        isSuccess: boolean,
        isError: boolean,
    },
    message: string | null,

} = {
    PANIER_ENTREE: [],
    is_status_post: {
        isLoading: false,
        isSuccess: false,
        isError: false,
    },
    message: null
}

const supplySlices = createSlice({
    initialState: initialState,
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
                    quantity: state?.PANIER_ENTREE[index!]?.quantity! + 1,
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
        }

    }
});


export default supplySlices.reducer;
export const { addPanier, cleanAll, decrement, increment, remove, updateCart } = supplySlices.actions;