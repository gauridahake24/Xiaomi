package com.application.xiaomi.db;

import com.application.xiaomi.XiaomiApplication;
import com.application.xiaomi.dao.UsersRepo;
import com.application.xiaomi.entities.Users;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
public class TestClass {

//    @RequestMapping(value = "/home", method=RequestMethod.POST)
//    public String home(HttpServletRequest request,
//                       Model model) {
//        String name = request.getParameter("name");
//        String type = request.getParameter("user_type");
//        String password = request.getParameter("password");
//
//        UsersRepo usersRepo = XiaomiApplication.context.getBean(UsersRepo.class);
//
//        Users user = new Users();
//        user.setUsername(name);
//        user.setUser_type(type);
//        user.setPassword(password);
//
//        usersRepo.save(user);
//
//        model.addAttribute("name", name);
//
//        return "home";
//    }

    @GetMapping("/about")
    public Map<String, Object> about() {

//        JSONObject obj = new JSONObject();
        UsersRepo usersRepo = XiaomiApplication.context.getBean(UsersRepo.class);
        Optional<Users> optional = usersRepo.findById(1);
        Map<String, Object> obj = new HashMap<>();
        obj.put("ID", optional.get().getUser_id());
        obj.put("Name", optional.get().getUsername());
        System.out.println(obj);

        return obj;
    }

//    @GetMapping("")
//    public String index() {
//        return "index";
//    }
}
