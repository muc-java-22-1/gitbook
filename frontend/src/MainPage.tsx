import {FormEvent, useState} from "react";

export default function MainPage (){

    const [username, setUsername] = useState<string>("")

    const handleUsernameChange = (name: string) => {
        setUsername(name)
        console.log(name);
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log("submit")
    }

    return(
        <div>
            <div>
                <h1>GitBook</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type = "text" placeholder={"github username"} value={username} onChange={event => handleUsernameChange(event.target.value)}/>
                    <input type = "submit" value="Search"/>
                </form>
            </div>

        </div>

    )

}