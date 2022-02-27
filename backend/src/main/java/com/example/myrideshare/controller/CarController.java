package com.example.myrideshare.controller;

import com.example.myrideshare.dto.request.CarPostDTO;
import com.example.myrideshare.dto.request.CarUpdateDTO;
import com.example.myrideshare.dto.response.CarDTO;
import com.example.myrideshare.mapper.CarMapper;
import com.example.myrideshare.model.Car;
import com.example.myrideshare.service.CarService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/cars")
@AllArgsConstructor
@Validated
public class CarController {

    private final CarService service;
    private final CarMapper mapper;

    @GetMapping("/drivers")
    @CrossOrigin(origins = "*")
    public List<CarDTO> getAllCars(){
        return mapper.entityToGetDTO(service.getAllCars());
    }

    @GetMapping("/{carId}")
    public CarDTO getCarById(@PathVariable Long carId){
        return mapper.entityToGetDTO(service.getCarById(carId));
    }

    @PostMapping(value = "/create" ,consumes = { MediaType.MULTIPART_FORM_DATA_VALUE } )
    public CarDTO createCar(CarPostDTO carPostDTO){

        Car car = mapper.postDTOtoEntity(carPostDTO);
        Car created = service.createCar(car);

        return mapper.entityToGetDTO(created);
    }

    @DeleteMapping("/{carId}")
    public void deleteByCarId(@PathVariable Long carId){
        service.deleteCarById(carId);
    }

    @PutMapping("/update")
    public void updateCar(@RequestBody CarUpdateDTO dto){


        Car car = service.getCarById(dto.getCarId());
        mapper.updateEntityFromUpdateDTO(dto,car);

        service.updateCar(car);
    }
}
