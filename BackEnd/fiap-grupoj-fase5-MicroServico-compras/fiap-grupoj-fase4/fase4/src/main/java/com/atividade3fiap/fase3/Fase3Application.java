package com.atividade3fiap.fase3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class Fase3Application {
	public static void main(String[] args) {
		SpringApplication.run(Fase3Application.class, args);
	}
}
