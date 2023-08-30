package com.application.xiaomi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class XiaomiApplication {
    public static ApplicationContext context;
    public static void main(String[] args) {
        context = SpringApplication.run(XiaomiApplication.class, args);
    }

}