package com.application.xiaomi.Controller.Service;


import com.application.xiaomi.entities.Service_Cen;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/service")
public class ServiceController {

    @Autowired
    private ServiceInterface si;

    @PostMapping("")
    public String home() {
        return "Hello World";
    }

    @PostMapping("/add")
    public String add(@RequestParam("Available_quantity") Object name) {
//        Service_Cen obj = new Service_Cen(request.getAttribute("part_name"),
//                request.getAttribute("Available_quantity"),
//                request.getAttribute("Required_quantity"),
//                request.getAttribute("warehouse_location"),
//                request.getAttribute("priority"));
//        Object obj = request.equals(null);
        System.out.println("----------\n" + name.toString() + "\n----------\n");
//        Service_Cen ans = si.saveObj(obj);
        return name.toString();
    }
}
