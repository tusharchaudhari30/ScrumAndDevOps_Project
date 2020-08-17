package com.tushar.project_management.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@Document
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Epic {
    @Id
    String id;
    String projectId;
    String name;
    String Description;
    Date startingDate;
    Date endingDate;
    Integer progress;
    List<Tag> tags;
    List<String> usersID;
    List<Work> workList;
}
