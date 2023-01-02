package com.codecool.sneakersStore.controller;

import com.codecool.sneakersStore.model.Cart;
import com.codecool.sneakersStore.model.Client;
import com.codecool.sneakersStore.model.Order;
import com.codecool.sneakersStore.payload.OrderRequest;
import com.codecool.sneakersStore.service.ClientService;
import com.codecool.sneakersStore.service.OrderService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/", methods = {RequestMethod.PUT, RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST})
@RestController
@RequestMapping("/order")
public class OrderController {

    private final OrderService orderService;
    private final ClientService clientService;

    public OrderController(OrderService orderService, ClientService clientService) {
        this.orderService = orderService;
        this.clientService = clientService;
    }

    @GetMapping("/get-order")
    public List<Order> getClientOrders(){
        Client client = clientService.findByUsername("test");
        return client.getOrders();
    }

    @PostMapping("/add-order")
    public Order addOrders(@RequestBody OrderRequest orderRequest){
        System.out.println(orderRequest);
        Client client = clientService.findByUsername("test");
        Order order = orderService.addOrder(orderRequest,client);
        return order;
    }
}
