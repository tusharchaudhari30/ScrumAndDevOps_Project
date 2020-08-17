package com.tushar.project_management.repository;

import com.tushar.project_management.Model.Cycle;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CycleRepository extends MongoRepository<Cycle, String> {
    List<Cycle> findAllByProjectIdOrderByPosition(String projectId);
}
