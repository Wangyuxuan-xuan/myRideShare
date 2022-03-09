package com.example.myrideshare.service;

import com.example.myrideshare.model.PublicTrip;
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

    public List<PublicTrip> getAllTrips(){
        return tripRepository.findAll();
    }

    public List<PublicTrip> searchTrips(String departure , String destination , LocalDateTime startTime){

        List<PublicTrip> publicTrips;
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
            publicTrips = tripRepository.findAllByStartTimeAfterOrderByStartTime(startTime);
            System.out.println(publicTrips);
            return publicTrips;
        }else {

            if (departure.isBlank()){
                publicTrips = tripRepository.findAllByEndLocationAndStartTimeAfterOrderByStartTime(destination,startTime);
                System.out.println(publicTrips);
                return publicTrips;
            }
            if (destination.isBlank()){
                publicTrips = tripRepository.findAllByStartLocationAndStartTimeAfterOrderByStartTime(departure,startTime);
                System.out.println(publicTrips);
                return publicTrips;
            }
        }


        publicTrips = tripRepository.findAllByStartLocationAndEndLocationAndStartTimeAfterOrderByStartTime(departure,destination,startTime);
        System.out.println(publicTrips);
        return publicTrips;
    }


    public PublicTrip getTripById(Long id){
        return tripRepository.getById(id);
    }

    @Transactional
    public PublicTrip createTrip(PublicTrip publicTrip){
        publicTrip.setStartLocation(publicTrip.getStartLocation().toLowerCase());
        publicTrip.setEndLocation(publicTrip.getEndLocation().toLowerCase());
        return tripRepository.save(publicTrip);
    }

    @Transactional
    public void deleteTripById(Long id){
        tripRepository.deleteById(id);
    }

    @Transactional
    public PublicTrip updateTrip(PublicTrip publicTrip){
        return tripRepository.save(publicTrip);
    }
}
