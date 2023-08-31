package com.application.xiaomi.Controller.User;

import com.application.xiaomi.dao.UsersRepo;
import com.application.xiaomi.entities.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersFunctions implements UsersInterface {

    @Autowired
    private UsersRepo repo;

    @Override
    public Users saveObj(Users obj) {
        return repo.save(obj);
    }

    @Override
    public List<Users> getAll() {
        return repo.findAll();
    }

}
