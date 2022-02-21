package com.example.myrideshare.service;

import com.example.myrideshare.model.Driver;
import com.example.myrideshare.repository.DriverRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DriverService {

    private final DriverRepository driverRepository;

    public List<Driver> getAllDrivers(){
        return driverRepository.findAll();
    }

    public Driver getDriverById(Long id){
        return driverRepository.getById(id);
    }

    @Transactional
    public Driver createDriver(Driver driver){
        return driverRepository.save(driver);
    }

    @Transactional
    public void deleteDriverById(Long id){
        driverRepository.deleteById(id);
    }

    @Transactional
    public Driver updateDriver(Driver driver){
        return driverRepository.save(driver);
    }
}
