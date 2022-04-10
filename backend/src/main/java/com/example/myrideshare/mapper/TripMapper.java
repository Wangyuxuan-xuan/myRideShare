package com.example.myrideshare.mapper;

import com.example.myrideshare.dto.request.TripPostDTO;
import com.example.myrideshare.dto.request.TripUpdateDTO;
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

    public TripDTO entityToGetDTO(PublicTrip publicTrip, Driver driver, Car car) {
        if ( publicTrip == null && driver == null && car == null ) {
            return null;
        }

        TripDTO tripDTO = new TripDTO();

        if ( publicTrip != null ) {
            tripDTO.setTripId( publicTrip.getId() );
            tripDTO.setStartLocation( publicTrip.getStartLocation().substring(0,1).toUpperCase() + publicTrip.getStartLocation().substring(1) );
            tripDTO.setEndLocation( publicTrip.getEndLocation().substring(0,1).toUpperCase() + publicTrip.getEndLocation().substring(1) );
            tripDTO.setStartTime( publicTrip.getStartTime() );
            tripDTO.setEndTime( publicTrip.getEndTime() );
            tripDTO.setCustomerRate( publicTrip.getCustomerRate() );
            tripDTO.setDriverRate( publicTrip.getDriverRate() );
            tripDTO.setPaymentStatus( publicTrip.getPaymentStatus() );
            tripDTO.setTripStatus( publicTrip.getTripStatus() );
            tripDTO.setPrice( publicTrip.getPrice() );
            tripDTO.setMaxNumOfPassengers( publicTrip.getMaxNumOfPassengers() );
            tripDTO.setDescription( publicTrip.getDescription() );
        }
        if ( driver != null ) {
            tripDTO.setDriverPhone( driver.getPhone() );
            tripDTO.setDriverName( driver.getName() );
            tripDTO.setDriverJoinedDate( driver.getJoinedDate() );
            tripDTO.setDriverCurrentRate( driver.getRate() );
            tripDTO.setDriverId( driver.getId() );
        }
        if ( car != null ) {
            tripDTO.setCarNumOfPassenger( car.getNumOfPassenger() );
            tripDTO.setCarModel( car.getModel() );
            tripDTO.setCarLicensePlate( car.getLicensePlate() );
            tripDTO.setCarCarType( car.getCarType() );
            tripDTO.setCarId( car.getId() );
        }

        return tripDTO;

    }

    public List<TripDTO> entityToGetDTO(List<PublicTrip> publicTrips){

        List<TripDTO> list = new ArrayList<TripDTO>( publicTrips.size() );

        for ( PublicTrip publicTrip : publicTrips) {
            Driver driver = publicTrip.getDriver();
            Car car = publicTrip.getCar();

            list.add( entityToGetDTO(publicTrip,driver,car) );
        }

        return list;
    }

    @Mapping(target = "tripStatus", ignore = true)
    @Mapping(target = "paymentStatus", ignore = true)
    @Mapping(target = "driverRate", ignore = true)
    @Mapping(target = "customerRate", ignore = true)
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
    public abstract void updateEntityFromUpdateDTO(TripUpdateDTO tripUpdateDTO, @MappingTarget PublicTrip publicTrip);
}
