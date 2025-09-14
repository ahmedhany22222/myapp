import { useState } from "react";
import { AddUser } from "./components/AddUser";
import { PageTitle } from "./components/PageTitle";
import { User } from "./components/User";
import { UpdateUser } from "./components/UpdateUser";
import { UselocalStorage } from "./components/UselocalStorage";


function App() {
  let{AddTolocalStorge,GetlocalStorage}=UselocalStorage()
  let [users,setUsers] =useState(GetlocalStorage())
  let [valueUpdate,setValueUpdate]=useState({})
  let[update,setUpdate]= useState(false) 
  let addUser = (input)=>{
   let newUser= [...users,{id:users.length+1,name:input}]
   setUsers(newUser)
    AddTolocalStorge(newUser)
  }
  let DeleteUser =(id)=>{
  let delUser= users.filter(x=>x.id !== id)
  setUsers(delUser)
    AddTolocalStorge(delUser)
  }
  let Updateuser=(id)=>{
    let user = users.find(x=>x.id===id)
    setUpdate(true)
    setValueUpdate(user)
  }
  let SaveUpdate=(updateName)=>{
     let updateUser= users.map(x=>x.id===valueUpdate.id ?{...x,name:updateName}:x)
      setUpdate(false)
      setValueUpdate({});
      setUsers(updateUser)
      AddTolocalStorge(updateUser)
  }
  return (
    <div className="container ">
      <div className="row">
        <div className="col-12">
        <PageTitle title="All Users"/>
        {!update?  <AddUser addUser={addUser}/>:<UpdateUser SaveUpdate={SaveUpdate} upUser={valueUpdate} />}
       
        <table className='table table-bordered'>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>ACTIONS</th>
            </tr>
        </thead>
        <tbody>
          {users.map(user=> 
            <User Updateuser={Updateuser} key={user.id} id={user.id} name={user.name} DeleteUser={DeleteUser}/>
          )}
        </tbody>
    </table>
        </div>
      </div>
    </div>
  );
}

export default App;
