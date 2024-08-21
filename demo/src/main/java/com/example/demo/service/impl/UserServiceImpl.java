package com.example.demo.service.impl;


import com.example.demo.dto.userDTO;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public void addUser(User user) {
        userRepository.save(user);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }


    @Override
    public User getUser(Integer id) {
        //check weather the user is in database or not
        User user = userRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid user Id:" + id));

        return user;
    }

    @Override
    public void updateUser(Integer id, User user) {
        //check if the user is existed
        userRepository
                .findById(id)
                .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid user Id:" + id));
        user.setId(id);
        userRepository.save(user);
    }

    @Override
    public void deleteUser(Integer id) {
        //check if the user is existed
        User user = userRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid user Id:" + id));

        userRepository.delete(user);

    }

    @Override
    public void updateName(Integer id, userDTO userDto) {
        //check if the user is existed
        User user = userRepository
                    .findById(id)
                    .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid user Id:" + id));
        user.setName(userDto.getName());

        userRepository.save(user);
    }
}
