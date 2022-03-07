package com.example.myrideshare.service;

import com.example.myrideshare.model.Driver;
import com.example.myrideshare.model.DriverTrip;
import com.example.myrideshare.model.PublicTrip;
import com.example.myrideshare.repository.DriverRepository;
import com.example.myrideshare.repository.DriverTripRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DriverService {

    private final DriverRepository driverRepository;
    private final DriverTripRepository driverTripRepository;

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

    public Driver authenticateForDriver(String email , String password){
        Driver driver = driverRepository.findDriverByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException("Driver not exist!"));

        if (!driver.isActive()){
            throw new IllegalStateException("driver is not active");
        }

        if (!driver.getPassword().equals(password)){
            throw new IllegalArgumentException("wrong email or password");
        }

        return driver;
    }

    public DriverTrip getDriverTripByDriverId(Driver driver){

        return driverTripRepository.getByDriver(driver);
    }

    public DriverTrip createDriverTrip(DriverTrip driverTrip){
        return driverTripRepository.save(driverTrip);
    }
}
