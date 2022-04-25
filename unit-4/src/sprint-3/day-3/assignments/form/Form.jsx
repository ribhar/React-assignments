import React, { useState } from 'react'
import styles from './Form.module.css'
function Form() {
    const [formData, setFormData] = useState({})
    const handlechange = (e) =>{
        const inputName = e.target.name;
        
        if(e.target.type === "checkbox"){
            // console.log(e.target.value,e.target.checked);
            setFormData({
                ...formData,
                [inputName] : e.target.checked,
            })
        }else if(e.target.type === "file"){
            // console.log(e.target.value,e.target.files);
            setFormData({
                ...formData,
                [inputName] : e.target.files,
            });
        }
        else{

            setFormData({
                ...formData,
                [inputName] : e.target.value,
            });
        }
    };
    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log(e.target)
        const {username,password} = e.target
        console.log(username.value,password.value)
    }
  return (
    
    <div className={styles.form}>
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
            <div className={styles.grid}>
                <label>Username</label>
                <input type="text" name="username" onChange={handlechange} />
            </div>
            <div className={styles.grid}>
                <label>Password</label>
                <input type={formData.showpassword ?"text":"password"} name="password" onChange={handlechange}/>
                < div/>
                <div>

                    <input name="showpassword" type="checkbox" onChange={handlechange}/>
                    <label>Show Password</label>
                </div>
            </div>
            <div className={styles.grid}>
                <label>Age</label>
                <input type="number" name="age" onChange={handlechange}/>
            </div>
            <div className={styles.grid}>
                <label>DOB</label>
                <input type="date" name="dob" onChange={handlechange}/>
            </div>
            <div className={styles.grid}>
                <label>Resume</label>
                <input type="file" name="resume" onChange={handlechange}/>
            </div>
            <div className={styles.grid}>
                <div/>
                <input type="submit" />
            </div>
        </form>
    </div>
    
  )
}

export default Form
