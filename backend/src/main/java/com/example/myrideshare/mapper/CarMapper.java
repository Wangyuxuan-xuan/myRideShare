package com.example.myrideshare.mapper;

import com.example.myrideshare.dto.request.CarPostDTO;
import com.example.myrideshare.dto.request.CarUpdateDTO;
import com.example.myrideshare.dto.response.CarDTO;
import com.example.myrideshare.model.Car;
import com.example.myrideshare.model.Driver;
import com.example.myrideshare.repository.DriverRepository;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Mapper(componentModel = "spring", uses = MultipartFileMapper.class)
public abstract class CarMapper {

    @Autowired
    DriverRepository driverRepository;

    @Mapping(target = "driverId", source = "driver.id")
    public abstract CarDTO entityToGetDTO(Car car);

    @Mapping(target = "driverId", source = "driver.id")
    public abstract List<CarDTO> entityToGetDTO(List<Car> car);

    @Mapping(target = "version", ignore = true)
    @Mapping(target = "trips",ignore = true)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "driver", source = "driverId")
    public abstract Car postDTOtoEntity(CarPostDTO carPostDTO);

    public Driver idToDriver(Long id){
        return driverRepository.getById(id);
    }

    @Mapping(target = "version", ignore = true)
    @Mapping(target = "trips", ignore = true)
    @Mapping(target = "id", source = "carId")
    @Mapping(target = "driver", source = "driverId")
    public abstract void updateEntityFromUpdateDTO(CarUpdateDTO carUpdateDTO, @MappingTarget Car car);
}
