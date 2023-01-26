import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';


const Index = () => {

  const formik = useFormik({
    initialValues: {
      name:'',
      desc:'',
      position: '',
      img:''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less').min(4,'Must be 5 or more')
        .required('Required'),
      
        desc: Yup.string()
        .max(15, 'Must be 15 characters or less').min(7,'Must be 5 or more')
        .required('Required'),
        position: Yup.string()
        .max(15, 'Must be 15 characters or less').min(7,'Must be 5 or more')
        .required('Required'),
        img: Yup.string()
        .max(105, 'Must be 15 characters or less').min(3,'Must be 3 or more')
        .required('Required'),
    }),
    onSubmit: values => {
      toast.success('Successfully posted!')
      axios.post('http://localhost:8080/api/teachers',values).then((res)=>console.log(res.data))
    },
  });
  return (
    <div style={{display:"flex",width:"100%",height:'600px'}}>
        <img src='https://www.pngitem.com/pimgs/m/360-3603184_transparent-customers-png-png-download.png' width={464} height={641} alt='sekil'/>
    
    <form initialValues={{
        short: ''
      }} style={{display:"grid",marginLeft:"100px"}} onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        placeholder="Username"
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

<label htmlFor="name">position</label>
      <input
      style={{width:'500px'}}
        id="position"
        name="position"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.position}
        placeholder="position Address"
      />
      {formik.touched.img && formik.errors.img ? (
        <div>{formik.errors.img}</div>
      ) : null}

      <label htmlFor="desc">desc</label>
      <input
        id="desc"
        name="desc"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.desc}
placeholder="desc"
      />
      {formik.touched.desc && formik.errors.desc ? (
        <div>{formik.errors.desc}</div>
      ) : null}

       
      <label htmlFor="name">img</label>
      <input
        id="img"
        name="img"
        type="img"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.img}
        placeholder="img"
      />
      {formik.touched.img && formik.errors.img ? (
        <div>{formik.errors.img}</div>
      ) : null}
       
      <button  type="submit" >Submit</button>
      <Toaster/>
    </form>
    </div>
  );
};

export default Index