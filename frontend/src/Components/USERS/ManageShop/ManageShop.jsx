import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../../Context/Context'
import {useContext} from 'react'


function ManageShop() {
    const {Users,AdminTrue,Cartcount} = useContext(DataContext)
    const [adminTrue,setadminTrue]=AdminTrue
    const [state,setstate]=useState([])
    const manage=()=>{
        axios.get(`http://localhost:8008/usershop`).then((res)=>{
            console.log("userp",res)
            setstate(res.data)
            
        })
    }

    useEffect(()=>{
        manage()
        setadminTrue(false)
    },[])

  return (
    <div>
        
      <table class="styled-table">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Product</th>

                    </tr>
                </thead>
                <tbody>
                
                    {state.map((i,index) =>{return (
                        <tr style={{color:'#000'}} >
                            <td>{index+1}</td>
                            <td>{i.Name}</td>
                            <td>{i.Price}</td>
                            <td>{i.Category}</td>
                            <td>{i.Description}</td>
                            <td><img src={i.url} alt="" style={{width:"50px",height:"50px"}} /></td>
                            <td><Link to={`/editshop/${i._id}`}>Edit</Link></td>
                            {/* <td><button>Delete</button></td> */}
                                
                            
                            </tr>
                

                            
                    )})} 

                



                </tbody>
            </table>

        
    </div>
  )
}

export default ManageShop