package com.application.xiaomi.Controller.CustOrder;

import com.application.xiaomi.dao.CustOrderRepo;
import com.application.xiaomi.dao.ServiceCentreRepo;
import com.application.xiaomi.entities.Cust_order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustOrderFunctions implements CustOrderInterface {

    @Autowired
    private CustOrderRepo repo;

    @Override
    public Cust_order saveObj(Cust_order obj) {
        return repo.save(obj);
    }

    @Override
    public List<Cust_order> getAll() {
        return repo.findAll();
    }

}
