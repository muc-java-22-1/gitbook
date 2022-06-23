import {useNavigate} from "react-router-dom";

export default function MainPage(){
    const nav = useNavigate()

    return(
        <div>
            <button onClick={() => nav("/search" )}>search for user</button>
        </div>
    )
}