package com.application.xiaomi.Controller.User;


import com.application.xiaomi.entities.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private UsersInterface ui;

    @PostMapping("")
    public String home() {
        return "Hello World!";
    }

    @PostMapping("/add")
    public Users add(@RequestBody Users obj) {

        ui.saveObj(obj);
        return obj;
    }

    @GetMapping("/print")
    public List<Users> print() {
        return ui.getAll();
    }

    @PostMapping("/printId")
    public Users printId(@RequestBody Users obj) {
        int id = obj.getUser_id();
        List<Users> list = ui.getAll();
        Users ans = new Users();
        for(Users i: list) {
            if(i.getUser_id()==id)
                ans = i;
        }

        return ans;
    }


}
