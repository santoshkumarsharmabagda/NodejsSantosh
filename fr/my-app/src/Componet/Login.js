import React,{useState,useEffect} from 'react'

import { useNavigate } from "react-router-dom"
import '../css/Animason.css'
function Login() {

    const [first, setfirst] = useState([]);
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    
   const navigate = useNavigate()
   const onClickHandler = () => navigate(`/MainPage`)
    const FGet = async()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:8080/list", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setfirst(result);
            })
            .catch(error => console.log('error', error));
    };


    useEffect(() => {
        FGet();
    }, [])
    
     const login = () => {
        first.map((item) => {
            if (item.email === email && item.password === password ) {
              onClickHandler()
            }
         })
     }  
     console.log(email) 
  return (
    <div>
    <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"20vh"}}>
    <div>
      <input placeholder='entrr Your email' onChange={(text)=>{setemail(text.target.value)}} style={{marginTop:"2vh",padding:"2vh",width:"50vh"}}/>
      <br/>
      <input placeholder='entrr Your Password' onChange={(text)=>{setpassword(text.target.value)}} style={{marginTop:"2vh",padding:"2vh",width:"50vh"}}/>
      <br/>
      <div style={{display:"flex",justifyContent:"center"}}>
      <button onClick={login} style={{padding:"2vh",width:"20vh",marginTop:"2vh"}}>Login</button>
      </div>
      
    </div>
    </div>
    <div className='ani'>
    <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
    </div>
    </div>
  )
}

export default Login
