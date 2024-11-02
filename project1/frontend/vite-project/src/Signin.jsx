import { useState } from "react"
export default function Signin() {
  return (
    <>
    const [UserInfo,setUserInfo]=useState({
      username: "",
      password: "",
    });
    const handleInput=(e)=>{
        e.preventdefault();
        const elename=e.target.name;
        setUserInfo({
          ...UserInfo,[elename]: e.target.value
        });

      const handleSubmit=()=>{
          const p=fetch("https://localhost:3000/signin",{
            method: "POST",
            body: JSON.stringify(UserInfo),
            headers:{
              "Content-Type": "application/json"},
          });
      }
    }
    </>
  )
}
