package com.codecool.sneakersStore.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "clients")
public class Client implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String lastName;
    private String email;
    private String password;
    @ElementCollection(fetch = FetchType.EAGER)
    @JsonIgnore
    private List<String> roles = new ArrayList<>();

    @OneToOne(mappedBy = "client")
    @JsonBackReference(value = "client-cart")
    private Cart cart;
    @OneToMany(cascade = CascadeType.MERGE, mappedBy = "client")
    @JsonIgnore
    private List<Order> orders;


//    public Client(String firstName, String lastName, String email, String encodedPassword) {
//        this.setUsername(firstName);
//        this.setLastName(lastName);
//        this.setEmail(email);
//        this.setPassword(encodedPassword);
//    }

    @Override
    public String toString() {
        return "Client{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", roles=" + roles +
                ", cart=" + cart +
                ", orders=" + orders +
                '}';
    }

    @JsonIgnore
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
