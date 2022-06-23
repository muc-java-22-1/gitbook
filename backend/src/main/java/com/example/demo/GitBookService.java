package com.example.demo;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GitBookService {

    // private final GitBookRepository gitBookRepository;

    public String getAllRepos(String user) {

        return "dummy";
    }


}
