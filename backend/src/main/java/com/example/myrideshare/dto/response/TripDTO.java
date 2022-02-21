package com.example.myrideshare.dto.response;

import com.example.myrideshare.model.PaymentStatus;
import com.example.myrideshare.model.TripStatus;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TripDTO {

    private String startLocation;

    private String endLocation;

    private LocalDateTime startTime;

    private LocalDateTime endTime;

    private float customerRate;

    private float driverRate;

    private PaymentStatus paymentStatus;

    private TripStatus tripStatus;

    private int price;

    private Long customerId;

    private Long driverId;

    private Long carId;

}
