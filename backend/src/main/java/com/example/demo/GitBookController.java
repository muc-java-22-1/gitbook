package com.example.demo;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RequestMapping("/api")
@RestController
@RequiredArgsConstructor
public class GitBookController {

    private final GitBookService gitBookService;

    @GetMapping
    public String dummy(){
        return "GitBook";
    }
}
