package com.example.myrideshare.dto.request;

import com.sun.istack.NotNull;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class DriverPostDTO {

    @NotBlank
    private String name;

    @Email
    private String email;

    @NotBlank
    @Size(min = 8)
    private String password;

    @NotNull
    @Size(min = 6)
    private String phone;

}
