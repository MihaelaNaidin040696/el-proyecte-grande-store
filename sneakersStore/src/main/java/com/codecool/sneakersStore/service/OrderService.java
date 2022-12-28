package com.codecool.sneakersStore.service;

import com.codecool.sneakersStore.model.Order;
import com.codecool.sneakersStore.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public void saveOrder(Order order){
        orderRepository.save(order);
    }
    public Order getOrderById(Long id){
        return orderRepository.findById(id).get();
    }
}
