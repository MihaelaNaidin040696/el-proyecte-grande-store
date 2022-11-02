package com.codecool.sneakersStore.controller;

import com.codecool.sneakersStore.model.Client;
import com.codecool.sneakersStore.service.ClientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class ClientController {
    private final ClientService clientService;

    public ClientController() {
        this.clientService = new ClientService();
    }

    @GetMapping(value = "all-clients")
    public List<Client> getClients() {
        return clientService.getClients();

    }

    @PostMapping(value = "add-client")
    public void addClient(@RequestBody Client client){
        Client client1 = new Client(client.getId(), client.getFirstName(), client.getLastName(), client.getEmail(), client.getPassword());
        clientService.addClient(client1);
    }

}
