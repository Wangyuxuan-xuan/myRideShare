package com.example.myrideshare.dto.request;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Email;

@Data
public class DriverPostDTO {

    private String name;

    @Email
    private String email;

    private String password;

    private String address;

    private String phone;

    private String driverLicenseNo;

    private MultipartFile avatar;
}
