package com.codecool.sneakersStore.service;

import com.codecool.sneakersStore.service.DAO.ClientDaoMem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {
    private final ClientDaoMem clientDaoMem;

    @Autowired
    public ClientService(ClientDaoMem clientDaoMem) {
        this.clientDaoMem = clientDaoMem;
    }


    public ClientDaoMem getClientDaoMem() {
        return clientDaoMem;
    }
}
