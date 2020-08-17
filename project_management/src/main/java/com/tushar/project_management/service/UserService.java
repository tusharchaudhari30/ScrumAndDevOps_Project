package com.tushar.project_management.service;

import com.tushar.project_management.Model.Cycle;
import com.tushar.project_management.Model.Epic;
import com.tushar.project_management.repository.CycleRepository;
import com.tushar.project_management.repository.EpicRepository;
import com.tushar.project_management.repository.WorkRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    final
    CycleRepository cycleRepository;
    final
    EpicRepository epicRepository;
    final
    WorkRepository workRepository;

    public UserService(CycleRepository cycleRepository, EpicRepository epicRepository, WorkRepository workRepository) {
        this.cycleRepository = cycleRepository;
        this.epicRepository = epicRepository;
        this.workRepository = workRepository;
    }

    public List<Epic> getTimeline(String projectId) {
        List<Epic> epicList = this.epicRepository.findAllByProjectId(projectId);
        epicList.forEach(epic1 -> epic1.setWorkList(workRepository.findAllByEpicId(epic1.getId())));
        return epicList;
    }

    public List<Cycle> getBoard(String projectId) {
        List<Cycle> cycleList = this.cycleRepository.findAllByProjectIdOrderByPosition("1");
        cycleList.forEach(cycle -> cycle.setWorkList(workRepository.findAllByCycleIdOrderByPosition(cycle.getId())));
        return cycleList;
    }


}
