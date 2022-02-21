package com.example.myrideshare.dto.request;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class CustomerPostDTO {

    private String name;

    private String email;

    private String password;

    private String address;

    private String phone;

    private MultipartFile avatar;
}
