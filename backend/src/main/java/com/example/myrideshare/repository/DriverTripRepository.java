package com.example.myrideshare.repository;

import com.example.myrideshare.model.Driver;
import com.example.myrideshare.model.DriverTrip;
import com.example.myrideshare.model.PublicTrip;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DriverTripRepository extends JpaRepository<DriverTrip,Long> {

    List<DriverTrip> getAllByDriver(Driver driver);

    DriverTrip getByPublicTrip(PublicTrip publicTrip);
}
