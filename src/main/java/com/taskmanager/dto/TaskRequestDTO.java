package com.taskmanager.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;


@Data
public class TaskRequestDTO {
@NotBlank (message = "title can not be empty")
    private String title;
    private String description;

    private  boolean completed;

}
