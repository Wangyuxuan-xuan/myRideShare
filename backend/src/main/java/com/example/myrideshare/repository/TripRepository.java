package com.example.myrideshare.repository;

import com.example.myrideshare.model.Trip;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface TripRepository extends JpaRepository<Trip,Long> {

    List<Trip> findAllByStartLocationAndEndLocationAndStartTimeAfterOrderByStartTime(String startLocation, String endLocation, LocalDateTime startTime);

    List<Trip> findAllByStartLocationAndStartTimeAfterOrderByStartTime(String startLocation , LocalDateTime startTime);

    List<Trip> findAllByEndLocationAndStartTimeAfterOrderByStartTime(String endLocation, LocalDateTime startTime);

    List<Trip> findAllByStartTimeAfterOrderByStartTime(LocalDateTime startTime);

}
