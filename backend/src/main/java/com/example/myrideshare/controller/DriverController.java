package com.example.myrideshare.controller;

import com.example.myrideshare.dto.request.DriverPostDTO;
import com.example.myrideshare.dto.request.DriverTripPostDTO;
import com.example.myrideshare.dto.request.DriverUpdateDTO;
import com.example.myrideshare.dto.response.DriverDTO;
import com.example.myrideshare.mapper.DriverMapper;
import com.example.myrideshare.model.Driver;
import com.example.myrideshare.model.DriverTrip;
import com.example.myrideshare.model.PublicTrip;
import com.example.myrideshare.service.DriverService;
import com.example.myrideshare.service.TripService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/drivers")
@AllArgsConstructor
@Validated
public class DriverController {

    private final DriverService driverService;
    private final DriverMapper mapper;

    private final TripService tripService;

    @GetMapping("/drivers")
    @CrossOrigin(origins = "*")
    public List<DriverDTO> getAllDrivers(){
        return mapper.entityToGetDTO(driverService.getAllDrivers());
    }

    @GetMapping("/{driverId}")
    @CrossOrigin(origins = "*")
    public DriverDTO getDriverById(@PathVariable Long driverId){
        return mapper.entityToGetDTO(driverService.getDriverById(driverId));
    }

    @PostMapping(value = "/create" ,consumes = { MediaType.MULTIPART_FORM_DATA_VALUE } )
    @CrossOrigin(origins = "*")
    public DriverDTO createDriver(DriverPostDTO driverPostDTO){
        Driver driver = mapper.postDTOToEntity(driverPostDTO);
        Driver created = driverService.createDriver(driver);

        return mapper.entityToGetDTO(created);
    }

    @DeleteMapping("/{driverId}")
    @CrossOrigin(origins = "*")
    public void deleteByDriverId(@PathVariable Long driverId){
        driverService.deleteDriverById(driverId);
    }

    @PutMapping("/update")
    @CrossOrigin(origins = "*")
    public void updateDriver(@RequestBody DriverUpdateDTO dto){
        Driver driver = driverService.getDriverById(dto.getDriverId());
        mapper.updateEntityFromUpdateDTO(dto,driver);

        driverService.updateDriver(driver);
    }

    @PostMapping(value = "/create/driverTrip")
    @CrossOrigin(origins = "*")
    public void createDriverTrip(@RequestBody DriverTripPostDTO driverTripPostDTO){

        PublicTrip trip = tripService.getTripById(driverTripPostDTO.getTripId());
        DriverTrip driverTrip = mapper.DriverTripPostDTOToEntity(trip,trip.getDriver());

        driverService.createDriverTrip(driverTrip);
    }
}
