package com.example.myrideshare.service;

import com.example.myrideshare.model.Trip;
import com.example.myrideshare.repository.TripRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TripService {

    private final TripRepository tripRepository;

    public List<Trip> getAllTrips(){
        return tripRepository.findAll();
    }

    public Trip getTripById(Long id){
        return tripRepository.getById(id);
    }

    @Transactional
    public Trip createTrip(Trip trip){
        return tripRepository.save(trip);
    }

    @Transactional
    public void deleteTripById(Long id){
        tripRepository.deleteById(id);
    }

    @Transactional
    public Trip updateTrip(Trip trip){
        return tripRepository.save(trip);
    }
}
