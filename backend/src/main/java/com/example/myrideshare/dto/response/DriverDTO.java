package com.example.myrideshare.dto.response;

import lombok.Data;

import javax.validation.constraints.Email;
import java.time.LocalDate;

@Data
public class DriverDTO {

    private String name;

    @Email
    private String email;

    private String password;

    private String address;

    private String phone;

    private LocalDate joinedDate;

    private float rate;

    private boolean active;

    private String driverLicenseNo;

}
