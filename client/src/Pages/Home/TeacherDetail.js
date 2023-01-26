import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast';
import {  useParams } from 'react-router-dom';

function Detail() {
    const [teach, setTeach] = useState([])
    const { _id } = useParams()

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/teachers/${_id}`)
            .then((res) => {
                setTeach(res.data);

            }, 3000);
    }, []);
    return (
            <>
             <Helmet>
<title>Card `${id}`</title>
<meta name='description' content='Beginner friendly page for learning React Helmet.' />
</Helmet>
        <div className='cardinfo'>
            <div className='cardinfotext'>
                <p>Name: {teach[0].name}</p>
                <p>Surname: {teach.surname}</p>
                <p>Desc: {teach.desc}</p>
            </div>
            <Toaster/>
        </div>
            </>
 
    );
}

export default Detail