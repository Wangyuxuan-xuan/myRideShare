package com.example.myrideshare.dto.request;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TripSearchRequestDTO {

    private String departure;

    private String destination;

    private LocalDateTime dateTime;
}
