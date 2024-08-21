package com.example.demo.controller;


import com.example.demo.dto.userDTO;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * add user
     */
    @PostMapping("/add")
    public String addUser(@RequestBody User user){
        userService.addUser(user);
        return "add user with success!";
    }

    /**
     * get users as list
     */

    @GetMapping
    public List<User> getUsers(){
        return userService.getUsers();
    }


    //get user by id
    /*@GetMapping("/get")
    public User getUser(@RequestParam Integer id){
        return userService.getUser(id);
    }
*/
    @GetMapping("/get/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Integer id) {
        User user = userService.getUser(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //update user
    @PutMapping("/update/{id}")
    public ResponseEntity<Void> updateUser(@PathVariable Integer id, @RequestBody User user){
        userService.updateUser(id,user);

        return ResponseEntity.noContent().build();
    }

    //delete user
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id){
        userService.deleteUser(id);

        return ResponseEntity.noContent().build();
    }

    //update name
    @PatchMapping("/update-name/{id}")
    public ResponseEntity<Void> updateName(@PathVariable Integer id, @RequestBody userDTO userDto){
        userService.updateName(id, userDto);

        return ResponseEntity.noContent().build();
    }
}
