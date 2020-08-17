package com.tushar.project_management.component;

import com.tushar.project_management.Model.Cycle;
import com.tushar.project_management.Model.Epic;
import com.tushar.project_management.Model.Tag;
import com.tushar.project_management.Model.Work;
import com.tushar.project_management.repository.CycleRepository;
import com.tushar.project_management.repository.EpicRepository;
import com.tushar.project_management.repository.WorkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {
    @Autowired
    CycleRepository cycleRepository;
    @Autowired
    EpicRepository epicRepository;
    @Autowired
    WorkRepository workRepository;

    @Override
    public void run(String... args) throws Exception {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");
        cycleRepository.deleteAll();
        epicRepository.deleteAll();
        workRepository.deleteAll();
        epicRepository.save(new Epic(null, "1", "Work 1", "No bruh", simpleDateFormat.parse("6-4-2020"), simpleDateFormat.parse("24-9-2020"), 60, null, null, null));
        epicRepository.save(new Epic(null, "1", "Work 2", "No bruh", simpleDateFormat.parse("6-3-2020"), simpleDateFormat.parse("10-5-2020"), 20, null, null, null));
        epicRepository.save(new Epic(null, "1", "Work 3", "No bruh", simpleDateFormat.parse("16-2-2020"), simpleDateFormat.parse("8-4-2020"), 90, null, null, null));
        cycleRepository.save(new Cycle(null, 1, "1", "To Do", "border-red-400", null));
        cycleRepository.save(new Cycle(null, 2, "1", "In Progress", "border-blue-400", null));
        cycleRepository.save(new Cycle(null, 3, "1", "Code Review", "border-blue-400", null));
        cycleRepository.save(new Cycle(null, 4, "1", "Done", "border-green-400", null));
        epicRepository.findAll().forEach((epic) -> {
            workRepository.save(new Work(null, epic.getId(), "1", "1", "Prepare Structural Documentation", "High", "lol", null, List.of(new Tag("Archetect"), new Tag("Developement")), null));
        });
        cycleRepository.findAll().forEach(cycle -> {
            workRepository.save(new Work(null, null, cycle.getId(), "1", "Prepare Structural Documentation", "High", "lol", 0, List.of(new Tag("Archetect"), new Tag("Developement")), null));
            workRepository.save(new Work(null, null, cycle.getId(), "1", "Prepare Structural Documentation", "Medium", "lol", 1, List.of(new Tag("Archetect"), new Tag("Developement")), null));
            workRepository.save(new Work(null, null, cycle.getId(), "1", "Prepare Structural Documentation", "Low", "lol", 2, List.of(new Tag("Archetect"), new Tag("Developement")), null));
        });
    }
}
