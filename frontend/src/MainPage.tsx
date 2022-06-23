import {FormEvent, useState} from "react";
import {getUserRepos} from "./gitBookService/GitBookServiceApi";
import {Repo} from "./gitBookService/model";


export default function MainPage (){

    const [username, setUsername] = useState<string>("")
    const [userRepos, setUserRepos] = useState<Repo[]>([])

    const handleUsernameChange = (name: string) => {
        setUsername(name)
        console.log(name);
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        getUserRepos(username)
            .then(data => setUserRepos(data))
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
                    <div>{userRepos.map(r => <div>{r.name}</div>)}</div>
                </form>
            </div>

        </div>

    )

}