package com.example.myrideshare.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class CustomerTrip extends BaseEntity{

    @ManyToOne(targetEntity = Customer.class , fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @OneToOne(targetEntity = PublicTrip.class ,fetch = FetchType.LAZY ,optional = true)
    @JoinColumn(name = "public_trip_id")
    private PublicTrip publicTrip;

    @ManyToOne
    @JoinColumn(name = "driver_trip_id")
    private DriverTrip driverTrip;

}
