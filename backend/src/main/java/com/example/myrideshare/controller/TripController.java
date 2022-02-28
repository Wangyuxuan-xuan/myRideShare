package com.example.myrideshare.controller;

import com.example.myrideshare.dto.request.TripPostDTO;
import com.example.myrideshare.dto.response.TripDTO;
import com.example.myrideshare.mapper.TripMapper;
import com.example.myrideshare.model.Trip;
import com.example.myrideshare.service.TripService;
import lombok.AllArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/trips")
@AllArgsConstructor
@Validated
public class TripController {

    private final TripService service;
    private final TripMapper mapper;

    @GetMapping("/trips")
    @CrossOrigin(origins = "*")
    public List<TripDTO> getAllTrips(){
        return mapper.entityToGetDTO(service.getAllTrips());
    }

    @GetMapping("/{tripId}")
    public TripDTO getTripById(@PathVariable Long tripId){
        return mapper.entityToGetDTO(service.getTripById(tripId));
    }

    //need to add request body
    @PostMapping(value = "/create")
    public TripDTO createTrip(@RequestBody TripPostDTO tripPostDTO){

        Trip trip = mapper.tripPostDTOToEntity(tripPostDTO);
        Trip created = service.createTrip(trip);

        return mapper.entityToGetDTO(created);
    }

    @DeleteMapping("/{tripId}")
    public void deleteByTripId(@PathVariable Long tripId){
        service.deleteTripById(tripId);
    }

    @PutMapping("/update/{tripId}")
    public void updateCar(@RequestBody TripPostDTO dto,@PathVariable Long tripId){
        Trip trip = service.getTripById(tripId);
        mapper.updateEntityFromUpdateDTO(dto,trip);

        service.updateTrip(trip);
    }

}
