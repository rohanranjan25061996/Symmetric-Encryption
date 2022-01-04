import React from 'react'
import css from "./styles/index.module.css"
import { LoginContext } from '../context/Check'
import crypto from "crypto-js"
import Axios from "axios"


const init = {
    userName: '',
    password : '',
}

let URL = 'http://localhost:4000/login'

const Login = () => {

    const [form, setForm] = React.useState(init)
    const {handelLogin, handelLogout} = React.useContext(LoginContext)

    const onChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        if(form.userName != '' && form.password != ''){
          const SALT = 'MY SECRET KEY SALT'
          const IV = 16
          const secretKey = crypto.AES.encrypt(form.password, SALT, {iv: IV} ).toString()
          Axios.post(URL, {userName: form.userName, password: secretKey})
          .then((res) => {
            const {response} = res.data
            if(response == 'Login Successfull'){
              setForm(init)
              handelLogin()
            }else{
              window.alert(response)
            }
          })
          .catch((err) => {
            window.alert(err)
          })
        }else{
          window.alert('Invalid username or password')
          setForm(init)
          handelLogout()
        }
        
    }

    return (
        <>
       <div className={css.login_page}>
        <div className={css.form}>
    <form className={css.register_form}>
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
    </form>
    <form className={css.login-form}>
      <input type="text" placeholder="username" value = {form.userName} name = 'userName' onChange = {onChange} />
      <input type="password" placeholder="password" value = {form.password} name = 'password' onChange = {onChange}/>
      <button onClick={handelSubmit}>login</button>
    </form>
  </div>
</div>
        </>
    )
}

export default Login