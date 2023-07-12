import React,{useState} from 'react'
import { useNavigate } from "react-router-dom"

function Sinup() {
   const [name, setname] = useState("");
   const [email, setemail] = useState("");
   const [pass, setpass] = useState("");
   const navigate = useNavigate()
   const onClickHandler = () => navigate(`/Login`)

   const send = ()=>{
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": email,
  "name": name,
  "password": pass 
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/login", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
   }


  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"20vh"}}>
    <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
    <div>
    <input placeholder="Enter Name" onChange={(e)=>{setname(e.target.value)}} style={{marginTop:"2vh",padding:"2vh",width:"50vh"}}/>
    <br/>
    <input placeholder="Enter Email" onChange={(e)=>{setemail(e.target.value)}} style={{marginTop:"2vh",padding:"2vh",width:"50vh"}}/>
    <br/>
    <input placeholder="Enter Password" onChange={(e)=>{setpass(e.target.value)}} style={{marginTop:"2vh",padding:"2vh",width:"50vh"}}/>
    <br/>
    <div style={{display:"flex",justifyContent:"center"}}>
    <button onClick={send} style={{padding:"2vh",width:"20vh",marginTop:"2vh"}}>save</button>
    <button onClick={onClickHandler} style={{padding:"2vh",width:"20vh",marginTop:"2vh",marginLeft:"2vh"}} >Login</button>
    </div>
    </div>
    </div>
  )
}

export default Sinup
