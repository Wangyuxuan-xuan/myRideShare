package com.example.myrideshare.repository;

import com.example.myrideshare.model.CustomerTrip;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerTripRepository extends JpaRepository<CustomerTrip,Long> {
}
