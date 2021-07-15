package com.tushar.project_management.controller;

import com.tushar.project_management.Model.Project;
import com.tushar.project_management.Model.User;
import com.tushar.project_management.repository.ProjectRepository;
import com.tushar.project_management.repository.UserRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProjectController {
    final
    ProjectRepository projectRepository;

    final UserRepository userRepository;
    public ProjectController(ProjectRepository projectRepository, UserRepository userRepository) {
        this.projectRepository = projectRepository;
        this.userRepository = userRepository;
    }
    @GetMapping("/getprojects")
    @PreAuthorize("#oauth2.hasAnyScope('ui')")
    List<Project> getProjectsById(){
        User user=userRepository.findByEmail("user");
        return projectRepository.findAllByUserIdList(user.getId());
    }
}