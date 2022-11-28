import React, { useEffect, useState } from 'react';

const useVerified = email => {
    const [verifiedSeller, setVerifiedSeller] = useState({})
    useEffect(() => {
            fetch(`https://car-seller-server.vercel.app/users/verified/seller?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    setVerifiedSeller(data)
                })
    }, [email])

    return [verifiedSeller]
};

export default useVerified;