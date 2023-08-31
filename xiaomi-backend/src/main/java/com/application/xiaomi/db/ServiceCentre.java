package com.application.xiaomi.db;


import com.application.xiaomi.XiaomiApplication;
import com.application.xiaomi.dao.UsersRepo;
import com.application.xiaomi.entities.Users;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
public class ServiceCentre {

    @GetMapping("/home/{id}")
    public Map<String, Object> home(@PathVariable("id") int id) {

        Map<String, Object> obj = new HashMap<>();
        UsersRepo usersRepo = XiaomiApplication.context.getBean(UsersRepo.class);
        Optional<Users> optional = usersRepo.findById(id);
        obj.put("ID", optional.get().getUser_id());
        obj.put("Name", optional.get().getUsername());

        return obj;
    }

    @GetMapping("")
    public String index() {
        return "index";
    }

}
