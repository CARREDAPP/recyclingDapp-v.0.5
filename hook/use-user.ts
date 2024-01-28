import { useAppSelector } from '@/components/redux/store'
import React, { useEffect } from 'react'
import useAppDispatch from './use-dispatch';
import { getuser } from '@/components/redux/user/user.slice';

function useUser() {
    const { GET_USER, status, status_delete, status_block } = useAppSelector(state => state.createUser);
    const { dispatch } = useAppDispatch();
    useEffect(() => {
        if (!GET_USER?.data) {
            dispatch(getuser());
        }

    }, [dispatch])
    return { GET_USER, status, status_delete, status_block }
}

export default useUser
