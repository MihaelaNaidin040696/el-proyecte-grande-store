package com.codecool.sneakersStore.service.DAO;

import com.codecool.sneakersStore.model.Client;

import java.util.List;

public interface ClientDao {
    void addClient(Client client);
    List<Client> getAllClients();
}
