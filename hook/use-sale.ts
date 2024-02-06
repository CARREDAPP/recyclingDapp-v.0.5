import React, { useEffect } from 'react'
import useAppDispatch from './use-dispatch'
import { getSaleDetails } from '@/components/redux/sale/sale.slices';
import { useAppSelector } from '@/components/redux/store';

function useSale() {
    const { dispatch } = useAppDispatch();
    const { GET_SALE, is_status } = useAppSelector(state => state.createSales);
    useEffect(() => {
        if (!GET_SALE?.data) {
            dispatch(getSaleDetails())
        }
    }, [dispatch]);
    return { GET_SALE, is_status };

}

export default useSale
