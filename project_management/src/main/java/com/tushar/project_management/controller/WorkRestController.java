package com.tushar.project_management.controller;

import com.tushar.project_management.Model.Work;
import com.tushar.project_management.repository.CycleRepository;
import com.tushar.project_management.repository.EpicRepository;
import com.tushar.project_management.repository.WorkRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class WorkRestController {
    final
    WorkRepository workRepository;

    public WorkRestController(CycleRepository cycleRepository, EpicRepository epicRepository, WorkRepository workRepository) {
        this.workRepository = workRepository;
    }

    @PreAuthorize("#oauth2.hasAnyScope('ui')")
    @PostMapping("/work/update")
    public Work updatework(@RequestBody Work work) {
        return this.workRepository.save(work);
    }

    @PreAuthorize("#oauth2.hasAnyScope('ui')")
    @PostMapping("/work/drag")
    public Work dragwork(@RequestBody Work work) {
        this.workRepository.save(work);
        return work;
    }

    @PreAuthorize("#oauth2.hasAnyScope('ui')")
    @PostMapping("/work/delete")
    public Work deletework(@RequestBody Work work) {
        this.workRepository.delete(work);
        return work;
    }

    @PreAuthorize("#oauth2.hasAnyScope('ui')")
    @GetMapping("/work/noepic")
    public List<Work> workwithnoepic() {
        var listWork = this.workRepository.findAllByProjectId("1");
        return listWork.stream().filter(work -> work.getEpicId() == null).collect(Collectors.toList());
    }

}
