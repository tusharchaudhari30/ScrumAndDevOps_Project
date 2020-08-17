package com.tushar.project_management.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Work {
    @Id
    String id;
    String epicId;
    String cycleId;
    String projectId;
    String name;
    String priority;
    String Description;
    Integer position;
    List<Tag> tags;
    List<String> usersID;
}
