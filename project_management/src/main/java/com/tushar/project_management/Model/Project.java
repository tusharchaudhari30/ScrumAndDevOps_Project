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
public class Project {
    @Id
    String id;
    String projectType;
    String name;
    List<String> userIdList;
}
