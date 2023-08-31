package com.application.xiaomi.dao;

import com.application.xiaomi.entities.Cust_order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface CustOrderRepo extends JpaRepository<Cust_order, Integer> {
}
