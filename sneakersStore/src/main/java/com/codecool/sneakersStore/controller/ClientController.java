package com.codecool.sneakersStore.controller;

import com.codecool.sneakersStore.model.Client;
import com.codecool.sneakersStore.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class ClientController {
    @Autowired
    private ClientService clientService;

    @GetMapping(value = "all-clients")
    public List<Client> getClients() {
        return clientService.getClientDaoMem().getAllClients();

    }

    @PostMapping(value = "add-client")
    public void addClient(@RequestBody Client client) {
        Argon2PasswordEncoder encoder = new Argon2PasswordEncoder(32, 64, 1, 15 * 1024, 2);
        String textPassword = client.getPassword();
        String encodedPassword = encoder.encode(textPassword);

        Boolean validPassword = encoder.matches(textPassword, encodedPassword);
        System.out.println(validPassword);

        Client client1 = new Client(client.getId(), client.getFirstName(), client.getLastName(), client.getEmail(), encodedPassword);
        clientService.getClientDaoMem().addClient(client1);
    }

}
