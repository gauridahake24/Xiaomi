package com.application.xiaomi.Controller.Service;

import com.application.xiaomi.dao.ServiceCentreRepo;
import com.application.xiaomi.entities.Service_Cen;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceFunctions implements ServiceInterface{

    @Autowired
    private ServiceCentreRepo repo;

    @Override
    public Service_Cen saveObj(Service_Cen obj) {
        return repo.save(obj);
    }
}
