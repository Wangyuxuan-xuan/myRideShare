package com.example.myrideshare.dto.response;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

@Data
public class CustomerDTO {

    private Long customerId;

    private String name;

    private String email;

    private String password;

    private String address;

    private String phone;

    private LocalDate joinedDate;

    private float rate;

    private boolean active;
//
//    private MultipartFile avatar;
}
