package com.example.myrideshare.controller;

import com.example.myrideshare.dto.request.CustomerPostDTO;
import com.example.myrideshare.dto.request.CustomerUpdateDTO;
import com.example.myrideshare.dto.response.CustomerDTO;
import com.example.myrideshare.mapper.CustomerMapper;
import com.example.myrideshare.model.Customer;
import com.example.myrideshare.service.CustomerService;
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

    private final CustomerService service;
    private final CustomerMapper mapper;

    @GetMapping("/customers")
    @CrossOrigin(origins = "*")
    public List<CustomerDTO> getAllCustomers(){
        return mapper.EntityToGetDTO(service.getAllCustomers());
    }

    @GetMapping("/{customerId}")
    @CrossOrigin(origins = "*")
    public CustomerDTO getCustomerById(@PathVariable Long customerId){
        Customer customer = service.getCustomerById(customerId);
        return mapper.entityToGetDTO(customer);
    }

    @PostMapping(value = "/create" , consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    @CrossOrigin(origins = "*")
    public CustomerDTO createCustomer(CustomerPostDTO customerPostDTO){
        Customer customer = mapper.PostDTOToEntity(customerPostDTO);
        Customer created = service.createCustomer(customer);

        return mapper.entityToGetDTO(created);
    }

    @DeleteMapping("/{customerId}")
    @CrossOrigin(origins = "*")
    public void deleteCustomerById(@PathVariable Long customerId){
        service.deleteCustomerById(customerId);
    }

    @PutMapping("/update")
    @CrossOrigin(origins = "*")
    public void updateCustomer(@RequestBody CustomerUpdateDTO dto){
        Customer customer = service.getCustomerById(dto.getCustomerId());
        mapper.updateEntityFromUpdateDTO(dto,customer);

        service.updateCustomer(customer);
    }

//    @GetMapping(value = "/{userId}/avatar", produces = MediaType.IMAGE_JPEG_VALUE)
//    public Resource downloadAvatar(@PathVariable @Valid @HasAccessForUser Long userId,
//                                   HttpServletResponse response) {
//
//        response.addHeader(CACHE_CONTROL, ALLOW_CACHE_HEADER);
//        return service.downloadAvatar(userId);
//    }

}
