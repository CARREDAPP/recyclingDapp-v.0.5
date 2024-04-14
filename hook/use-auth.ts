import { logoutUser, loadUserData } from '@/components/redux/user/user.slice';
import useAppDispatch from './use-dispatch';
import { useAppSelector } from '@/components/redux/store';
import { useEffect, useMemo } from 'react';

const useAuth = () => {
    const { dispatch } = useAppDispatch();
    const user = useAppSelector((state) => state.createUser);

    const isLogin = useMemo(() => {
        return !!user.PROFILE;
    }, [user.PROFILE]);

    const logout = () => {
        dispatch(logoutUser());
    };

    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem('session-user-custom')!);
        if (!user.PROFILE && profile) dispatch(loadUserData(profile));
    }, [dispatch, user.PROFILE]);

    return { user, isLogin, logout };
};

export default useAuth;