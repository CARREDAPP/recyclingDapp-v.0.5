import React, { useEffect, useState } from 'react'

function useLocation() {
    const [lat, setLat] = useState<string>('')
    const [long, setLong] = useState<string>('')
    const [location, setlocation] = useState(true)

    useEffect(() => {
        if (location) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude.toString())
                setLong(position.coords.longitude.toString())
                setlocation(false)
            });
        }
    }, [location]);

}

export default useLocation
