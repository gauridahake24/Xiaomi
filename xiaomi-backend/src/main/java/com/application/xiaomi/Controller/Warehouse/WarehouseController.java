package com.application.xiaomi.Controller.Warehouse;


import com.application.xiaomi.Controller.Service.ServiceInterface;
import com.application.xiaomi.entities.Service_Cen;
import com.application.xiaomi.entities.Users;
import com.application.xiaomi.entities.WareHouse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/warehouse")
public class WarehouseController {

    @Autowired
    private WarehouseInterface wi;
    @Autowired
    private ServiceInterface si;

    @PostMapping("")
    public String home() {
        return "Warehouse Home";
    }

    @PostMapping("/add")
    public WareHouse add(@RequestBody WareHouse obj) {

        WareHouse ans = wi.saveObj(obj);
        Service_Cen s = si.getById(obj.getPart_id());
        s.setRequired_quantity(s.getRequired_quantity() + obj.getRequired_quantity());
        si.saveObj(s);
        return ans;
    }

    @GetMapping("/print")
    public List<WareHouse> print() {
        return wi.getAll();
    }

    @PostMapping("/printId")
    public WareHouse printId(@RequestBody WareHouse obj) {
        int id = obj.getDispatch_id();
        List<WareHouse> list = wi.getAll();
        WareHouse ans = new WareHouse();
        for(WareHouse i: list) {
            if(i.getDispatch_id()==id)
                ans = i;
        }

        return ans;
    }

    @PostMapping("/dispatch")
    public List<Object> dispatch(@RequestBody WareHouse obj) {
        int part_id = obj.getPart_id();
        int req_quantity = obj.getRequired_quantity();
        List<Object> list = new ArrayList<>();
        if(obj.getWarehouse_quantity()>obj.getRequired_quantity()) {
            list.add(true);

            for(WareHouse i:wi.getAll()) {
                if(i.getPart_id()==part_id) {
                    i.setWarehouse_quantity(i.getWarehouse_quantity()-req_quantity);
                    wi.saveObj(i);
                }
            }

            Service_Cen s = si.getById(part_id);
            s.setAvailable_quantity(s.getAvailable_quantity() + s.getRequired_quantity());
            s.setRequired_quantity(0);
            si.saveObj(s);
            wi.removeObj(obj);
            list.add(s);
        }
        else {
            list.add(false);
            list.add(si.getById(part_id));
        }

        return list;

    }


}
