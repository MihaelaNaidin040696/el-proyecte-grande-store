package com.codecool.sneakersStore.controller;

import com.codecool.sneakersStore.model.Client;
import com.codecool.sneakersStore.service.ClientService;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
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
        Argon2PasswordEncoder encoder = new Argon2PasswordEncoder(32,64,1,15*1024,2);
        String textPassword = client.getPassword();
        String encodedPassword = encoder.encode(textPassword);

        Boolean validPassword = encoder.matches(textPassword, encodedPassword);
        System.out.println(validPassword);

        Client client1 = new Client(client.getId(), client.getFirstName(), client.getLastName(), client.getEmail(), encodedPassword);
        clientService.addClient(client1);
    }

}
