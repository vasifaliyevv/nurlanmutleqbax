import React from "react";
import styles from "./Index.module.css";
import Form from '../Add/Index'
import { useState, useEffect } from "react";
import axios from 'axios'
import {Helmet} from "react-helmet";

import Teachers from './Teachers'
const Index = () => {
  const sortHandler = () => {
    setTeachers(
      [...teachers].sort((a, b) => {
        return a.position - b.position
      }),
    )
  }
  const [teachers,setTeachers] = useState([])
  useEffect(()=>{
    axios
    .get('http://localhost:8080/api/teachers')
    .then((res)=> {setTeachers(res.data)
        console.log(res.data);
    })
},[])
  return (
    <>
  <Helmet>
<title>Home Page</title>
<meta name='description' content='Beginner friendly page for learning React Helmet.' />
</Helmet>
                
      <div className={styles.signup}>
        <div className={styles.signupmain}>
          <div className={styles.signbutton}>
            <h1>Learn From The Expert</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              ipsa nulla sed quis rerum amet natus quas necessitatibus.
            </p>
            <button type="submit">ADMISSION NOW</button>
          </div>
          <div className={styles.sign}>
            <div className={styles.signform}>
              <h1>Sign Up</h1>
              <input placeholder="Email Adress" />
              <input placeholder="Password" />
              <input placeholder="Re-type Password" />
              <button>SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.ourprograms}>
        <div className={styles.program}>
          <div className={styles.education}>
            <div className={styles.educa}>
              <h1>Our Programs</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                repellat aut neque! Doloribus sunt non aut reiciendis, vel
                recusandae obcaecati hic dicta repudiandae in quas quibusdam
                ullam, illum sed veniam!
              </p>
            </div>

            <div className={styles.educat}>
              <img
                width={600}
                alt="sa"
                src="https://preview.colorlib.com/theme/oneschool/images/undraw_youtube_tutorial.svg"
              />

              <div className={styles.excellent}>
                <h1>We Are Excellent In Education</h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  maxime nam porro possimus fugiat quo molestiae illo.
                </p>
                <span>🏫 22,931 Yearly Graduates</span>
                <span>🏫 150 Universities Worldwide</span>
              </div>
            </div>
          </div>
          <div className={styles.education}>
            <div className={styles.educat}>
              <div className={styles.excellent}>
                <h1>Strive for Excellent</h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  maxime nam porro possimus fugiat quo molestiae illo.
                </p>
                <span>🏫 22,931 Yearly Graduates</span>
                <span>🏫 150 Universities Worldwide</span>
              </div>
              <img
                width={600}
                alt="sa"
                src="https://preview.colorlib.com/theme/oneschool/images/undraw_teaching.svg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className={styles.ourteachers}>
        <div className={styles.ourteacher}>
          <div className={styles.teach}>
            <div className={styles.educa}>
              <h1>Our Teachers</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                repellat aut neque! Doloribus sunt non aut reiciendis, vel
                recusandae obcaecati hic dicta repudiandae in quas quibusdam
                ullam, illum sed veniam!
              </p>
            </div>

            <div className={styles.teachcat}>
              

              {
              teachers.map((teach,id)=>{
                  return(
          <Teachers key={id} teach={teach}/>
          
                  )
              })
          }

              
            </div>
          </div>
        </div>
      </div>

<div className={styles.add}>

<div className={styles.addmain}>
<div className={styles.addpro}>
<Form/>
</div>
</div>

</div>

    </>
  );
};

export default Index;
