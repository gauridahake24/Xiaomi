package com.application.xiaomi.Controller.Service;

import com.application.xiaomi.dao.ServiceCentreRepo;
import com.application.xiaomi.entities.Service_Cen;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceFunctions implements ServiceInterface{

    @Autowired
    private ServiceCentreRepo repo;

    @Override
    public Service_Cen saveObj(Service_Cen obj) {
        return repo.save(obj);
    }

    @Override
    public List<Service_Cen> getAll() {
        return repo.findAll();
    }

    @Override
    public Service_Cen getById(int id) {
        List<Service_Cen> list = repo.findAll();
        Service_Cen ans = new Service_Cen();
        for(Service_Cen i: list) {
            if(i.getPart_id()==id)
                ans = i;
        }

        return ans;
    }


    @Override
    public Service_Cen getById(Service_Cen obj) {
        int id = obj.getPart_id();
        List<Service_Cen> list = repo.findAll();
        Service_Cen ans = new Service_Cen();
        for(Service_Cen i: list) {
            if(i.getPart_id()==id)
                ans = i;
        }

        return ans;
    }
}
