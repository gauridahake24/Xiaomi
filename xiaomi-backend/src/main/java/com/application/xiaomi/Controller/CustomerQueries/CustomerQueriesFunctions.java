package com.application.xiaomi.Controller.CustomerQueries;

import com.application.xiaomi.dao.CustomerQueriesRepo;
import com.application.xiaomi.entities.CustomerQueries;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerQueriesFunctions implements CustomerQueriesInterface {

    @Autowired
    private CustomerQueriesRepo repo;

    @Override
    public CustomerQueries saveObj(CustomerQueries obj) {
        return repo.save(obj);
    }

    @Override
    public List<CustomerQueries> getAll() {
        return repo.findAll();
    }


}
