package com.tushar.project_management.component;

import com.tushar.project_management.Model.*;
import com.tushar.project_management.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {
    final
    CycleRepository cycleRepository;
    final
    EpicRepository epicRepository;
    final
    WorkRepository workRepository;
    final
    UserRepository userRepository;
    final
    ProjectRepository projectRepository;

    public DataLoader(CycleRepository cycleRepository, EpicRepository epicRepository, WorkRepository workRepository, ProjectRepository projectRepository, UserRepository userRepository) {
        this.cycleRepository = cycleRepository;
        this.epicRepository = epicRepository;
        this.workRepository = workRepository;
        this.projectRepository = projectRepository;
        this.userRepository = userRepository;
    }


    @Override
    public void run(String... args) throws Exception {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");
        projectRepository.deleteAll();
        cycleRepository.deleteAll();
        epicRepository.deleteAll();
        workRepository.deleteAll();
        userRepository.deleteAll();
        userRepository.save(new User(null,"user","user","/tushar.webp",null));
        User user=userRepository.findByEmail("user");
        projectRepository.save(new Project(null,"kanban","Project 1", Collections.singletonList(user.getId())));
        projectRepository.save(new Project(null,"scrum","Project 2", Collections.singletonList(user.getId())));
        List<Project> projects=projectRepository.findAllByUserIdList(user.getId());
        var project=projects.get(0);
        user.setProjectIdList(Collections.singletonList(project.getId()));
        userRepository.save(user);
        epicRepository.save(new Epic(null, project.getId(), "Work 1", "No bruh", simpleDateFormat.parse("6-4-2020"), simpleDateFormat.parse("24-9-2020"), 60, null, Collections.singletonList(user.getId()), null));
        epicRepository.save(new Epic(null, project.getId(), "Work 2", "No bruh", simpleDateFormat.parse("6-3-2020"), simpleDateFormat.parse("10-5-2020"), 20, null, Collections.singletonList(user.getId()), null));
        epicRepository.save(new Epic(null, project.getId(), "Work 3", "No bruh", simpleDateFormat.parse("16-2-2020"), simpleDateFormat.parse("8-4-2020"), 90, null, Collections.singletonList(user.getId()), null));
        cycleRepository.save(new Cycle(null, 1, project.getId(), "To Do", "border-red-400", null));
        cycleRepository.save(new Cycle(null, 2, project.getId(), "In Progress", "border-blue-400", null));
        cycleRepository.save(new Cycle(null, 3, project.getId(), "Code Review", "border-blue-400", null));
        cycleRepository.save(new Cycle(null, 4, project.getId(), "Done", "border-green-400", null));
        List<Epic> epicList = epicRepository.findAll();
        List<Cycle> cycleList = cycleRepository.findAll();
        for (int i = 0; i < 3; i++) {
            workRepository.save(new Work(null, epicList.get(i).getId(), cycleList.get(i).getId(), "1", "Prepare Structural Documentation", "Low", "lol", 0, List.of(new Tag("Archetect"), new Tag("Developement")), null));
            workRepository.save(new Work(null, epicList.get(i).getId(), cycleList.get(i).getId(), "1", "Prepare Structural Documentation", "Medium", "lol", 1, List.of(new Tag("Archetect"), new Tag("Developement")), null));
            workRepository.save(new Work(null, epicList.get(i).getId(), cycleList.get(i).getId(), "1", "Prepare Structural Documentation", "High", "lol", 2, List.of(new Tag("Archetect"), new Tag("Developement")), null));
        }
    }
}
