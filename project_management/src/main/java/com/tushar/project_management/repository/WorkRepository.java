package com.tushar.project_management.repository;

import com.tushar.project_management.Model.Work;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface WorkRepository extends MongoRepository<Work, String> {
    List<Work> findAllByCycleIdOrderByPosition(String cycleId);

    List<Work> findAllByEpicId(String epicId);

    List<Work> findAllByProjectId(String projectId);
}
