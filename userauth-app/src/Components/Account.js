import React, { useEffect, useState } from "react";

export default function Account() {

    const [userdata, setUserdata] = useState([{}])

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('http://localhost:1337/api/getuser',{
            Method: 'GET',
        })
        setUserdata(response.data);
        console.log(userdata)
        }
        fetchUser()
    }, [])
    

    return(
        <div>account (protected)</div>
    )
}