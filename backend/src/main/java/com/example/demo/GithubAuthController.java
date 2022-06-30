package com.example.demo;


import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")

public class GithubAuthController {



    @PostMapping("/githublogin")
    public GiToken createToken(){
        return null;

    }


}
