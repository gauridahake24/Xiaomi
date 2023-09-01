package com.application.xiaomi.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class WareHouse {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int dispatch_id;

    private int part_id;
    private String source_warehouse;

    public WareHouse(int dispatch_id, int part_id, String source_warehouse) {
        this.dispatch_id = dispatch_id;
        this.part_id = part_id;
        this.source_warehouse = source_warehouse;
    }

    public WareHouse() {
        super();
    }

    public int getDispatch_id() {
        return dispatch_id;
    }

    public void setDispatch_id(int dispatch_id) {
        this.dispatch_id = dispatch_id;
    }

    public int getPart_id() {
        return part_id;
    }

    public void setPart_id(int part_id) {
        this.part_id = part_id;
    }

    public String getSource_warehouse() {
        return source_warehouse;
    }

    public void setSource_warehouse(String source_warehouse) {
        this.source_warehouse = source_warehouse;
    }

}
