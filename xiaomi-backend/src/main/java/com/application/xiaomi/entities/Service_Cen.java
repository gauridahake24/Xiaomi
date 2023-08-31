package com.application.xiaomi.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Service_Cen {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int part_id;

    private String part_name;
    private int Available_quantity;
    private int Required_quantity;
    private String warehouse_location;
    private String priority;

    public Service_Cen(int part_id, String part_name, int Available_quantity, int Required_quantity, String warehouse_location, String priority) {
        this.part_id = part_id;
        this.part_name = part_name;
        this.Available_quantity = Available_quantity;
        this.Required_quantity = Required_quantity;
        this.warehouse_location = warehouse_location;
        this.priority = priority;
    }

    public int getPart_id() {
        return part_id;
    }

    public void setPart_id(int part_id) {
        this.part_id = part_id;
    }

    public String getPart_name() {
        return part_name;
    }

    public void setPart_name(String part_name) {
        this.part_name = part_name;
    }

    public int getAvailable_quantity() {
        return Available_quantity;
    }

    public void setAvailable_quantity(int available_quantity) {
        Available_quantity = available_quantity;
    }

    public int getRequired_quantity() {
        return Required_quantity;
    }

    public void setRequired_quantity(int required_quantity) {
        Required_quantity = required_quantity;
    }

    public String getWarehouse_location() {
        return warehouse_location;
    }

    public void setWarehouse_location(String warehouse_location) {
        this.warehouse_location = warehouse_location;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }
}