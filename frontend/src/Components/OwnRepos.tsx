import {FormEvent, useState} from "react";
import {Repo} from "../gitBookService/model";
import {useNavigate} from "react-router-dom";
import {getUserRepos} from "../gitBookService/GitBookServiceApi";
import RepoGallery from "./RepoGallery";

export  default function OwnRepos (){
    const [username, setUsername] = useState<string>("")
    const [userRepos, setUserRepos] = useState<Repo[]>([])
    const nav = useNavigate()

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
                <form onSubmit={handleSubmit}>
                    <input type = "text" placeholder={"your github username" } value={username} onChange={event => handleUsernameChange(event.target.value)}/>
                    <input type = "submit" value="Search" />
                    <div><RepoGallery userRepo={userRepos}/></div>
                </form>
            </div>
            <div>
                <button onClick = {() => nav('/')  }  >back</button>
            </div>

        </div>

    )
}