package com.example.myrideshare.repository;

import com.example.myrideshare.model.PublicTrip;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface TripRepository extends JpaRepository<PublicTrip,Long> {

    List<PublicTrip> findAllByStartLocationAndEndLocationAndStartTimeAfterOrderByStartTime(String startLocation, String endLocation, LocalDateTime startTime);

    List<PublicTrip> findAllByStartLocationAndStartTimeAfterOrderByStartTime(String startLocation , LocalDateTime startTime);

    List<PublicTrip> findAllByEndLocationAndStartTimeAfterOrderByStartTime(String endLocation, LocalDateTime startTime);

    List<PublicTrip> findAllByStartTimeAfterOrderByStartTime(LocalDateTime startTime);

}
