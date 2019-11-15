import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import BubblePage from './BubblePage';

function MyAccount(props) {
    const [user, setUser] = useState({
        name: '',
        email: ''
    })

    useEffect(() => {
        axiosWithAuth()
        .get('/login', user)
        .then(res => {
            console.log('User', res);
            setUser({
                name: res.data.name,
                email: res.data.email
            })
        })
        .catch(err => {
            console.log(err)
        })
    }, [user]);

    return (
        <>
            <h2>My Account</h2>
            <BubblePage />
        </>
    )
}

export default MyAccount