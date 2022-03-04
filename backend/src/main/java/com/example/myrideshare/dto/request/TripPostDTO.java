package com.example.myrideshare.dto.request;

import com.example.myrideshare.model.PaymentStatus;
import com.example.myrideshare.model.TripStatus;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Data
public class TripPostDTO {

    private String startLocation;

    private String endLocation;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime startTime;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime endTime;

    private int price;

    private Long driverId;

    private Long carId;
}
