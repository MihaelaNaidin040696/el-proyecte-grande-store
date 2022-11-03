package com.codecool.sneakersStore.service.DAO;

import com.codecool.sneakersStore.model.Client;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
@Repository
public class ClientDaoMem implements ClientDao {
    private List<Client> clients;

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
