import React from 'react'
import { message as Tost } from 'antd'


function Toastmessage() {
    const [tost, contextHolder] = Tost.useMessage({ maxCount: 1, });

    return (
        <div>
            {contextHolder}
        </div>
    )
}

export default Toastmessage
