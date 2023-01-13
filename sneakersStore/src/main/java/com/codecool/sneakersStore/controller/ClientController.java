package com.codecool.sneakersStore.controller;

import com.codecool.sneakersStore.model.Client;
import com.codecool.sneakersStore.payload.ClientRequest;
import com.codecool.sneakersStore.security.JWTTokenHelper;
import com.codecool.sneakersStore.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/", methods = {RequestMethod.PUT, RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST})
@RequestMapping("/client")
public class ClientController {
    private final ClientService clientService;
    private AuthenticationManager authenticationManager;
    JWTTokenHelper jwtTokenHelper;

    public ClientController(ClientService clientService, AuthenticationManager authenticationManager, JWTTokenHelper jwtTokenHelper) {
        this.clientService = clientService;
        this.authenticationManager = authenticationManager;
        this.jwtTokenHelper = jwtTokenHelper;
    }

    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public Client register(@RequestBody Client client){
        System.out.println(client.toString());
        clientService.addClientGeorge(client);
        return client;
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
