package com.application.xiaomi.Controller.Service;

import com.application.xiaomi.entities.Service_Cen;

import java.util.List;

public interface ServiceInterface {
    public Service_Cen saveObj(Service_Cen obj);
    public List<Service_Cen> getAll();
    public Service_Cen getById(int id);

    public Service_Cen getById(Service_Cen obj);

    public void removeObj(Service_Cen obj);

}
