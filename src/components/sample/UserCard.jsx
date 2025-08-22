import React, { Component } from "react";
import './UserCard.css';
//import User from '../GrowingPlant/GrowingPlant';



function User(props) {
    return(
        <div className='card-container'> 
            <span className={props.online?'pro online' : 'pro offline'}>
                {props.online?'online':'offline'}</span>
            <img style={{width:'110px',height:'110px'}} src='img.jpg' className="img" alt='user' />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            <div className='buttons'>
                <button className='primary'>Message</button>
                <button className='primary Outline'>Following</button>
            </div>
            <div className='skills'>
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((Value)=>{
                        return <li >{Value}</li>
                        })}
                </ul>
            </div>
        </div>
    )
}
 
function UserCard () {
     return(
        
        <User 
        name='Sathish' 
        city='Tiruttani'
        description='Front-end Developer'
        skills={['UI / UX','Front End Developer','HTML',
        'CSS','Javascript','React','python']}
        online={true}
        />
    )
}

export default UserCard