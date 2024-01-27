import { useAppSelector } from '@/components/redux/store'
import React, { useEffect } from 'react'
import useAppDispatch from './use-dispatch';
import { getCategories } from '@/components/redux/category/category.slices';

function useCategory() {
    const { GET_CATEGORY, status, status_delete, status_update } = useAppSelector(state => state.createCategory);
    const { dispatch } = useAppDispatch()
    useEffect(() => {
        if (!GET_CATEGORY?.data) {
            dispatch(getCategories());
        }
    }, [dispatch])
    return { GET_CATEGORY, status, dispatch, status_delete, status_update }
}

export default useCategory
