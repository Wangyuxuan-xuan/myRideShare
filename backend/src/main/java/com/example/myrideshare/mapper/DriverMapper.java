package com.example.myrideshare.mapper;

import com.example.myrideshare.dto.request.DriverPostDTO;
import com.example.myrideshare.dto.request.DriverUpdateDTO;
import com.example.myrideshare.dto.response.DriverDTO;
import com.example.myrideshare.dto.response.DriverTripDTO;
import com.example.myrideshare.model.*;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring", uses = MultipartFileMapper.class)
public abstract class DriverMapper {

    @Autowired
    private MultipartFileMapper multipartFileMapper;

    private final LocalDate joinedDate = LocalDate.now();

    @Mapping(target = "driverId", source = "driver.id")
    public abstract DriverDTO entityToGetDTO(Driver driver);

    public abstract List<DriverDTO> entityToGetDTO(List<Driver> driver);

    public Driver postDTOToEntity(DriverPostDTO driverPostDTO){
        if (driverPostDTO == null){
            return null;
        }

        Driver driver = new Driver();
        driver.setName(driverPostDTO.getName());
        driver.setEmail(driverPostDTO.getEmail());
        driver.setPassword(driverPostDTO.getPassword());
        driver.setAddress("addr");
        driver.setPhone(driverPostDTO.getPhone());
        driver.setDriverLicenseNo("license no");
//        driver.setAvatar(multipartFileMapper.fileToByteArray(driverPostDTO.getAvatar()));
        driver.setAvatar(null);
        driver.setActive(false);
        driver.setJoinedDate(joinedDate);

        return driver;
    }


    @Mapping(target = "publicTrips", ignore = true)
    @Mapping(target = "version", ignore = true)
    @Mapping(target = "rate", ignore = true)
    @Mapping(target = "joinedDate", ignore = true)
    @Mapping(target = "id", source = "driverId")
    @Mapping(target = "cars", ignore = true)
    @Mapping(target = "active", ignore = true)
    public abstract void updateEntityFromUpdateDTO(DriverUpdateDTO driverUpdateDTO , @MappingTarget Driver driver);

    public DriverTrip DriverTripPostDTOToEntity(PublicTrip publicTrip,Driver driver){

        DriverTrip driverTrip = new DriverTrip();

        driverTrip.setDriver(driver);
        driverTrip.setPublicTrip(publicTrip);

        return driverTrip;
    }

    public DriverTripDTO entityToDriverTripDTO(DriverTrip driverTrip){

        DriverTripDTO driverTripDTO = new DriverTripDTO();

        driverTripDTO.setTripId(driverTrip.getPublicTrip().getId());

        List<Long> customerIds = new ArrayList<>();

        if (driverTrip.getCustomerTrips().isEmpty()){
            driverTripDTO.setCustomerIds(customerIds);
            return driverTripDTO;
        }

        for (CustomerTrip customerTrip : driverTrip.getCustomerTrips()){
            customerIds.add(customerTrip.getCustomer().getId());
        }

        driverTripDTO.setCustomerIds(customerIds);

        return driverTripDTO;
    }

    public List<DriverTripDTO> entityToDriverTripDTO(List<DriverTrip> driverTrips){

        List<DriverTripDTO> driverTripDTOS = new ArrayList<>();

        for (DriverTrip driverTrip : driverTrips){
            driverTripDTOS.add(entityToDriverTripDTO(driverTrip));
        }

        return driverTripDTOS;
    }
}
