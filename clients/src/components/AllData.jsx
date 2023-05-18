import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const AllData = () => {
    const [data, setData] = useState()
    useEffect(() => {
        async function getFun() {
            let result = await fetch('https://web-form-assessment.onrender.com/', {
                method: "get",
                headers: { 'content-type': 'application/json' },
            })
            result = await result.json()
            setData(result);
        }
        getFun()
    })
    return (
        <>
        <div className='alldata_main'>
            <h1>List</h1>
          

            <div className='alldata'>
                <div className="header">
                    <p>Name</p>
                    <p>Mobile</p>
                    <p className='email'>Email</p>
                    <p>Edit</p>
                    <p>Delete</p>
                </div>
            <div className='footer_main'>
                {
                    data && data.map((val) => {
                        return (<div className='footer' key={val._id}>
                            <p>{val.name}</p>
                            <p>{val.number}</p>
                            <p className='email'>{val.email}</p>
                            <div><button>  <Link to={`/edit/${val._id}`}>Edit</Link></button></div>
                            <div> <button onClick={async()=>{
                                let result = await fetch(`https://web-form-assessment.onrender.com/${val._id}`,{
                                    method:"delete",
                                    headers:{"content-type":"application/json"}
                                })
                                console.log(result);
                            }}>Delete</button></div>

                        </div>)
                    })
                }
                </div>
            </div>
        </div>
        </>
    )
}

export default AllData