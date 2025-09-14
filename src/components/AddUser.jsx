import React, { useRef, useState } from 'react'

export const AddUser = ({addUser}) => { 
    let [input,setInput] = useState("")
    let  inp = useRef(null)
    let handleSubmit = (e)=>{
    e.preventDefault()
    if(!input.trim()) return
    addUser(input)
    setInput('')
    inp.current.focus()
  }
  return (
    <form onSubmit={ handleSubmit} className='form border p-3 mb-2'>
        <div className="mb-3">
            <label className='mb-3' htmlFor="name">Type your Name</label>
            <input ref={inp} value={input} id="name" onChange={e=> setInput(e.target.value)} type="text" name="name" className='form-control' />
        </div>
        <button type="submit"  className='btn btn-success'>Add User</button>
    </form>
  )
}
