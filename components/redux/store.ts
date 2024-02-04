import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import SliceShowModal from './show-modal/slice.showmodal'
import categoryService from './category/category.slices'
import productsService from './products/products.slices'
import userService from './user/user.slice';
import supplySlices from './supply/supply.slice';
import companySlice from './company/company.slice';

const store = configureStore({
    reducer: {
        createShownModal: SliceShowModal,
        createCategory: categoryService,
        createProducts: productsService,
        createUser: userService,
        createSupply: supplySlices,
        createCompany: companySlice
    },
});


export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
