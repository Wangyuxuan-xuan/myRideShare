package com.example.myrideshare.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class DriverTrip extends BaseEntity{

    @OneToOne(targetEntity = Driver.class ,fetch = FetchType.LAZY ,optional = true)
    @JoinColumn(name = "driver_id")
    private Driver driver;

    @OneToOne(targetEntity = PublicTrip.class ,fetch = FetchType.LAZY ,optional = true)
    @JoinColumn(name = "public_trip_id")
    private PublicTrip publicTrip;

    @OneToMany(
            mappedBy = "driverTrip",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<CustomerTrip> customerTrips = new ArrayList<>();
}
