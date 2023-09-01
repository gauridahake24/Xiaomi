package com.application.xiaomi.Controller.Service;

import com.application.xiaomi.entities.Service_Cen;
import com.application.xiaomi.entities.Users;

import java.util.List;

public interface ServiceInterface {
    public Service_Cen saveObj(Service_Cen obj);
    public List<Service_Cen> getAll();
}
