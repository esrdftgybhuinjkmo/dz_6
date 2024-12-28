 import {useNavigate} from 'react-router-dom'
 import axios from 'axios'
import { useEffect, useState } from 'react';

const Page2 = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios ('https://jsonplaceholder.typicode.com/users')
        .then(({data}) => setData(data))
    },[])
    return (
        <div>
            <h1>Page2</h1>
            <button onClick={() => navigate(-1)}>go back</button>
            {
                data.map(item =>{
                    return <p key={item.id}>{item.name}</p>
                })
            }
            
        </div>
    );
}

export default Page2;
