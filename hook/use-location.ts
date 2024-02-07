import React, { useEffect, useState } from 'react'

function useLocation() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [location, setlocation] = useState(true);

    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position): any => {
                        setLatitude(position?.coords?.latitude as any);
                        setLongitude(position?.coords?.longitude as any);
                    },

                );
            }
        };
        getLocation();
    }, []);

    return { latitude, longitude }

}

export default useLocation
