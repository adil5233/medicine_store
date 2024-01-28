package com.ayurwave.medicinedelivery.service;

import com.ayurwave.medicinedelivery.model.User;

public interface UserService {

    //Create User
    public User createUser(User user);

    //Update User
    public User updateUser(String id);


    //Delete User
    public void deleteUser(String id);

    //Get User
    public User getUser(int id);
}