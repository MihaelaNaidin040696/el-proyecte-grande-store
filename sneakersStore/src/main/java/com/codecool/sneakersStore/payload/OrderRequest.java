package com.codecool.sneakersStore.payload;

import com.codecool.sneakersStore.model.CartItem;
import com.codecool.sneakersStore.model.Client;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;
import java.util.List;


@Getter
@Setter
@ToString
public class OrderRequest {
//    private String email;
    private String first_name;
    private String last_name;
    private String phone_number;
    private String country;
    private String city;
    private String address;
    private String postal_code;
    private Date orderDate;
    private Date deliveryDate;
    private String notes;
}
