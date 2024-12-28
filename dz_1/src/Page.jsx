import { useEffect, useState } from 'react';
import {useNavigate}  from 'react-router-dom'
import axios from 'axios'

const Page = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios ('https://jsonplaceholder.typicode.com/users')
        .then(({data}) => setData(data))
    },[])
    return (
        <div>
            <h1>Page</h1>
            <button onClick={() => navigate(-1)}>go back</button>
            {
                data.map(item =>{
                    return <p key={item.id}>{item.username}</p>
                })
            }
            
        </div>
    );
}

export default Page;
