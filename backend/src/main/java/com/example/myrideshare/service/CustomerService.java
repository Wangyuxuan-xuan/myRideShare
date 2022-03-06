package com.example.myrideshare.service;

import com.example.myrideshare.model.Customer;
import com.example.myrideshare.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository;

    public List<Customer> getAllCustomers(){
        return customerRepository.findAll();
    }

    public Customer getCustomerById(Long id){
        return customerRepository.getById(id);
    }

    @Transactional
    public Customer createCustomer(Customer customer){
        return customerRepository.save(customer);
    }

    @Transactional
    public void deleteCustomerById(Long id){
        customerRepository.deleteById(id);
    }

    @Transactional
    public Customer updateCustomer(Customer customer){
        return customerRepository.save(customer);
    }

    public Customer authenticateForCustomer(String email , String password){
        Customer customer = customerRepository.findCustomerByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException("Customer not exist !"));

        if (!customer.isActive()){
            throw new IllegalStateException("customer is not active");
        }

        if(!customer.getPassword().equals(password)){
            throw new IllegalArgumentException("wrong email or password");
        }

        return customer;
    }
}
