package com.zoollinger.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Animal {
    private String id;
    private String name;
    private String habitat;
    private int dangerLevel;
    private List<String> feedingTimes;
}
