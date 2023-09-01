package com.application.xiaomi.Controller.Service;


import com.application.xiaomi.entities.Service_Cen;
import com.application.xiaomi.entities.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Provider;
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
    public Service_Cen add(@RequestParam("part_name") String part_name,
                           @RequestParam("Available_quantity") String available_quantity,
                           @RequestParam("Required_quantity") String required_quantity,
                           @RequestParam("warehouse_location") String warehouse_location,
                           @RequestParam("priority") String priority) {
        Service_Cen obj = new Service_Cen();
        obj.setPart_name(part_name);
        obj.setAvailable_quantity(Integer.parseInt(available_quantity));
        obj.setRequired_quantity(Integer.parseInt(required_quantity));
        obj.setWarehouse_location(warehouse_location);
        obj.setPriority(priority);
        Service_Cen ans = si.saveObj(obj);
        return ans;
    }

    @GetMapping("/print")
    public List<Service_Cen> getall() {
        return si.getAll();
    }

    @PostMapping("/printId")
    public Service_Cen printId(@RequestBody Service_Cen obj) {
        int id = obj.getPart_id();
        List<Service_Cen> list = si.getAll();
        Service_Cen ans = new Service_Cen();
        for(Service_Cen i: list) {
            if(i.getPart_id()==id)
                ans = i;
        }

        return ans;
    }

}
