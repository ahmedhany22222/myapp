import React from 'react'


export const User = ({id,name,DeleteUser,Updateuser}) => {
  return (
             <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td >
                    <button className='btn btn-info mx-2'onClick={()=>Updateuser(id)}>Edit</button>
                    <button className='btn btn-danger' onClick={()=>DeleteUser(id)}>Delete</button>
                </td>
            </tr>
  )
}
