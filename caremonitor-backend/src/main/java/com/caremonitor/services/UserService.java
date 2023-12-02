package com.caremonitor.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.caremonitor.models.User;
import com.caremonitor.repository.UserRepository;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public User getUserByMail(String mail) {
        return this.userRepository.findByMail(mail);
    }
}
