import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import logo1 from './../../../signup2.jpg'
import { ToastContainer, toast } from 'react-toastify';
import img1 from '../../../backq.jpg'
import './Signup.scss'
import { useContext , useEffect} from 'react'
import { DataContext } from '../../../Context/Context'




function Signup() {
    const {Users,AdminTrue,Cartcount} = useContext(DataContext)


    const [adminTrue,setadminTrue]=AdminTrue


    let history = useHistory()
    const notify = () => toast("successfuly SignUp");


    const [error, seterror] = useState('')
    const [input, setinput] = useState({
        Name:'',
        Email:'',
        Address:'',
        Phone:'' ,
        Password:''
        
    })
  const  handleChane =(e)=>{
        setinput({...input,[e.target.name]:e.target.value})
    }
    const handleClick =()=>{
        notify();
        axios.post('http://localhost:8008/signup',input).then((result)=>{
            console.log(result);
            result.data.message ==='set' ?  history.push('/Login') : seterror('All fields required')
        })

    }
    useEffect(() => {
        setadminTrue(false)
    }, [])
    return (
        <div className='signup'>
        <div className='signup-wrapper'>
            <h3>Welcome</h3>
            <p>TO THE PRODUCTS AND SERVICES</p>
        </div>
        <form className='signup-form'>
        <h3>  {error && 'All fields Required'}  </h3>

            <input type="text" name='Name' value={input.Name} onChange={handleChane}  placeholder='username' />
            <input type="text" name='Email' value={input.Email} onChange={handleChane}  placeholder='email' />
            <input type="text" name='Address' value={input.Address} onChange={handleChane}  placeholder='address' />
            <input type="number" name='Phone' value={input.Phone} onChange={handleChane}  placeholder='phonne number' />
            <input type="password" name='Password' value={input.Password} onChange={handleChane}  placeholder='password' />
            
            <button  onClick={handleClick}>Signup</button>
            <Link to='/Login'>  <Button>Already have an account ?</Button> </Link>
        </form>
    </div>
    )
}

export default Signup
