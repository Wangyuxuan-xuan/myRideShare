package com.example.myrideshare.controller;

import com.example.myrideshare.dto.request.DriverPostDTO;
import com.example.myrideshare.dto.request.DriverUpdateDTO;
import com.example.myrideshare.dto.response.DriverDTO;
import com.example.myrideshare.mapper.DriverMapper;
import com.example.myrideshare.model.Driver;
import com.example.myrideshare.service.DriverService;
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

    private final DriverService service;
    private final DriverMapper mapper;

    @GetMapping("/drivers")
    @CrossOrigin(origins = "*")
    public List<DriverDTO> getAllDrivers(){
        return mapper.entityToGetDTO(service.getAllDrivers());
    }

    @GetMapping("/{driverId}")
    @CrossOrigin(origins = "*")
    public DriverDTO getDriverById(@PathVariable Long driverId){
        return mapper.entityToGetDTO(service.getDriverById(driverId));
    }

    @PostMapping(value = "/create" ,consumes = { MediaType.MULTIPART_FORM_DATA_VALUE } )
    @CrossOrigin(origins = "*")
    public DriverDTO createDriver(DriverPostDTO driverPostDTO){
        Driver driver = mapper.postDTOToEntity(driverPostDTO);
        Driver created = service.createDriver(driver);

        return mapper.entityToGetDTO(created);
    }

    @DeleteMapping("/{driverId}")
    @CrossOrigin(origins = "*")
    public void deleteByDriverId(@PathVariable Long driverId){
        service.deleteDriverById(driverId);
    }

    @PutMapping("/update")
    @CrossOrigin(origins = "*")
    public void updateDriver(@RequestBody DriverUpdateDTO dto){
        Driver driver = service.getDriverById(dto.getDriverId());
        mapper.updateEntityFromUpdateDTO(dto,driver);

        service.updateDriver(driver);
    }
}
