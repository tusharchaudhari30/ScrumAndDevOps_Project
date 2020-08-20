package com.tushar.project_management.controller;

import com.tushar.project_management.Model.Cycle;
import com.tushar.project_management.Model.Epic;
import com.tushar.project_management.Model.Project;
import com.tushar.project_management.Model.User;
import com.tushar.project_management.repository.*;
import com.tushar.project_management.service.UserService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.List;


@RestController
public class UserRestController {
    final
    CycleRepository cycleRepository;
    final
    EpicRepository epicRepository;
    final
    WorkRepository workRepository;
    final UserService userService;
    final
    UserRepository userRepository;
    final
    ProjectRepository projectRepository;

    public UserRestController(CycleRepository cycleRepository, EpicRepository epicRepository, WorkRepository workRepository, UserService userService, ProjectRepository projectRepository, UserRepository userRepository) {
        this.cycleRepository = cycleRepository;
        this.epicRepository = epicRepository;
        this.workRepository = workRepository;
        this.userService = userService;
        this.projectRepository = projectRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/board/{projectid}")
    @PreAuthorize("#oauth2.hasAnyScope('ui')")
    public List<Cycle> boardscycles(@PathVariable String projectid) {
        User user = userRepository.findByEmail("user");
        var project = projectRepository.findProjectByIdAndUserIdList(projectid, user.getId());
        if (project == null) {
            project = new Project();
        }
        return userService.getBoard(project.getId());
    }

    @GetMapping("/timeline/{projectid}")
    @PreAuthorize("#oauth2.hasAnyScope('ui')")
    public List<Epic> timelinesepics(@PathVariable String projectid) {
        User user = userRepository.findByEmail("user");
        var project = projectRepository.findProjectByIdAndUserIdList(projectid, user.getId());
        if (project == null) {
            project = new Project();
        }
        return userService.getTimeline(project.getId());
    }
    @GetMapping("/user/me")
    public Principal getPrincipal(Principal principal, HttpServletRequest request) {
        return principal;
    }

}
