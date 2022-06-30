import axios from "axios";


export function getUserRepos(user: string){
    return(
    axios.get(`/api/githubrepos/${user}`)
        .then(response => response.data)
    )
}

export function gitHubCallback(code: string){

    return null
}