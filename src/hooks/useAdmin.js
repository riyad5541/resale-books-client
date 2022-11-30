import { useEffect, useState } from "react";

const useAdmin = email =>{
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
 useEffect( () =>{
    if(email){
        fetch(`https://resale-books-server-five.vercel.app/users/admin/${email}`)
    .then(res =>res.json())
    .then(data =>{
        setIsAdmin(data.isAdmin);
        setIsAdminLoading(false);
        // if(data.accessToken){
        //     localStorage.setItem('accessToken',data.accessToken)
        //     /
        // }
    })
    }
 }, [email])
 return[isAdmin, isAdminLoading];
}

export default useAdmin;