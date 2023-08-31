package com.application.xiaomi.db;


import com.application.xiaomi.XiaomiApplication;
import com.application.xiaomi.dao.UsersRepo;
import com.application.xiaomi.entities.Users;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
public class ServiceCentre {

    @GetMapping("/home/{id}")
    public Map<String, Object> home(@PathVariable("id")@RequestParam("user_type") int id) {

        Map<String, Object> obj = new HashMap<>();
        System.out.println("---------------------\n" + id + "\n---------------------\n");
        UsersRepo usersRepo = XiaomiApplication.context.getBean(UsersRepo.class);
        Optional<Users> optional = usersRepo.findById(id);
        obj.put("ID", optional.get().getUser_id());
        obj.put("Name", optional.get().getUsername());

        return obj;
    }


}
