import { createSlice } from "@reduxjs/toolkit"

const initialState: {
    is_open: string,
    is_open_sub: string

} = {
    is_open: 'closed',
    is_open_sub: 'closed'
}


const SliceShowModal = createSlice({
    initialState,
    name: 'show-modal',
    reducers: {
        showModal: (state, { payload }) => {
            state.is_open = payload;
        },
        showModalsub: (state, { payload }) => {
            state.is_open_sub = payload;
        }
    }
});
export default SliceShowModal.reducer;
export const { showModal, showModalsub } = SliceShowModal.actions