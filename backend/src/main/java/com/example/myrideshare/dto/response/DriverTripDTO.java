package com.example.myrideshare.dto.response;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class DriverTripDTO {

    private Long tripId;

    private List<CustomerDTO> customerDTOS = new ArrayList<>();

}
