import React, { useEffect } from 'react'
import useAppDispatch from './use-dispatch'
import { useAppSelector } from '@/components/redux/store';
import { getEntreprises } from '@/components/redux/company/company.slice';

function useCompany() {
    const { dispatch } = useAppDispatch();
    const { GET_COMPANY, status } = useAppSelector(state => state.createCompany);
    useEffect(() => {
        if (!GET_COMPANY?.data) {
            dispatch(getEntreprises())
        }
    }, [dispatch])
    return { GET_COMPANY, status, dispatch }
}

export default useCompany
