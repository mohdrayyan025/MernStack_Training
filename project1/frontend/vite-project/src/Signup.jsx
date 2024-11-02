import { useState } from "react";

export default function SignUp(){

    const [UserInfo, setUserInfo] = useState({
        username: "",
        roll: "",
        branch: "",
        password: "",
    });
    

    function handleInput(e){
        e.preventDefault();
        const elemname = e.target.name;
        setUserInfo({...UserInfo, [elemname]:e.target.value})
    }

    function handleSubmit(){
        const p = fetch("http://localhost:3000/signup", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(UserInfo),
        });

    p.then((res)=>{
        return res.json();
    }).then((data)=>{
        // console.log(data);
        console.log(data)
    });


    }

    return(
        <>
            <input type="text" name="username"  placeholder="User Name" onChange={handleInput}/>
            <input type="text" name="roll"  placeholder="Roll No." onChange={handleInput}/>
            <input type="text" name="branch"  placeholder="Branch" onChange={handleInput}/>
            <input type="password" name="password"  placeholder="Password" onChange={handleInput}/>
            <br />
            <br />
            <button onClick={handleSubmit}>Sign Up</button>

        </>
    );
}