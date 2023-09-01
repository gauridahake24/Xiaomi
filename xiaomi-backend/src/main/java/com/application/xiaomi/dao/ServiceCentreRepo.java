package com.application.xiaomi.dao;

import com.application.xiaomi.entities.Service_Cen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface ServiceCentreRepo extends JpaRepository<Service_Cen, Integer> {
}
