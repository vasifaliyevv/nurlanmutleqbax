import styles from './Index.module.css'
import React  from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import axios from 'axios'
const Teachers = ({teach, id}) => {
    function Delete() {
        axios.delete(`http://localhost:8080/api/teachers/${teach._id}`)
            .then(() => console.log({ status: 'Delete successful' }));
            toast.success('Successfully deleted!')
    }
  return (
    <div className={styles.teacher}>
               <div className={styles.teac}>
               <img width={150} alt="sa" src={teach.img}/>
                <h1>{teach.name}</h1>
<h2>{teach.position}</h2>
                <p>
                {teach.desc}
                </p>
<Link to={`/teacherdetail/${teach._id}`}>Details</Link>

                <button onClick={Delete}>delete</button>
               </div>
              </div>
  )
}

export default Teachers
