package com.example.myrideshare.repository;

import com.example.myrideshare.model.Customer;
import com.example.myrideshare.model.CustomerTrip;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerTripRepository extends JpaRepository<CustomerTrip,Long> {

    List<CustomerTrip> getAllByCustomer(Customer customer);
}
