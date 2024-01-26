import { placement } from '@/components/helpers/enum'
import { ButtonProps, Popconfirm } from 'antd'
import React from 'react'

interface IPopconfirm {
    open: boolean,
    onConfirm?: () => void,
    onCancel?: () => void,
    children?: React.ReactNode
    description?: string,
    title?: string
    placement?: placement,
    okButtonProps: ButtonProps

}

function PopConfirm({ onCancel, onConfirm, children, open, title, description, placement, okButtonProps }: IPopconfirm) {
    return (
        <Popconfirm
            placement={placement}
            title={title}
            description={description}
            open={open}
            onConfirm={onConfirm}
            okButtonProps={okButtonProps}
            onCancel={onCancel}>
            {children}
        </Popconfirm>
    )
}

export default PopConfirm
