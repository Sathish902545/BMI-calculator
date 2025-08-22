import React, { useState } from 'react'
import './Crud.css'



const Crud=() => {

const [userInfo,setUserInfo] = useState({
    name:'',
    age:'',
    email:'',
    phone:'',
});

const [user,setUser] = useState([])

//function handleChange () {} (or)
const handleChange = (e) => {

   const {name,value} = e.target;
   setUserInfo((currinfo)=>{return{
    ...currinfo,[name]:value,
   }})
}

const addData = (e) => {
    e.preventDefault();
    setUser((currUser)=>[...currUser,userInfo]);
    /* setUserInfo({
    name:'',
    age:'',
    email:'',
    phone:'',
}); */
};

  return (
    <div className='container'>
      <form className='form'>
        <input type="text" name='name' placeholder='Enter the Name' onChange={handleChange} value={userInfo.name}/>
        <br />
        <input type="number" name='age' placeholder='ENter the Age' onChange={handleChange} value={userInfo.age} />
        <br />
        <input type="text" name='email' placeholder='Enter the Email' onChange={handleChange} value={userInfo.email}/>
        <br />
        <input type="number" name='phone' placeholder='Enter the Phone:No' onChange={handleChange} value={userInfo.phone}/>
        <br />
        <button onClick={addData}>Add</button>
      </form>
      <div className="datatable">
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
                </tr>
        </thead>
        <tbody>
            {user.map((user,index)=>{
                return(
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>)})}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Crud
