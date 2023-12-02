package com.caremonitor.repository;

import org.springframework.stereotype.Repository;
import com.caremonitor.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u WHERE u.mail = :mail")
    public User findByMail(@Param("mail") String mail);

}
