package com.tushar.project_management.repository;


import com.tushar.project_management.Model.Project;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProjectRepository extends MongoRepository<Project, String> {
    List<Project> findAllByUserIdList(String id);
    Project findProjectByIdAndUserIdList(String id,String useridlist);
}
