    import React, {  useEffect, useState } from 'react'

    export const UpdateUser = ({upUser,SaveUpdate}) => { 
        
    let [input,setInput] = useState("")
    let handleSubmit = (e)=>{
        e.preventDefault()
          SaveUpdate(input)
}
    useEffect(()=>{
    if(upUser){
        setInput(upUser.name)
    }
    },[upUser])
    return (
        <form onSubmit={ handleSubmit} className='form border p-3 mb-2'>
            <div className="mb-3">
                <label className='mb-3' htmlFor="name">Type your Name</label>
                <input value={input} onChange={(e)=>setInput(e.target.value)}  id="name"  type="text" name="name" className='form-control' />
            </div>
            <button type="submit"  className='btn btn-info'>Update User</button>
        </form>
    )
    }
