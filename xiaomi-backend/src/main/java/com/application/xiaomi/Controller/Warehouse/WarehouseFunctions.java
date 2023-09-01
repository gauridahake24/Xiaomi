package com.application.xiaomi.Controller.Warehouse;


import com.application.xiaomi.dao.WareHouseRepo;
import com.application.xiaomi.entities.WareHouse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

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

    @Override
    public WareHouse printId(WareHouse obj) {
        int id = obj.getDispatch_id();
        List<WareHouse> list = repo.findAll();
        WareHouse ans = new WareHouse();
        for(WareHouse i: list) {
            if(i.getDispatch_id()==id)
                ans = i;
        }

        return ans;
    }

    @Override
    public void removeObj(WareHouse obj) {
        repo.delete(obj);
    }


}
