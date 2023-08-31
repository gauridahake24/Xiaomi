package com.application.xiaomi.dao;

import com.application.xiaomi.entities.WareHouse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WareHouseRepo extends JpaRepository<WareHouse, Integer> {
}
