import { useAppSelector } from '@/components/redux/store'
import React, { useEffect } from 'react'
import useAppDispatch from './use-dispatch';
import { getSupplyDetails } from '@/components/redux/supply/supply.slice';

function useSupply() {
    const { is_status, GET_SUPPLY } = useAppSelector(state => state.createSupply);
    const { dispatch } = useAppDispatch();
    useEffect(() => {
        if (!GET_SUPPLY?.data) {
            dispatch(getSupplyDetails());
        }
    }, [dispatch])
    return { is_status, GET_SUPPLY, dispatch }
}

export default useSupply
