import React from 'react'
import axios from 'axios';
import "../styles/Projects.css"
import { useState, useEffect, useRef } from "react";
const Projects = () => {
  
  const [day, setDay] = useState("Monday");
  const [post, setPost] = useState({
    name : "",
    email : "",
    password : ""
  })
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  const handleInput = (e) => {
    setPost({...post, [e.target.name] : e.target.value})
   console.log(post)
}
  const handleClick = (e) => {
    e.preventDefault()
    axios.post("https://jsonplaceholder.typicode.com/posts", {post})
    .then(res => console.log(res))
    .catch(err => console.log(err))
      //  const eventName = ;
  }
  return (
    <div style={{padding: "40px"}}>
      {/* <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button> */}
     <form className='form'>
      <h1>Register</h1>
      <label id='name'>Name: </label>
     <input name='name' onChange={handleInput} type='text' placeholder='Type in your Name...' />
     <label id='name'> Email: </label>
    <input type='email' onChange={handleInput} placeholder='Type in your email..' name='email'/>
    <label id='name'> Password: </label>
    <input type='password' onChange={handleInput} placeholder='Type in your password' name='password' />
     <button onClick={handleClick}>Submit</button>
     
     </form>
    </div>
  );
}
function usePrevious(val) {
const ref = useRef();
useEffect(() =>{
  ref.current = val;
},
   [val]);
   return ref.current;
}
    

export default Projects