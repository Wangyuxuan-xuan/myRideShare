package com.example.myrideshare.mapper;

import com.example.myrideshare.dto.request.CustomerPostDTO;
import com.example.myrideshare.dto.request.CustomerTripPostDTO;
import com.example.myrideshare.dto.request.CustomerUpdateDTO;
import com.example.myrideshare.dto.response.CustomerDTO;
import com.example.myrideshare.dto.response.CustomerTripDTO;
import com.example.myrideshare.model.*;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring", uses = MultipartFileMapper.class)
public abstract class CustomerMapper {

    @Autowired
    private MultipartFileMapper multipartFileMapper;

    private final LocalDate joinedDate = LocalDate.now();

    @Mapping(target = "customerId", source = "id")
    public abstract CustomerDTO entityToGetDTO(Customer customer);

    public abstract List<CustomerDTO> EntityToGetDTO(List<Customer> customer);


    public Customer postDTOToEntity(CustomerPostDTO customerPostDTO){
        if (customerPostDTO == null){
            return null;
        }

        Customer customer = new Customer();

        customer.setName(customerPostDTO.getName());
        customer.setEmail(customerPostDTO.getEmail());
        customer.setPassword(customerPostDTO.getPassword());
//        customer.setAddress(customerPostDTO.getAddress());
        customer.setAddress("addr");
        customer.setPhone(customerPostDTO.getPhone());
//        customer.setAvatar(multipartFileMapper.fileToByteArray(customerPostDTO.getAvatar()));
        customer.setAvatar(null);
        customer.setJoinedDate(joinedDate);
        customer.setActive(false);

        return customer;
    }


    @Mapping(target = "version", ignore = true)
    @Mapping(target = "rate", ignore = true)
    @Mapping(target = "joinedDate", ignore = true)
    @Mapping(target = "id", source = "customerId")
    @Mapping(target = "active", ignore = true)
    public abstract void updateEntityFromUpdateDTO(CustomerUpdateDTO customerUpdateDTO, @MappingTarget Customer customer);

    public CustomerTrip customerTripPostDTOToEntity(CustomerTripPostDTO customerTripPostDTO , Customer customer ,PublicTrip trip , DriverTrip driverTrip){

        if (customerTripPostDTO == null){
            return null;
        }
        CustomerTrip customerTrip = new CustomerTrip();

        customerTrip.setCustomer(customer);
        customerTrip.setPublicTrip(trip);
        customerTrip.setDriverTrip(driverTrip);

        return customerTrip;
    }

    public CustomerTripDTO entityToCustomerTripDTO(CustomerTrip customerTrip){
        CustomerTripDTO customerTripDTO = new CustomerTripDTO();

        if (customerTrip == null){
            return customerTripDTO;
        }

        customerTripDTO.setTripId(customerTrip.getPublicTrip().getId());

        return customerTripDTO;
    }

    public List<CustomerTripDTO> entityToCustomerTripDTO(List<CustomerTrip> customerTrips){
        List<CustomerTripDTO> customerTripDTOS = new ArrayList<>();
        for (CustomerTrip customerTrip : customerTrips){
            customerTripDTOS.add(entityToCustomerTripDTO(customerTrip));
        }

        return customerTripDTOS;
    }
}
