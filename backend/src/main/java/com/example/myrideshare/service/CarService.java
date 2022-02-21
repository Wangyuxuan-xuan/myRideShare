package com.example.myrideshare.service;

import com.example.myrideshare.model.Car;
import com.example.myrideshare.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CarService {

    private final CarRepository carRepository;

    public List<Car> getAllCars(){
        return carRepository.findAll();
    }

    public Car getCarById(Long id){
        return carRepository.getById(id);
    }

    @Transactional
    public Car createCar(Car car){
        return carRepository.save(car);
    }

    @Transactional
    public void deleteCarById(Long id){
        carRepository.deleteById(id);
    }

    @Transactional
    public Car updateCar(Car car){
        return carRepository.save(car);
    }
}
