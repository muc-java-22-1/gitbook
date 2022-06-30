import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";

export default function OauthCallbackPage(){

    const nav = useNavigate();
    const loc = useLocation();
    const code = loc.search;


    useEffect(() => {
        gitHubCallback(code)
            .then(loginResponse => localStorage.setItem('jwt', loginResponse.token))
            .then(() => nav('/userdetails'))
    }, [nav, code])


    return(
        <div>saving in progress</div>

    )
}