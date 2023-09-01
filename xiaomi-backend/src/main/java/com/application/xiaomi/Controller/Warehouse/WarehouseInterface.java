package com.application.xiaomi.Controller.Warehouse;

import com.application.xiaomi.entities.WareHouse;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface WarehouseInterface {

    public WareHouse saveObj(WareHouse obj);
    public List<WareHouse> getAll();
    public WareHouse printId(WareHouse obj);
}
