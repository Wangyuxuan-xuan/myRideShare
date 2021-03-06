package com.example.myrideshare.dto.response;

import com.example.myrideshare.model.CarType;
import com.example.myrideshare.model.PaymentStatus;
import com.example.myrideshare.model.TripStatus;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class TripDTO {

    private Long tripId;

    private String startLocation;

    private String endLocation;

    private LocalDateTime startTime;

    private LocalDateTime endTime;

    private float customerRate;

    private float driverRate;

    private PaymentStatus paymentStatus;

    private TripStatus tripStatus;

    private int price;

    private Long driverId;

    private Long carId;

    private int maxNumOfPassengers;

    private String description;

    private String driverName;

    private String driverPhone;

    private LocalDate driverJoinedDate;

    private float driverCurrentRate;

    private int carNumOfPassenger;

    private String carModel;

    private String carLicensePlate;

    private CarType carCarType;

}
