import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import './style.css';


export default function Home() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/')
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); // Stop loading on error as well
            });
    }, []);
    if(loading){
        return <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    }

    return (
        <div>
            <div className='header'>
            <h1>Home</h1>
            </div>
                <div className='users'>
                    <ul>
                        {users.map(item => (
                            <li key={item.id}>
                                <Link to={`/user/${item.id}`}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
        </div>
    );
}
