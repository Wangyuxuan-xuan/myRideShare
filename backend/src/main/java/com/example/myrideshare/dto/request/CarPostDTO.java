package com.example.myrideshare.dto.request;

import com.example.myrideshare.model.CarType;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class CarPostDTO {

    private String model;

    private String licensePlate;

    private CarType carType;

    private String carYear;

    private int numOfPassenger;

    private MultipartFile picture;

    private Long driverId;
}
