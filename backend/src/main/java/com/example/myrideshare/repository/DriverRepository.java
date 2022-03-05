package com.example.myrideshare.repository;

import com.example.myrideshare.model.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.validation.constraints.Email;
import java.util.Optional;

public interface DriverRepository extends JpaRepository<Driver,Long> {

    Optional<Driver> findDriverByEmail(@Email String email);
}
