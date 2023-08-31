package com.application.xiaomi.dao;

import com.application.xiaomi.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface UsersRepo extends JpaRepository<Users, Integer> {
}
