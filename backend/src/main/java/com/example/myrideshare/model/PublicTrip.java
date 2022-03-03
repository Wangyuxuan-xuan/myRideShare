package com.example.myrideshare.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Getter
@Setter
@NoArgsConstructor
public class PublicTrip extends BaseEntity{

    private String startLocation;

    private String endLocation;

    private LocalDateTime startTime;

    private LocalDateTime endTime;

    private float customerRate;

    private float driverRate;

    @Enumerated(value = EnumType.STRING)
    private PaymentStatus paymentStatus;

    @Enumerated(EnumType.STRING)
    private TripStatus tripStatus;

    private int price;

    @ManyToOne(targetEntity = Driver.class , fetch = FetchType.LAZY)
    @JoinColumn(name = "driver_id")
    private Driver driver;

    @ManyToOne(targetEntity = Car.class , fetch = FetchType.LAZY)
    @JoinColumn(name = "car_id")
    private Car car;
}
