package com.example.myrideshare.controller;

import com.example.myrideshare.dto.request.CustomerPostDTO;
import com.example.myrideshare.dto.request.CustomerTripPostDTO;
import com.example.myrideshare.dto.request.CustomerUpdateDTO;
import com.example.myrideshare.dto.response.CustomerDTO;
import com.example.myrideshare.dto.response.CustomerTripDTO;
import com.example.myrideshare.mapper.CustomerMapper;
import com.example.myrideshare.model.Customer;
import com.example.myrideshare.model.CustomerTrip;
import com.example.myrideshare.model.DriverTrip;
import com.example.myrideshare.model.PublicTrip;
import com.example.myrideshare.service.CustomerService;
import com.example.myrideshare.service.DriverService;
import com.example.myrideshare.service.TripService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/customers")
@AllArgsConstructor
@Validated
public class CustomerController {

    private final CustomerService customerService;
    private final CustomerMapper mapper;

    private final DriverService driverService;
    private final TripService tripService;

    @GetMapping("/customers")
    @CrossOrigin(origins = "*")
    public List<CustomerDTO> getAllCustomers(){
        return mapper.EntityToGetDTO(customerService.getAllCustomers());
    }

    @GetMapping("/{customerId}")
    @CrossOrigin(origins = "*")
    public CustomerDTO getCustomerById(@PathVariable Long customerId){
        Customer customer = customerService.getCustomerById(customerId);
        return mapper.entityToGetDTO(customer);
    }

    @PostMapping(value = "/create" , consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    @CrossOrigin(origins = "*")
    public CustomerDTO createCustomer(CustomerPostDTO customerPostDTO){
        Customer customer = mapper.postDTOToEntity(customerPostDTO);
        Customer created = customerService.createCustomer(customer);

        return mapper.entityToGetDTO(created);
    }

    @DeleteMapping("/{customerId}")
    @CrossOrigin(origins = "*")
    public void deleteCustomerById(@PathVariable Long customerId){
        customerService.deleteCustomerById(customerId);
    }

    @PutMapping("/update")
    @CrossOrigin(origins = "*")
    public void updateCustomer(@RequestBody CustomerUpdateDTO dto){
        Customer customer = customerService.getCustomerById(dto.getCustomerId());
        mapper.updateEntityFromUpdateDTO(dto,customer);

        customerService.updateCustomer(customer);
    }

    @PostMapping("/new/customerTrip")
    @CrossOrigin(origins = "*")
    public void createCustomerTrip(@RequestBody CustomerTripPostDTO customerTripPostDTO){

        Customer customer = customerService.getCustomerById(customerTripPostDTO.getCustomerId());

        PublicTrip trip = tripService.getTripById(customerTripPostDTO.getTripId());
        DriverTrip driverTrip = driverService.getDriverTripByTrip(trip);

        CustomerTrip customerTrip = mapper.customerTripPostDTOToEntity(customerTripPostDTO,customer,trip,driverTrip);

        customerService.createCustomerTrip(customerTrip);
    }

    @GetMapping("/customerTrip/{customerId}")
    @CrossOrigin(origins = "*")
    public List<CustomerTripDTO> getAllCustomerTripsByCustomerId(@PathVariable Long customerId){

        List<CustomerTrip> customerTrips = customerService.getCustomerTripByCustomerId(customerId);
        return mapper.entityToCustomerTripDTO(customerTrips);
    }

//    @GetMapping(value = "/{userId}/avatar", produces = MediaType.IMAGE_JPEG_VALUE)
//    public Resource downloadAvatar(@PathVariable @Valid @HasAccessForUser Long userId,
//                                   HttpServletResponse response) {
//
//        response.addHeader(CACHE_CONTROL, ALLOW_CACHE_HEADER);
//        return service.downloadAvatar(userId);
//    }

}
