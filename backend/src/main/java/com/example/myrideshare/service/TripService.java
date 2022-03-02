package com.example.myrideshare.service;

import com.example.myrideshare.model.Trip;
import com.example.myrideshare.repository.TripRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TripService {

    private final TripRepository tripRepository;

    public List<Trip> getAllTrips(){
        return tripRepository.findAll();
    }

    public List<Trip> searchTrips(String departure , String destination , LocalDateTime startTime){

        List<Trip> trips ;
        if (startTime == null ){
            startTime = LocalDateTime.now();
        }

        if(departure == null){
            departure = "";
        }
        if(destination == null){
            destination = "";
        }
        if(departure.isBlank() && destination.isBlank()){
            trips = tripRepository.findAllByStartTimeAfterOrderByStartTime(startTime);
            System.out.println(trips);
            return trips;
        }else {

            if (departure.isBlank()){
                trips = tripRepository.findAllByEndLocationAndStartTimeAfterOrderByStartTime(destination,startTime);
                System.out.println(trips);
                return trips;
            }
            if (destination.isBlank()){
                trips = tripRepository.findAllByStartLocationAndStartTimeAfterOrderByStartTime(departure,startTime);
                System.out.println(trips);
                return trips;
            }
        }


        trips = tripRepository.findAllByStartLocationAndEndLocationAndStartTimeAfterOrderByStartTime(departure,destination,startTime);
        System.out.println(trips);
        return trips;
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
