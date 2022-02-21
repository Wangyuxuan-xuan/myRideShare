package com.example.myrideshare.dto.response;

import com.example.myrideshare.model.CarType;
import lombok.Data;

@Data
public class CarDTO {

    private String model;

    private String licensePlate;

    private CarType carType;

    private String carYear;

    private int numOfPassenger;

    private Long driverId;

}
