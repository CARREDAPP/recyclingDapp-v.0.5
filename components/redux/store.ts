import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import SliceShowModal from './show-modal/slice.showmodal'
import categoryService from './category/category.slices'


const store = configureStore({
    reducer: {
        createShownModal: SliceShowModal,
        createCategory: categoryService
    },
});


export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
