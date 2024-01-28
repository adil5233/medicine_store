package com.ayurwave.medicinedelivery.service.impl;

import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ayurwave.medicinedelivery.model.User;
import com.ayurwave.medicinedelivery.repository.UserRepository;
import com.ayurwave.medicinedelivery.service.UserService;

@Service
public class UserServiceImplementation implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public User createUser(User user) {

        String userId = UUID.randomUUID().toString();

        user.setId(userId);
        user.setName(user.getName());
        user.setAge(user.getAge());
        user.setPassword(user.getPassword());
        user.setGender(user.getGender());
        user.setEmail(user.getEmail());

        User savedUser = userRepository.save(user);

        return savedUser;
    }

    @Override
    public User updateUser(String id) {
        return null;
    }

    @Override
    public void deleteUser(String id) {

    }

    @Override
    public User getUser(int id) {
        return null;
    }
}