package com.codecool.sneakersStore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class SneakersStoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(SneakersStoreApplication.class, args);
	}

}
