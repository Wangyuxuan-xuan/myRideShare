package com.example.myrideshare.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Driver extends BaseEntity{

    private String name;

    @Email
    private String email;

    private String password;

    private String address;

    private String phone;

    private LocalDate joinedDate;

    private float rate;

    private boolean active;

    private String driverLicenseNo;

    @Lob
    @Type(type = "org.hibernate.type.BinaryType")
    private byte[] avatar;

    @OneToMany(
            mappedBy = "driver",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Car> cars = new ArrayList<>();

    @OneToMany(
            mappedBy = "driver",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Trip> trips = new ArrayList<>();

}
