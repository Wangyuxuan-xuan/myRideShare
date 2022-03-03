package com.example.myrideshare.mapper;

import com.example.myrideshare.dto.request.TripPostDTO;
import com.example.myrideshare.dto.response.TripDTO;
import com.example.myrideshare.model.Car;
import com.example.myrideshare.model.Customer;
import com.example.myrideshare.model.Driver;
import com.example.myrideshare.model.PublicTrip;
import com.example.myrideshare.repository.CarRepository;
import com.example.myrideshare.repository.CustomerRepository;
import com.example.myrideshare.repository.DriverRepository;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public abstract class TripMapper {

    @Autowired
    DriverRepository driverRepository;

    @Autowired
    CarRepository carRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Mapping(target = "driverPhone", source = "driver.phone")
    @Mapping(target = "driverName", source = "driver.name")
    @Mapping(target = "driverJoinedDate", source = "driver.joinedDate")
    @Mapping(target = "driverCurrentRate", source = "driver.rate")
    @Mapping(target = "carNumOfPassenger", source = "car.numOfPassenger")
    @Mapping(target = "carModel", source = "car.model")
    @Mapping(target = "carLicensePlate", source = "car.licensePlate")
    @Mapping(target = "carCarType", source = "car.carType")
    @Mapping(target = "driverId", source = "driver.id")
    @Mapping(target = "carId", source = "car.id")
    public abstract TripDTO entityToGetDTO(PublicTrip publicTrip, Driver driver, Car car);

    public List<TripDTO> entityToGetDTO(List<PublicTrip> publicTrips){

        List<TripDTO> list = new ArrayList<TripDTO>( publicTrips.size() );

        for ( PublicTrip publicTrip : publicTrips) {
            Driver driver = publicTrip.getDriver();
            Car car = publicTrip.getCar();

            list.add( entityToGetDTO(publicTrip,driver,car) );
        }

        return list;
    }

    @Mapping(target = "version", ignore = true)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "driver", source = "driverId")
    @Mapping(target = "car", source = "carId")
    public abstract PublicTrip tripPostDTOToEntity(TripPostDTO tripPostDTO);

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
    @Mapping(target = "car", source = "carId")
    public abstract void updateEntityFromUpdateDTO(TripPostDTO tripPostDTO, @MappingTarget PublicTrip publicTrip);
}
