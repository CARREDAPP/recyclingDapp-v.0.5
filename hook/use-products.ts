import { useAppSelector } from '@/components/redux/store'
import React, { useEffect } from 'react'
import useAppDispatch from './use-dispatch';
import { getproduct } from '@/components/redux/products/products.slices';

function useProducts() {
    const { GET_PRODUCT, message, status, status_delete, status_post, status_update, } = useAppSelector(state => state.createProducts);
    const { dispatch } = useAppDispatch()
    useEffect(() => {
        if (!GET_PRODUCT?.data) {
            dispatch(getproduct());
        }
    }, [dispatch])
    return { GET_PRODUCT, message, status, status_delete, status_post, status_update }
}

export default useProducts
