package com.zallz.oauth2service;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.zallz.oauth2service.repository")
public class Oauth2serviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(Oauth2serviceApplication.class, args);
	}

}
