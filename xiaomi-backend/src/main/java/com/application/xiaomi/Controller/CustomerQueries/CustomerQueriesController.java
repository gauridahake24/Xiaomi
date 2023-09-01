package com.application.xiaomi.Controller.CustomerQueries;

import com.application.xiaomi.entities.CustomerQueries;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customerqueries")
public class CustomerQueriesController {
    @Autowired
    private CustomerQueriesInterface wi;

    @PostMapping("")
    public String home() {
        return "CustomerQueries Home";
    }

    @PostMapping("/add")
    public CustomerQueries add(@RequestBody CustomerQueries obj) {

        CustomerQueries ans = wi.saveObj(obj);
        return ans;
    }

    @GetMapping("/print")
    public List<CustomerQueries> print() {
        return wi.getAll();
    }

    @PostMapping("/printId")
    public CustomerQueries printId(@RequestBody CustomerQueries obj) {
        int id = obj.getQuery_id();
        List<CustomerQueries> list = wi.getAll();
        CustomerQueries ans = new CustomerQueries();
        for(CustomerQueries i: list) {
            if(i.getQuery_id()==id)
                ans = i;
        }

        return ans;
    }
}
