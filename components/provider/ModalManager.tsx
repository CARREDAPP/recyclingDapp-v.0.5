import React from 'react'
import { useAppSelector } from '../redux/store'
import NewCategory from '../modal/category/New-category';
import NewProducts from '../modal/products/New-products';
import NewUser from '../modal/user/New-user';
import UpdateCategory from '../modal/category/Update-category';
import UpdateProducts from '../modal/products/Update-products';

function ModalManager() {
    const { is_open, is_open_sub } = useAppSelector(state => state.createShownModal);
    return (
        <div>
            {is_open === 'show-category' && <NewCategory />}
            {is_open === 'show-product' && <NewProducts />}
            {is_open === 'show-user' && <NewUser />}
            {is_open === 'show-update-category' && <UpdateCategory />}
            {is_open === 'show-update-products' && <UpdateProducts />}

        </div>
    )
}

export default ModalManager
