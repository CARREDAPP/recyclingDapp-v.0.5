import { placement } from '@/components/helpers/enum'
import { ButtonProps, Popconfirm } from 'antd'
import React from 'react'

interface IPopconfirm {
    open: boolean,
    onConfirm?: () => void,
    onCancel?: () => void,
    description?: React.ReactNode,
    title?: React.ReactNode
    placement?: placement,
    okButtonProps: ButtonProps,
    children: React.ReactNode

}

function PopConfirm({ onCancel, onConfirm, open, title, description, placement, okButtonProps, children }: React.PropsWithChildren<IPopconfirm>) {
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
