package com.application.xiaomi.Controller.CustOrder;


import com.application.xiaomi.entities.Cust_order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/custorder")
public class CustOrderController {

    @Autowired
    private CustOrderInterface ci;

    @PostMapping("")
    public String home() {
        return "Warehouse Home";
    }

    @PostMapping("/add")
    public Cust_order add(@RequestBody Cust_order obj) {

        Cust_order ans = ci.saveObj(obj);
        return ans;
    }

    @PostMapping("/print")
    public List<Cust_order> print() {
        return ci.getAll();
    }

    @PostMapping("/printId")
    public Cust_order printId(@RequestBody Cust_order obj) {
        int id = obj.getOrder_id();
        List<Cust_order> list = ci.getAll();
        Cust_order ans = new Cust_order();
        for(Cust_order i: list) {
            if(i.getOrder_id()==id)
                ans = i;
        }

        return ans;
    }

}
