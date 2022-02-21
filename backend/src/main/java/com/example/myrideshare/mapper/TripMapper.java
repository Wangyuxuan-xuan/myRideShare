package com.example.myrideshare.mapper;

import com.example.myrideshare.dto.request.TripPostDTO;
import com.example.myrideshare.dto.response.TripDTO;
import com.example.myrideshare.model.Car;
import com.example.myrideshare.model.Customer;
import com.example.myrideshare.model.Driver;
import com.example.myrideshare.model.Trip;
import com.example.myrideshare.repository.CarRepository;
import com.example.myrideshare.repository.CustomerRepository;
import com.example.myrideshare.repository.DriverRepository;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Mapper(componentModel = "spring")
public abstract class TripMapper {

    @Autowired
    DriverRepository driverRepository;

    @Autowired
    CarRepository carRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Mapping(target = "driverId", source = "driver.id")
    @Mapping(target = "customerId", source = "customer.id")
    @Mapping(target = "carId", source = "car.id")
    public abstract TripDTO entityToGetDTO(Trip trip);

    @Mapping(target = "driverId", source = "driver.id")
    @Mapping(target = "customerId", source = "customer.id")
    @Mapping(target = "carId", source = "car.id")
    public abstract List<TripDTO> entityToGetDTO(List<Trip> trip);

    @Mapping(target = "version", ignore = true)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "driver", source = "driverId")
    @Mapping(target = "customer", source = "customerId")
    @Mapping(target = "car", source = "carId")
    public abstract Trip tripPostDTOToEntity(TripPostDTO tripPostDTO);

    public Driver idToDriver(Long id){
        return driverRepository.getById(id);
    }

    public Customer idToCustomer(Long id){
        return customerRepository.getById(id);
    }

    public Car idToCar(Long id){
        return carRepository.getById(id);
    }

    @Mapping(target = "version", ignore = true)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "driver", source = "driverId")
    @Mapping(target = "customer", source = "customerId")
    @Mapping(target = "car", source = "carId")
    public abstract void updateEntityFromUpdateDTO(TripPostDTO tripPostDTO, @MappingTarget Trip trip);
}
