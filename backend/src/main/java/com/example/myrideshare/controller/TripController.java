package com.example.myrideshare.controller;

import com.example.myrideshare.dto.request.TripPostDTO;
import com.example.myrideshare.dto.request.TripUpdateDTO;
import com.example.myrideshare.dto.response.TripDTO;
import com.example.myrideshare.mapper.TripMapper;
import com.example.myrideshare.model.Car;
import com.example.myrideshare.model.Customer;
import com.example.myrideshare.model.Driver;
import com.example.myrideshare.model.PublicTrip;
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

        List<PublicTrip> publicTrips = tripService.searchTrips(departure,
                destination,
                dateTime);
        return mapper.entityToGetDTO(publicTrips);
    }

    @GetMapping("/{tripId}")
    public TripDTO getTripById(@PathVariable Long tripId){

        PublicTrip publicTrip = tripService.getTripById(tripId);
        Driver driver = publicTrip.getDriver();
        Car car = publicTrip.getCar();
        return mapper.entityToGetDTO(publicTrip,driver,car);
    }

    //need to add request body
    @PostMapping(value = "/create")
    @CrossOrigin(origins = "*")
    public TripDTO createTrip(@RequestBody TripPostDTO tripPostDTO){

        PublicTrip publicTrip = mapper.tripPostDTOToEntity(tripPostDTO);
        PublicTrip created = tripService.createTrip(publicTrip);

        Driver driver = created.getDriver();
        Car car = created.getCar();
        return mapper.entityToGetDTO(created,driver,car);
    }

    @DeleteMapping("/{tripId}")
    public void deleteByTripId(@PathVariable Long tripId){
        tripService.deleteTripById(tripId);
    }

    @PutMapping("/update/{tripId}")
    public void updateTrip(@RequestBody TripUpdateDTO dto, @PathVariable Long tripId){
        PublicTrip publicTrip = tripService.getTripById(tripId);
        mapper.updateEntityFromUpdateDTO(dto, publicTrip);

        tripService.updateTrip(publicTrip);
    }

}
