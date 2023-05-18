import React, { useState } from 'react'
import AllData from './AllData'
const Form = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
        number:""
    })
    const changeFun = (e) =>{
        const{value,name}=e.target;
        setData((obj)=>{
            return({
                ...obj,
                [name]:value
            })
        })
    }
    const submitFun = async(e)=>{
        e.preventDefault()
       let result = await fetch('http://localhost:8080/',{
        method:"post",
        body:JSON.stringify(data),
        headers:{'content-type':'application/json'}
       })
       result = await result.json()
    }
  return (<>
  
    <div className='form_main'>
        <form className='form' onSubmit={submitFun}>
           
            <div className='from_input_div'>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' onChange={changeFun}/>
            </div>
            <div className='from_input_div'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={changeFun}/>
            </div>
            <div className='from_input_div'>
            <label htmlFor="number">Number</label>
            <input type="number" name="number" onChange={changeFun}/>
            </div>
            <div className='edit_btn'>
            <button>Submit</button>
            </div>
        </form>
    </div>
    <AllData/>
    </>
  )
}

export default Form