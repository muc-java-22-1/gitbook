package com.example.demo;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "favrepos")
public class GitHubDBEntry {

    private String name;
    private List<GitHubRepoDB> repos;

}
