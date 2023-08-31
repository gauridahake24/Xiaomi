package com.application.xiaomi.Controller;


import com.application.xiaomi.entities.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/service")
public class UserController {

    @Autowired
    private Abc a;

    @PostMapping("")
    public String home() {
        return "Hello World!";
    }

    @PostMapping("/add")
    public String add(@RequestBody Users obj) {

        a.saveObj(obj);
        return "New User added";
    }

}
