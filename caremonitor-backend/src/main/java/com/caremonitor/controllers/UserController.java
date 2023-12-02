package com.caremonitor.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.caremonitor.models.User;
import com.caremonitor.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public User getUserByMail(@RequestParam String mail) {
        return this.userService.getUserByMail(mail);
    }

    @GetMapping("/test")
    public String getTest() {
        System.out.println("Request received for /user/test");
        return "Esto es una prueba";
    }

}
