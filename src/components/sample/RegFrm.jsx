import React, {useState } from 'react'
import './RegFrm.css';

function RegFrm() {

    const [user,setUser] = useState({
        name:'sathish',
        age:20,
        gender:'Male',
        isMarried:true,
        country:'India'
    });
function changeHandler (e) {
    const name=e.target.name;
    const value = e.target.type === 'checkbox'?e.target.checked : e.target.value;
    setUser({...user,[name]:value});
}

  return (
    <>
    <table><tbody>
            <tr><td>Name</td><td>{user.name}</td></tr>
            <tr><td>Age</td><td>{user.age}</td></tr>
            <tr><td>Gender</td><td>{user.gender}</td></tr>
            <tr><td>Marital State</td><td>{user.isMarried?'married':'Not Married'}</td></tr>
            <tr><td>Country</td><td>{user.country}</td></tr>
        </tbody>
    </table>
    <form>
        <input type="text" placeholder='Full name' value={user.name} name='name' onChange={changeHandler}/>
        <input type="number" onChange={changeHandler} placeholder='age' value={user.age} name='age'/>
    <div className="Gender">
        <label htmlFor="Male">
            <input type="radio" onChange={changeHandler} name='gender' id='Male'
             checked={user.gender==='Male'} value='Male'/>Male
        </label>
        <label htmlFor="Female">
            <input type="radio" onChange={changeHandler} name='gender' id='Female'
            checked={user.gender==='Female'} value='Female' />Female
        </label>
    </div>
        <label htmlFor="isMarried">
            <input type="checkbox" onChange={changeHandler} id='isMarried' name='isMarried' checked={user.isMarried}/>Is Married
        </label>
        <div>
           <label htmlFor="country">Select Country : </label> 
           <select name="country" id="Country" 
           onChange={changeHandler} value={user.country}>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
            </select>
        </div>
        Bio : <textarea name="bio" id="bio" cols='30' rows='5' placeholder='write about you'/>
    </form>

    
    </>
  )
}

export default RegFrm
