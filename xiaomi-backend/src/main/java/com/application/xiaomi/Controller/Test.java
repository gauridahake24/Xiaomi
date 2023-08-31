package com.application.xiaomi.Controller;

import com.application.xiaomi.dao.ServiceCentreRepo;
import com.application.xiaomi.dao.UsersRepo;
import com.application.xiaomi.entities.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class Test implements Abc{

    @Autowired
    private UsersRepo repo;

    @Override
    public Users saveObj(Users obj) {
        return repo.save(obj);
    }
}
