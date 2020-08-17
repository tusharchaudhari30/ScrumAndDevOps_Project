package com.tushar.project_management.controller;

import com.tushar.project_management.Model.Cycle;
import com.tushar.project_management.Model.Epic;
import com.tushar.project_management.repository.CycleRepository;
import com.tushar.project_management.repository.EpicRepository;
import com.tushar.project_management.repository.WorkRepository;
import com.tushar.project_management.service.UserService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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

    public UserRestController(CycleRepository cycleRepository, EpicRepository epicRepository, WorkRepository workRepository, UserService userService) {
        this.cycleRepository = cycleRepository;
        this.epicRepository = epicRepository;
        this.workRepository = workRepository;
        this.userService = userService;
    }

    @PreAuthorize("#oauth2.hasAnyScope('ui')")
    @GetMapping("/board")
    public List<Cycle> boardcycles(HttpServletResponse response) {
        return userService.getBoard("1");
    }

    @PreAuthorize("#oauth2.hasAnyScope('ui')")
    @GetMapping("/timeline")
    public List<Epic> timelineepics() {
        return userService.getTimeline("1");
    }

    @GetMapping("/user/me")
    public Principal getPrincipal(Principal principal, HttpServletRequest request) {
        return principal;
    }

}
