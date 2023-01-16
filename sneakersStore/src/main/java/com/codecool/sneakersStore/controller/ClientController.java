package com.codecool.sneakersStore.controller;

import com.codecool.sneakersStore.model.Client;
import com.codecool.sneakersStore.payload.ClientRequest;
import com.codecool.sneakersStore.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(value = {"*"} )
@RequestMapping("/client")
public class ClientController {
    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @PostMapping("/register")
    public void register(@RequestBody Client client){
        clientService.addUserRegister(client);
    }
    @GetMapping(value = "all-clients")
    public List<Client> getClients() {
        return clientService.getAllClients();
    }

    @PostMapping(value = "add-client")
    public void addClient(@RequestBody ClientRequest clientRequest) {
        Argon2PasswordEncoder encoder = new Argon2PasswordEncoder(32, 64, 1, 15 * 1024, 2);
        String textPassword = clientRequest.getPassword();
        String encodedPassword = encoder.encode(textPassword);

        Boolean validPassword = encoder.matches(textPassword, encodedPassword);
        System.out.println(validPassword);

        Client client = new Client(clientRequest.getFirstName(), clientRequest.getLastName(), clientRequest.getEmail(), encodedPassword);
        clientService.addClient(client);
    }

    @GetMapping("/get-client/{id}")
    public Client getClientById(@PathVariable("id") Long id) {
        return clientService.getClientById(id);
    }
}
