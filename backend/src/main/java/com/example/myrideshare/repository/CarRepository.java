package com.example.myrideshare.repository;

import com.example.myrideshare.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car,Long> {
}
