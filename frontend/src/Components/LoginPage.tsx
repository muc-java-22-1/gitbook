import {useState} from "react";


export default function LoginPage(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div>
            <form>
                <input type={"text"} placeholder={"Username"} />
                <input type={"password"} placeholder={"Password"}/>
            </form>
            <div>
                <a href={"https://github.com/login/oauth/authorize?client_id=8d219320c72de3d60a59"}>Login with GitHub</a>
            </div>
        </div>
    )
}