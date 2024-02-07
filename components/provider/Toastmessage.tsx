import React, { useEffect } from 'react'
import { message as Tost } from 'antd'
import { useAppSelector } from '../redux/store';
import * as category from '../redux/category/category.slices';
import * as products from '../redux/products/products.slices';
import * as company from '../redux/company/company.slice';
import * as login from '../redux/user/user.slice'
import * as supply from '../redux/supply/supply.slice'
import useAppDispatch from '@/hook/use-dispatch';


function Toastmessage() {
    const [tost, contextHolder] = Tost.useMessage({ maxCount: 1, });
    const { dispatch } = useAppDispatch();
    const { status_delete: is_delete_category, status_post: is_post_category, status_update: is_update_category, message: message_category } = useAppSelector(state => state.createCategory)
    const { status_delete: is_delete_products, status_post: is_post_products, status_update: is_update_products, message: message_products, status_img: is_status_img } = useAppSelector(state => state.createProducts)
    const { status_post: is_post_company, message: message_compny } = useAppSelector(state => state.createCompany);
    const { status_auth: is_status_login, message: message_user } = useAppSelector(state => state.createUser);
    const { is_status_post: is_status_supply, message: message_supply } = useAppSelector(state => state.createSupply);

    useEffect(() => {
        if (is_status_supply.isSuccess) {
            message_supply && tost.success(message_supply);
            dispatch(supply.setSuccesSupply(false));
            dispatch(supply.cleanAll());
        }
        if (is_status_supply.isError) {
            message_supply && tost.error(message_supply);
            dispatch(supply.setErrorSupply(false));
        }
    }, [dispatch, is_status_supply]);




    /////////////////////CATEGORY TOSTE HERE //////////////////
    useEffect(() => {
        if (is_post_category.isSuccess) {
            message_category && tost.success(message_category);
            dispatch(category.setPostCategoryIsSuccess(false));
        }
        if (is_post_category.isError) {
            message_category && tost.error(message_category);
            dispatch(category.setPostCategoryIsError(false));
        }
    }, [dispatch, is_post_category]);

    useEffect(() => {
        if (is_delete_category.isSuccess) {
            message_category && tost.success(message_category);
            dispatch(category.setDeleteCategoryIsSuccess(false));
        }
        if (is_delete_category.isError) {
            message_category && tost.error(message_category);
            dispatch(category.setDeleteCategoryIsError(false));
        }
    }, [dispatch, is_delete_category]);

    useEffect(() => {
        if (is_update_category.isSuccess) {
            message_category && tost.success(message_category);
            dispatch(category.setPatchCategoryIsSuccess(false));
        }
        if (is_update_category.isError) {
            message_category && tost.error(message_category);
            dispatch(category.setPatchCategoryIsError(false));
        }
    }, [, dispatch, is_update_category]);



    useEffect(() => {
        if (is_status_login.isSuccess) {
            message_user && tost.success(message_user);
            dispatch(login.setUserIsSuccess(false));
        }
        if (is_status_login.isError) {
            message_user && tost.error(message_user);
            dispatch(login.setUserIsError(false));
        }
    }, [, dispatch, is_status_login]);

    useEffect(() => {
        if (is_post_products.isSuccess) {
            message_products && tost.success(message_products);
            dispatch(products.setPostProductsIsSuccess(false));
        }
        if (is_post_products.isError) {
            message_products && tost.error(message_products);
            dispatch(products.setPostProductsIsError(false));
        }
    }, [dispatch, is_post_products]);

    useEffect(() => {
        if (is_delete_products.isSuccess) {
            message_products && tost.success(message_products);
            dispatch(products.setDeleteProductsIsSuccess(false));
        }
        if (is_delete_products.isError) {
            message_products && tost.error(message_products);
            dispatch(products.setDeleteProductsIsError(false));
        }
    }, [dispatch, is_delete_products]);

    useEffect(() => {
        if (is_update_products.isSuccess) {
            message_products && tost.success(message_products);
            dispatch(products.setPatchProductsIsSuccess(false));
        }
        if (is_update_products.isError) {
            message_products && tost.error(message_products);
            dispatch(products.setPatchProductsIsError(false));
        }
    }, [, dispatch, is_update_products]);



    useEffect(() => {
        if (is_post_company.isSuccess) {
            message_compny && tost.success(message_compny);
            dispatch(company.setCompanyIsSuccess(false));
        }
        if (is_post_company.isError) {
            message_compny && tost.error(message_compny);
            dispatch(company.setCompanyIsError(false));
        }
    }, [, dispatch, is_post_company]);

    useEffect(() => {
        if (is_status_img.isSuccess) {
            message_products && tost.success(message_products);
            dispatch(products.setPostImageIsError(false));
        }
        if (is_status_img.isError) {
            message_products && tost.error(message_products);
            dispatch(products.setPostImageIsError(false));
        }
    }, [, dispatch, is_status_img]);

    return (
        <div>
            {contextHolder}
        </div>
    )
}

export default Toastmessage
