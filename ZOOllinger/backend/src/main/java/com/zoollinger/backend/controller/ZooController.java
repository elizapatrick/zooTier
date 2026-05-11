package com.zoollinger.backend.controller;

import com.zoollinger.backend.model.Animal;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class ZooController {

    private final Map<String, Animal> animalsById = new LinkedHashMap<>(Map.of(
            "elephant", Animal.builder()
                    .id("elephant")
                    .name("African Elephant")
                    .habitat("Savannah")
                    .dangerLevel(3)
                    .feedingTimes(List.of("09:00", "13:30", "17:00"))
                    .build(),
            "parrot", Animal.builder()
                    .id("parrot")
                    .name("Macaw Parrot")
                    .habitat("Rainforest Aviary")
                    .dangerLevel(1)
                    .feedingTimes(List.of("08:15", "12:45", "16:15"))
                    .build(),
            "komodo-dragon", Animal.builder()
                    .id("komodo-dragon")
                    .name("Komodo Dragon")
                    .habitat("Dry Forest Enclosure")
                    .dangerLevel(5)
                    .feedingTimes(List.of("10:30", "15:30"))
                    .build(),
            "lion", Animal.builder()
                    .id("lion")
                    .name("African Lion")
                    .habitat("Grassland")
                    .dangerLevel(5)
                    .feedingTimes(List.of("10:00", "15:00"))
                    .build(),
            "penguin", Animal.builder()
                    .id("penguin")
                    .name("King Penguin")
                    .habitat("Arctic Exhibit")
                    .dangerLevel(1)
                    .feedingTimes(List.of("08:30", "14:00", "18:00"))
                    .build(),
            "gorilla", Animal.builder()
                    .id("gorilla")
                    .name("Mountain Gorilla")
                    .habitat("Rainforest")
                    .dangerLevel(4)
                    .feedingTimes(List.of("11:00", "16:30"))
                    .build(),
            "tiger", Animal.builder()
                    .id("tiger")
                    .name("Bengal Tiger")
                    .habitat("Jungle Habitat")
                    .dangerLevel(5)
                    .feedingTimes(List.of("09:45", "15:15"))
                    .build(),
            "polar-bear", Animal.builder()
                    .id("polar-bear")
                    .name("Polar Bear")
                    .habitat("Arctic Tundra")
                    .dangerLevel(4)
                    .feedingTimes(List.of("10:15", "17:30"))
                    .build()));

    @GetMapping("/branding")
    public ResponseEntity<Map<String, Object>> getBranding() {
        return ResponseEntity.ok(Map.of(
                "logo", Map.of(
                        "path", "/assets/logo-parrot.png",
                        "alt", "ZOOllinger Parrot Logo"),
                "liveStats", Map.of("guestCount", 1240)));
    }

    @GetMapping("/animals")
    public ResponseEntity<List<Animal>> getAnimals() {
        return ResponseEntity.ok(animalsById.values().stream().toList());
    }

    @GetMapping("/animals/{id}")
    public ResponseEntity<Animal> getAnimal(@PathVariable String id) {
        Animal animal = animalsById.get(id);
        if (animal == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(animal);
    }

    @GetMapping("/tickets")
    public ResponseEntity<Map<String, Object>> getTickets() {
        return ResponseEntity.ok(Map.of(
                "currency", "USD",
                "lastUpdated", "2026-05-11",
                "tickets", List.of(
                        Map.of("type", "adult", "price", 29.99, "available", true),
                        Map.of("type", "child", "price", 16.99, "available", true),
                        Map.of("type", "senior", "price", 19.99, "available", true),
                        Map.of("type", "family", "price", 79.99, "available", false))));
    }
}
