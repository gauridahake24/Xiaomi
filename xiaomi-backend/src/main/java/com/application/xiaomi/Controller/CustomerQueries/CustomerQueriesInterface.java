package com.application.xiaomi.Controller.CustomerQueries;

import com.application.xiaomi.entities.CustomerQueries;
import com.application.xiaomi.entities.WareHouse;

import java.util.List;

public interface CustomerQueriesInterface {

    public CustomerQueries saveObj(CustomerQueries obj);
    public List<CustomerQueries> getAll();
}
