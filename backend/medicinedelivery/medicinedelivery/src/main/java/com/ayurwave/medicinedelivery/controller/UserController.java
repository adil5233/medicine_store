package com.ayurwave.medicinedelivery.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ayurwave.medicinedelivery.model.User;
import com.ayurwave.medicinedelivery.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserService userService;

    //Create User Api
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user)  {
        User createdUser = userService.createUser(user);
        return new ResponseEntity<>(createdUser , HttpStatus.CREATED);
    }
}