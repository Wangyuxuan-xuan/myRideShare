package com.example.myrideshare.repository;

import com.example.myrideshare.model.Trip;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TripRepository extends JpaRepository<Trip,Long> {
}
