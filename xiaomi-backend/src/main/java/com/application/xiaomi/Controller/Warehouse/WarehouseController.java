package com.application.xiaomi.Controller.Warehouse;


import com.application.xiaomi.entities.Users;
import com.application.xiaomi.entities.WareHouse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/warehouse")
public class WarehouseController {

    @Autowired
    private WarehouseInterface wi;

    @PostMapping("")
    public String home() {
        return "Warehouse Home";
    }

    @PostMapping("/add")
    public WareHouse add(@RequestBody WareHouse obj) {

        WareHouse ans = wi.saveObj(obj);
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

}
