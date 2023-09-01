package com.application.xiaomi.Controller.Warehouse;


import com.application.xiaomi.dao.WareHouseRepo;
import com.application.xiaomi.entities.WareHouse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WarehouseFunctions implements WarehouseInterface{

    @Autowired
    private WareHouseRepo repo;

    @Override
    public WareHouse saveObj(WareHouse obj) {
        return repo.save(obj);
    }

    @Override
    public List<WareHouse> getAll() {
        return repo.findAll();
    }

}
