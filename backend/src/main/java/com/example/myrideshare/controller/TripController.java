package com.example.myrideshare.controller;

import com.example.myrideshare.dto.request.TripPostDTO;
import com.example.myrideshare.dto.response.TripDTO;
import com.example.myrideshare.mapper.TripMapper;
import com.example.myrideshare.model.Car;
import com.example.myrideshare.model.Customer;
import com.example.myrideshare.model.Driver;
import com.example.myrideshare.model.Trip;
import com.example.myrideshare.service.TripService;
import lombok.AllArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("api/trips")
@AllArgsConstructor
@Validated
public class TripController {

    private final TripService tripService;
    private final TripMapper mapper;
    @GetMapping("/trips/all")
    @CrossOrigin(origins = "*")
    public List<TripDTO> getAllTrips(){
        return mapper.entityToGetDTO(tripService.getAllTrips());
    }

    /**
     * Annotation @RequestBody is only for put and post , for get we need @RequestParam
     * @param departure
     * @param destination
     * @param dateTime   we need to use @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) to convert the string
     *                   being sent from frontend to aa LocalDateTime object
     * @return
     */
    @GetMapping("/trips")
    @CrossOrigin(origins = "*")
    public List<TripDTO> searchTrips(@RequestParam String departure,
                                     @RequestParam String destination ,
                                     @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime dateTime){

        List<Trip> trips = tripService.searchTrips(departure,
                destination,
                dateTime);
        return mapper.entityToGetDTO(trips);
    }

    @GetMapping("/{tripId}")
    public TripDTO getTripById(@PathVariable Long tripId){

        Trip trip = tripService.getTripById(tripId);
        Driver driver = trip.getDriver();
        Car car = trip.getCar();
        Customer customer = trip.getCustomer();
        return mapper.entityToGetDTO(trip,driver,car,customer);
    }

    //need to add request body
    @PostMapping(value = "/create")
    public TripDTO createTrip(@RequestBody TripPostDTO tripPostDTO){

        Trip trip = mapper.tripPostDTOToEntity(tripPostDTO);
        Trip created = tripService.createTrip(trip);

        Driver driver = created.getDriver();
        Car car = created.getCar();
        Customer customer = trip.getCustomer();
        return mapper.entityToGetDTO(created,driver,car,customer);
    }

    @DeleteMapping("/{tripId}")
    public void deleteByTripId(@PathVariable Long tripId){
        tripService.deleteTripById(tripId);
    }

    @PutMapping("/update/{tripId}")
    public void updateCar(@RequestBody TripPostDTO dto,@PathVariable Long tripId){
        Trip trip = tripService.getTripById(tripId);
        mapper.updateEntityFromUpdateDTO(dto,trip);

        tripService.updateTrip(trip);
    }

}
