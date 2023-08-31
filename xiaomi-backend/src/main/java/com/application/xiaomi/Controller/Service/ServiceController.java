package com.application.xiaomi.Controller.Service;


import com.application.xiaomi.entities.Service_Cen;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public Service_Cen add(@RequestBody Service_Cen obj) {
        si.saveObj(obj);
        return obj;
    }
}
