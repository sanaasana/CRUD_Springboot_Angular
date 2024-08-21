package com.example.demo.service;

import com.example.demo.dto.userDTO;
import com.example.demo.entity.User;

import java.util.List;

public interface UserService {

    void addUser(User user);

    List<User> getUsers();

    User getUser(Integer id);

    void updateUser(Integer id, User user);

    void deleteUser(Integer id);

    void updateName(Integer id, userDTO userDto);
}
