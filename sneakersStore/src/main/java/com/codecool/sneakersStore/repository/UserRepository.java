package com.codecool.sneakersStore.repository;

import com.codecool.sneakersStore.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<User, Long> {
    User findClientByEmail(String email);

}
