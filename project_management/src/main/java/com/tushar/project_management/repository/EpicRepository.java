package com.tushar.project_management.repository;

import com.tushar.project_management.Model.Epic;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface EpicRepository extends MongoRepository<Epic, String> {
    List<Epic> findAllByProjectId(String projectId);
}
