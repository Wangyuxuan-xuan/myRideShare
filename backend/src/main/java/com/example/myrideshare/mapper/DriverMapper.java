package com.example.myrideshare.mapper;

import com.example.myrideshare.dto.request.DriverPostDTO;
import com.example.myrideshare.dto.request.DriverUpdateDTO;
import com.example.myrideshare.dto.response.DriverDTO;
import com.example.myrideshare.model.Driver;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.util.List;

@Mapper(componentModel = "spring", uses = MultipartFileMapper.class)
public abstract class DriverMapper {

    @Autowired
    private MultipartFileMapper multipartFileMapper;

    private final LocalDate joinedDate = LocalDate.now();

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
        driver.setAddress(driverPostDTO.getAddress());
        driver.setPhone(driverPostDTO.getPhone());
        driver.setDriverLicenseNo(driverPostDTO.getDriverLicenseNo());
        driver.setAvatar(multipartFileMapper.fileToByteArray(driverPostDTO.getAvatar()));

        driver.setActive(false);
        driver.setJoinedDate(joinedDate);

        return driver;
    }


    @Mapping(target = "version", ignore = true)
    @Mapping(target = "trips", ignore = true)
    @Mapping(target = "rate", ignore = true)
    @Mapping(target = "joinedDate", ignore = true)
    @Mapping(target = "id", source = "driverId")
    @Mapping(target = "cars", ignore = true)
    @Mapping(target = "active", ignore = true)
    public abstract void updateEntityFromUpdateDTO(DriverUpdateDTO driverUpdateDTO , @MappingTarget Driver driver);
}