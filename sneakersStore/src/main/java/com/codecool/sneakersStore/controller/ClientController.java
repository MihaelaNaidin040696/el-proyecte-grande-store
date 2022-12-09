package com.codecool.sneakersStore.controller;

import com.codecool.sneakersStore.model.Client;
import com.codecool.sneakersStore.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/client")
public class ClientController {
    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping(value = "all-clients")
    public List<Client> getClients() {
        return clientService.getAllClients();
    }

    @PostMapping(value = "add-client")
    public void addClient(@RequestBody Client client) {
        Argon2PasswordEncoder encoder = new Argon2PasswordEncoder(32, 64, 1, 15 * 1024, 2);
        String textPassword = client.getPassword();
        String encodedPassword = encoder.encode(textPassword);

        Boolean validPassword = encoder.matches(textPassword, encodedPassword);
        System.out.println(validPassword);

        Client client1 = null;
//                new Client(
//                client.getId(),
//                client.getFirstName(),
//                client.getLastName(),
//                client.getEmail(),
//                encodedPassword
//                client.getCart(),
//                client.getOrders()
//        );
        clientService.addClient(client1);
    }

    @GetMapping("/get-client/{id}")
    public Client getClientById(@PathVariable("id") Long id) {
        return clientService.getClientById(id);
    }
}
