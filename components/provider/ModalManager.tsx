import React from 'react'
import { useAppSelector } from '../redux/store'
import NewCategory from '../modal/category/New-category';
import NewProducts from '../modal/products/New-products';

function ModalManager() {
    const { is_open, is_open_sub } = useAppSelector(state => state.createShownModal);
    return (
        <div>
            {is_open === 'show-category' && <NewCategory />}
            {is_open === 'show-product' && <NewProducts />}
        </div>
    )
}

export default ModalManager
