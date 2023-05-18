import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AllData from './AllData'

const Form = () => {
    const navigater = useNavigate()
    const prames = useParams()
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [number,setNumber] = useState()
    const [boot,setBool]=useState(false)
    useEffect(()=>{
        async function getFun(){
            let result = await fetch('http://localhost:8080/edit/'+prames.id,{
                method:"get",
                headers:{'content-type':'application/json'}
            })
            result = await result.json()
            setName(result.name);
            setEmail(result.email);
            setNumber(result.number);
        }
        getFun()
    },[])
   
   
    const submitFun = async(e)=>{
        e.preventDefault()
       let result = await fetch('http://localhost:8080/edit/'+prames.id,{
        method:"put",
        body:JSON.stringify({name,email,number}),
        headers:{'content-type':'application/json'}
       })
       result = await result.json()
       console.log(result);
       if(result){
        setBool(true)
       }
       
    }
    
  return (
    <>
   
    <div className='form_main'>
        
        <form className='form' onSubmit={submitFun}>
           
            <div className='from_input_div'>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' onChange={(e)=>{
                setName(e.target.value)
            }} value={name}/>
            </div>
            <div className='from_input_div'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={(e)=>{
                setEmail(e.target.value)
            }} value={email}/>
            </div>
            <div className='from_input_div'>
            <label htmlFor="number">Number</label>
            <input type="number" name="number" onChange={(e)=>{
                setNumber(e.target.value)
            }} value={number}/>
            </div>
            <div className='edit_btn'>
        {boot?<><button>Submit</button> <button onClick={()=>{
        navigater('/')
    }}>Home</button></>:<><button>Submit</button></>}
            </div>
        </form>
    </div>
    <AllData/>
    </>
  )
}

export default Form