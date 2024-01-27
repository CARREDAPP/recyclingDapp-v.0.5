import React, { useEffect } from 'react'
import { message as Tost } from 'antd'
import { useAppSelector } from '../redux/store';
import * as category from '../redux/category/category.slices';
import * as products from '../redux/products/products.slices';
import useAppDispatch from '@/hook/use-dispatch';


function Toastmessage() {
    const [tost, contextHolder] = Tost.useMessage({ maxCount: 1, });
    const { dispatch } = useAppDispatch();
    const { status_delete: is_delete_category, status_post: is_post_category, status_update: is_update_category, message: message_category } = useAppSelector(state => state.createCategory)
    const { status_delete: is_delete_products, status_post: is_post_products, status_update: is_update_products, message: message_products } = useAppSelector(state => state.createProducts)


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
    }, [, dispatch, is_update_category]);


    return (
        <div>
            {contextHolder}
        </div>
    )
}

export default Toastmessage
