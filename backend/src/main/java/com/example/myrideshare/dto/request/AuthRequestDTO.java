package com.example.myrideshare.dto.request;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
public class AuthRequestDTO {

    @NotNull
    @Email
    private String email;

    @NotBlank
    private String password;

}
