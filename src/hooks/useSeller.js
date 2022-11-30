import React, { useEffect, useState } from 'react';

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://resale-books-server-five.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isSeller);
                    setIsSellerLoading(false);
                    // if(data.accessToken){
                    //     localStorage.setItem('accessToken',data.accessToken)
                    //     /
                    // }
                })
        }
    }, [email])
    return [isSeller, isSellerLoading];
};

export default useSeller;