package com.tushar.project_management.controller;

import com.tushar.project_management.Model.Epic;
import com.tushar.project_management.repository.EpicRepository;
import com.tushar.project_management.repository.WorkRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Collectors;

@RestController
public class EpicRestController {
    final
    EpicRepository epicRepository;
    final
    WorkRepository workRepository;

    public EpicRestController(EpicRepository epicRepository, WorkRepository workRepository) {
        this.epicRepository = epicRepository;
        this.workRepository = workRepository;
    }

    @PreAuthorize("#oauth2.hasAnyScope('ui')")
    @PostMapping("/epic/update")
    public Epic updateEpic(@RequestBody Epic epic) {
        System.out.println(epic);
        return this.epicRepository.save(epic);
    }

    @PreAuthorize("#oauth2.hasAnyScope('ui')")
    @PostMapping("/epic/delete")
    public Epic deleteEpic(@RequestBody Epic epic) {
        workRepository.saveAll(this.workRepository.findAllByEpicId(epic.getId()).stream()
                .map(work -> {
                    work.setEpicId(null);
                    return work;
                }).collect(Collectors.toList()));
        this.epicRepository.delete(epic);
        return epic;
    }
}
