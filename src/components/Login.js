import React, { useState } from "react";
import "./css/Login.css";
import client from "./client";




function Login() {
 


  const [data, setData] = useState(null);
  const onclick2 = (e) => {
    e.preventDefault();
    
    client
      .get("/member")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });

    }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    console.log('e click');
    const Id = e.target.id.value;
    const Pw = e.target.password.value;    

    await client.post('/auth/login', {Id, Pw})
    .then((res)=> {
      document.location.href='/dashboard'
      console.log(res);
    })
  
    console.log('data In');
  }

  return (
    <>
    <form className="container" onSubmit={onSubmitHandler}>
      <h2 className="login">Login</h2>
      <input className="id" type="text" name="id" placeholder="id"/>
      <input className="pw" type="password" name="password" placeholder="password"/> 
      <br />
      <button className="btn">Login</button>
    </form>
    <div><a onClick={onclick2}>data</a></div>
    </>
    
  );

}


export default Login;