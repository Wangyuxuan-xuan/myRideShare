package com.example.myrideshare.controller;

import com.example.myrideshare.dto.request.AuthRequestDTO;
import com.example.myrideshare.dto.response.CustomerDTO;
import com.example.myrideshare.dto.response.DriverDTO;
import com.example.myrideshare.mapper.CustomerMapper;
import com.example.myrideshare.mapper.DriverMapper;
import com.example.myrideshare.model.Customer;
import com.example.myrideshare.model.Driver;
import com.example.myrideshare.service.CustomerService;
import com.example.myrideshare.service.DriverService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/auth")
@AllArgsConstructor
public class AuthenticationController {

    private final DriverService driverService;
    private final CustomerService customerService;

    private final DriverMapper driverMapper;
    private final CustomerMapper customerMapper;

    @PostMapping("login/driver")
    @CrossOrigin(origins = "*")
    public DriverDTO loginAsDriver(@RequestBody AuthRequestDTO request){
        Driver driver = driverService.authenticateForDriver(request.getEmail(), request.getPassword());

        return driverMapper.entityToGetDTO(driver);
    }

    @PostMapping("login/customer")
    @CrossOrigin(origins = "*")
    public CustomerDTO loginAsCustomer(@RequestBody AuthRequestDTO request){
        Customer customer = customerService.authenticateForCustomer(request.getEmail(), request.getPassword());

        return customerMapper.entityToGetDTO(customer);
    }


}
