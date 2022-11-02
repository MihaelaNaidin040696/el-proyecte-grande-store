package com.codecool.sneakersStore.service;

import com.codecool.sneakersStore.model.Client;
import com.codecool.sneakersStore.service.DAO.ClientDaoMem;

import java.util.List;

public class ClientService {
    private final ClientDaoMem clientDaoMem;

    public ClientService() {
        this.clientDaoMem = ClientDaoMem.getInstance();
    }

    public List<Client> getClients() {
        return clientDaoMem.getAllClients();
    }

    public void addClient(Client client){
        clientDaoMem.addClient(client);
    }
}
