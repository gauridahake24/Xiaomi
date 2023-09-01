package com.application.xiaomi.Controller.CustOrder;

import com.application.xiaomi.entities.Cust_order;

import java.util.List;

public interface CustOrderInterface {
    public Cust_order saveObj(Cust_order obj);
    public List<Cust_order> getAll();
    public void removeObj(Cust_order obj);
}
