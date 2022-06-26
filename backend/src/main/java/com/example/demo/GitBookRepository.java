package com.example.demo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GitBookRepository extends MongoRepository<GitHubDBEntry, String> {
}
