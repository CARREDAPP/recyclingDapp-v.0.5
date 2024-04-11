import Image from 'next/image'
import React from 'react'

function NotFound() {
    return (
        <div>
            <Image className='w-1/4' src={'/img/notfoud.png'} alt='404' width={975} height={975} />
        </div>

    )
}

export default NotFound
