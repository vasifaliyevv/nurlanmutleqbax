import React from 'react'
import styles from './Index.module.css'
import { Link } from 'react-router-dom'
const Index = () => {
  return (
    <>
    <nav className={styles.nav}>
<div className={styles.navmain}>
  <div className={styles.navmainleft}>
<h1>Oneschool</h1>
  </div>
  <div className={styles.navmainmid}>
<ul>
<Link className={styles.link} to='/' style={{textDecoration:"underline"}}><li>Home</li></Link>
<li>Courses</li>
<li>Programs</li>
<li>Teachers</li>
</ul>
  </div>

<div className={styles.navmainright}>
<button>CONTACT US</button>
</div>
</div>
    </nav>   
    </>
  )
}

export default Index
