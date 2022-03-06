package com.example.myrideshare.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Car extends BaseEntity{

    private String model;

    private String licensePlate;

    @Enumerated(EnumType.STRING)
    private CarType carType;

    private String carYear;

    private int numOfPassenger;

    @Lob
    @Type(type = "org.hibernate.type.BinaryType")
    private byte[] picture;

    @ManyToOne(targetEntity = Driver.class , fetch = FetchType.LAZY)
    @JoinColumn(name = "driver_id")
    private Driver driver;

    @OneToMany(
            mappedBy = "car",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<PublicTrip> publicTrips = new ArrayList<>();
}
