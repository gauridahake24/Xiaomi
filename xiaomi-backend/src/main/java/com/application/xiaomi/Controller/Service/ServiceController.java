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
}
