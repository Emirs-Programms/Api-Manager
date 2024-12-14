import React from 'react';
import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './style.css';
import axios from 'axios';

const User = () => {
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState(null);
    const {id} = useParams()
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                setUserdata(response.data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error)); 
    }, [id]);

    if (loading) {
        return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>;
    }
    return (
       
        <div>
            <div className='header'>
            <button onClick={()=>{
                navigate('/')
            }}>GO HOME</button>
            </div>
          {userdata && (
            <div className='userdata'>
                
                <p>Name: {userdata.name}</p>
                
                <p>EmaiL: {userdata.email}</p>
                <p>Phone: {userdata.phone}</p>
                <p>WebSite: {userdata.website}</p>
                
                </div>
          )}
          
        </div>

    );
}

export default User;