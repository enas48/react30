import React, { useEffect, useState } from 'react'
import UserFeed from './UserFeed'
import axios from 'axios';

let url = 'https://randomuser.me/api/?results=50';

export default function UserList() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get(url).then((response) => {
            setUsers(response.data.results);
        });
    }, []);
    return (
        <div>
            <nav className="text-center p-4 h1 bg-dark text-white">
                UserList
            </nav>
            <div className="container ">
                {users.length !== 0 && users.map((user, i) => <UserFeed key={i} user={user} />)}
            </div>
        </div>
    )
}
