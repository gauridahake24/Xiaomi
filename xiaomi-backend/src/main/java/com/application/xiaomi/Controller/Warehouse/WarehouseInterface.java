package com.application.xiaomi.Controller.Warehouse;

import com.application.xiaomi.entities.WareHouse;

import java.util.List;

public interface WarehouseInterface {

    public WareHouse saveObj(WareHouse obj);
    public List<WareHouse> getAll();
}
