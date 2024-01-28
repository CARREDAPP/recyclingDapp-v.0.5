import { HrefLink } from "@/types"

export const LINK_PRODUCT: HrefLink[] = [
    {
        href: '/admin/products/new',
        label: 'New Product',
    },
    {
        href: '/admin/products/category',
        label: 'New Category',
    },
    {
        href: '/admin/products/details',
        label: 'Details product',
    }
]
export const LINK_SUPPLY: HrefLink[] = [
    {
        href: '/admin/supply/new',
        label: 'New supply',
    },
    {
        href: '/admin/supply/view-supply',
        label: 'View supply',
    },
    {
        href: '/admin/supply/detais',
        label: 'Details supplies',
    },

]

export const LINK_SETTINGS: HrefLink[] = [
    {
        href: '/admin/settings/company',
        label: 'Company Information',
    },
    {
        href: '/admin/settings/paymentNotice',
        label: 'Payment notifications',
    },
    {
        href: '/admin/settings/users',
        label: 'Users',
    },
    {
        href: '/admin/settings/role',
        label: 'Role authorization'
    }
]
export const LINK_RAPPORT: HrefLink[] = [
    {
        href: '/admin/rapport/history',
        label: 'Sales history'
    },
    {
        href: '/admin/rapport/customer',
        label: 'Sales by Customer'
    },
    {
        href: '/admin/rapport/purchase',
        label: 'Purchase history'
    },
    {
        href: '/admin/rapport/sales',
        label: 'Purchases/Sales'
    },
    {
        href: '/admin/rapport/inventory',
        label: 'Inventory'
    },
    {
        href: '/admin/rapport/stocksheet',
        label: 'Stock Information'
    },
]



