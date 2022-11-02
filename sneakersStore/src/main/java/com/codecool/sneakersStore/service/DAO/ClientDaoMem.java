package com.codecool.sneakersStore.service.DAO;

import com.codecool.sneakersStore.model.Client;

import java.util.ArrayList;
import java.util.List;

public class ClientDaoMem implements ClientDao {
    private static ClientDaoMem instance = null;
    private List<Client> clients;

    public static ClientDaoMem getInstance() {
        if (instance == null) {
            instance = new ClientDaoMem();
        }
        return instance;
    }

    public ClientDaoMem() {
        this.clients = new ArrayList<>();
        addClient(new Client(1, "Popescu", "Ion", "email@yahoo.com", "1234"));
        addClient(new Client(2, "Georgescu", "Marian", "adress@gmail.com", "abcd"));
    }

    @Override
    public void addClient(Client client) {
        if (!clients.contains(client)) {
            clients.add(client);
        }
    }

    @Override
    public List<Client> getAllClients() {
        return clients;
    }
}
