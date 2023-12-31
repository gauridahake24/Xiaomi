package com.application.xiaomi.Controller.Service;


import com.application.xiaomi.Controller.CustOrder.CustOrderInterface;
import com.application.xiaomi.entities.Cust_order;
import com.application.xiaomi.entities.Service_Cen;
import com.application.xiaomi.entities.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Provider;
import java.util.List;

@RestController
@RequestMapping("/service")
public class ServiceController {

    private static Service_Cen ans;
    @Autowired
    private ServiceInterface si;
    @Autowired
    private CustOrderInterface ci;

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
    public List<Service_Cen> getAll() {
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


    public static void findByName(String name, List<Service_Cen> list) {

        for(int i=0;i<list.size();i++) {
            if(list.get(i).getPart_name().equals(name)) {
                ans = list.get(i);
                System.out.println(list.get(i));
                ans.setAvailable_quantity(ans.getAvailable_quantity()-1);
                break;
            }
        }
    }

    @PostMapping("/complete")
    public Service_Cen complete(@RequestBody Cust_order obj) {
        String name;
        System.out.println("-----------\n" + "In Function\n\n\n");
        if(obj.getIssue_description().toLowerCase().contains("battery"))
            name="battery";
        else if(obj.getIssue_description().toLowerCase().contains("screen"))
            name="screen";
        else if(obj.getIssue_description().toLowerCase().contains("camera") || obj.getIssue_description().toLowerCase().contains("lens"))
            name = "lens";
        else if(obj.getIssue_description().toLowerCase().contains("charge"))
            name="charger";
        else
            name = "null";


//        s.setAvailable_quantity(s.getAvailable_quantity()-1);
        findByName(name, si.getAll());
        si.saveObj(ans);
        ci.removeObj(obj);
        return ans;

    }


}
