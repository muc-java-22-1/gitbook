package com.example.demo;


import lombok.RequiredArgsConstructor;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/auth")

public class GithubAuthController {

    private final String clientId;
    private final String clientSecret;
    private final RestTemplate restTemplate;

    public GithubAuthController(@Value("${app.oauth.clientId}") String clientId,@Value("${app.oauth.clientSecret}") String clientSecret, RestTemplate restTemplate) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.restTemplate = restTemplate;
    }

    @PostMapping("/githublogin")
    public GiToken createToken(@RequestParam String code){

        String url = "https://github.com/login/oauth/access_token?"
                + "client_id=" + clientId
                + "&client_secret=" + clientSecret
                + "&code=" + code;

        return null;
    }


}
